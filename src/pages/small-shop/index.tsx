import { Link, Spacer } from '@chakra-ui/react';
import { Button, Flex, Text } from '@radix-ui/themes';
import { useShopFilterStore } from '../../store/shopFilterStore';
import { MainContainer } from '../../styles/main';
import Template from '../../templates';
import Bar from '../group/components/Bar';
import Noti from '../home/components/Noti';
import { ServiceMode } from './components';
import CategoryNav from './components/category-nav';
import ShopMap from './components/map';
import { ShopCard } from './components/shop-card';
import ShopListSheet from './components/shop-list-sheet';
import useFetchShops from './hooks/useFetchShops';
import LOCATION_ICON from './location.svg';

const SmallShopPage = () => {
  const { shops, isLoading } = useFetchShops();
  const { setCurrentLocation, isOffline } = useShopFilterStore();

  const handleLocationClick = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setCurrentLocation({ lat: coords.latitude, lng: coords.longitude });
      },
      (err) => console.error('위치 권한 거부됨', err)
    );
  };

  return (
    <Template>
      <MainContainer>
        <Bar title="🔔 딸랑! 소상공인 가게 찾기" />
        <Noti
          badgeText="이벤트"
          text={
            <Text>
              소상공인이 운영하는 가게 홍보 배너를 게시해드립니다!
              <br />
              <Link
                href="https://open.kakao.com/o/swA9S8Ud"
                target="_blank"
                textDecoration="underline"
              >
                🔗 문의 링크
              </Link>
            </Text>
          }
        />
        <Spacer height="10px" />
        <Flex justify="between" align="center">
          <ServiceMode />
          <Flex align="center" gap="2">
            <Button
              color="teal"
              variant="solid"
              size="2"
              onClick={handleLocationClick}
            >
              <img src={LOCATION_ICON} alt="location" />
              <Text size="2">현재 위치</Text>
            </Button>
          </Flex>
        </Flex>
        <CategoryNav />
        <Spacer height="10px" />
        {isOffline ? (
          <>
            <ShopMap data={shops} />
            <ShopListSheet shops={shops} isLoading={isLoading} />
          </>
        ) : (
          shops.map((shop) => (
            <>
              <Spacer height="10px" />
              <ShopCard key={shop.id} shop={shop} isOffline={isOffline} />
            </>
          ))
        )}
      </MainContainer>
    </Template>
  );
};

export default SmallShopPage;
