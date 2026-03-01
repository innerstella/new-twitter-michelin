declare global {
  namespace kakao {
    namespace maps {
      function load(callback: () => void): void;

      class Map {
        constructor(container: HTMLElement, options: MapOptions);
        setCenter(latlng: LatLng): void;
      }

      class LatLng {
        constructor(lat: number, lng: number);
      }

      class Marker {
        constructor(options: MarkerOptions);
        setMap(map: Map | null): void;
      }

      interface MapOptions {
        center: LatLng;
        level: number;
      }

      interface MarkerOptions {
        position: LatLng;
        map?: Map;
        title?: string;
      }
    }
  }
}

export {};
