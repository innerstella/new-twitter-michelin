import { create } from 'zustand';
import SHOP_CATEGORY from '../model/shop/const/shop-category';

interface ShopFilterState {
  isOffline: boolean;
  category: string;
  setIsOffline: (isOffline: boolean) => void;
  setCategory: (category: string) => void;
}

export const useShopFilterStore = create<ShopFilterState>((set) => ({
  isOffline: true,
  category: SHOP_CATEGORY.RESTAURANT,
  setIsOffline: (isOffline) => set({ isOffline }),
  setCategory: (category) => set({ category }),
}));
