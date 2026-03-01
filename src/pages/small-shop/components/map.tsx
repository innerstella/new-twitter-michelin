import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Shop } from '../../../model/shop';
import { useShopFilterStore } from '../../../store/shopFilterStore';

const DEFAULT_LAT = 37.5665;
const DEFAULT_LNG = 126.978;

const loadKakaoMapScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if ((window as any).kakao?.maps) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_JS_API_KEY}&autoload=false`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Kakao Maps SDK 로드 실패'));
    document.head.appendChild(script);
  });
};

const ShopMap = ({ data }: { data: Shop[] }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const selectedOverlayRef = useRef<any>(null);
  const dataRef = useRef<Shop[]>(data);
  const { selectedShop, currentLocation, setSelectedShop } = useShopFilterStore();
  const setSelectedShopRef = useRef(setSelectedShop);
  setSelectedShopRef.current = setSelectedShop;

  const addMarkers = (kakao: any, shops: Shop[]) => {
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];

    const validShops = shops.filter(
      (shop) => shop.latitude != null && shop.longitude != null
    );
    if (validShops.length === 0) return;

    validShops.forEach((shop) => {
      const marker = new kakao.maps.Marker({
        map: mapInstanceRef.current,
        position: new kakao.maps.LatLng(shop.latitude!, shop.longitude!),
        title: shop.name,
      });
      kakao.maps.event.addListener(marker, 'click', () => {
        setSelectedShopRef.current(shop, 'map');
      });
      markersRef.current.push(marker);
    });

    mapInstanceRef.current.setCenter(
      new kakao.maps.LatLng(validShops[0].latitude!, validShops[0].longitude!)
    );
  };

  // 지도 초기화 (한 번만)
  useEffect(() => {
    if (!mapRef.current) return;

    loadKakaoMapScript()
      .then(() => {
        const kakao = (window as any).kakao;
        kakao.maps.load(() => {
          if (mapInstanceRef.current) return;
          mapInstanceRef.current = new kakao.maps.Map(mapRef.current!, {
            center: new kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG),
            level: 5,
          });
          // 초기화 완료 후 이미 로드된 데이터로 마커 추가
          addMarkers(kakao, dataRef.current);
        });
      })
      .catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 데이터 변경 시 마커 업데이트
  useEffect(() => {
    dataRef.current = data;
    if (!mapInstanceRef.current) return;
    const kakao = (window as any).kakao;
    if (!kakao) return;
    addMarkers(kakao, data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // 현재 위치로 지도 중심 이동
  useEffect(() => {
    const kakao = (window as any).kakao;
    if (!kakao || !mapInstanceRef.current || !currentLocation) return;

    mapInstanceRef.current.setCenter(
      new kakao.maps.LatLng(currentLocation.lat, currentLocation.lng)
    );
    mapInstanceRef.current.setLevel(3);
  }, [currentLocation]);

  // 선택된 shop — CustomOverlay로 핀 표시
  useEffect(() => {
    const kakao = (window as any).kakao;
    if (!kakao || !mapInstanceRef.current) return;

    if (selectedOverlayRef.current) {
      selectedOverlayRef.current.setMap(null);
      selectedOverlayRef.current = null;
    }

    if (!selectedShop?.latitude || !selectedShop?.longitude) return;

    const position = new kakao.maps.LatLng(
      selectedShop.latitude,
      selectedShop.longitude
    );

    const content = `
      <div style="
        position: relative;
        display: inline-block;
        transform:  translateY(-200%) ;
      ">
        <div style="
          background: #2E9F8A;
          color: white;
          padding: 6px 10px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 2px 8px rgba(0,0,0,0.25);
        ">${selectedShop.name}</div>
        <div style="
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 6px solid #2E9F8A;
        "></div>
      </div>
    `;

    selectedOverlayRef.current = new kakao.maps.CustomOverlay({
      position,
      content,
      map: mapInstanceRef.current,
      zIndex: 10,
    });

    mapInstanceRef.current.setCenter(position);
    mapInstanceRef.current.setLevel(3);
  }, [selectedShop]);

  return <MapContainer ref={mapRef} />;
};

export default ShopMap;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
`;
