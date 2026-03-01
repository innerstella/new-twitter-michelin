import { create } from 'zustand';
import SHOP_CATEGORY from '../model/shop/const/shop-category';
import { Shop } from '../model/shop';

interface LatLng {
  lat: number;
  lng: number;
}

type SelectionSource = 'card' | 'map' | null;

interface ShopFilterState {
  isOffline: boolean;
  category: string;
  selectedShop: Shop | null;
  selectedShopSource: SelectionSource;
  currentLocation: LatLng | null;
  setIsOffline: (isOffline: boolean) => void;
  setCategory: (category: string) => void;
  setSelectedShop: (shop: Shop | null, source?: SelectionSource) => void;
  setCurrentLocation: (location: LatLng | null) => void;
}

export const useShopFilterStore = create<ShopFilterState>((set) => ({
  isOffline: true,
  category: SHOP_CATEGORY.RESTAURANT,
  selectedShop: null,
  selectedShopSource: null,
  currentLocation: null,
  setIsOffline: (isOffline) => set({ isOffline }),
  setCategory: (category) => set({ category }),
  setSelectedShop: (shop, source = null) =>
    set({ selectedShop: shop, selectedShopSource: source }),
  setCurrentLocation: (location) => set({ currentLocation: location }),
}));
