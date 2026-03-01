import SHOP_CATEGORY from '../../../model/shop/const/shop-category';

const SHOP_CATEGORY_NAME: Record<SHOP_CATEGORY, string> = {
  [SHOP_CATEGORY.RESTAURANT]: '식당',
  [SHOP_CATEGORY.CAFE]: '카페',
  [SHOP_CATEGORY.LIFE]: '생활',
  [SHOP_CATEGORY.FRUITES]: '과일',
  [SHOP_CATEGORY.DAILY_GOODS]: '일상',
  [SHOP_CATEGORY.FOOD]: '음식',
  [SHOP_CATEGORY.HYGIENE]: '위생',
  [SHOP_CATEGORY.KITCHEN_WARE]: '주방용품',
  [SHOP_CATEGORY.VISIT]: '방문',
};

const getCategoryName = (category: SHOP_CATEGORY): string => {
  return SHOP_CATEGORY_NAME[category];
};

export default getCategoryName;
