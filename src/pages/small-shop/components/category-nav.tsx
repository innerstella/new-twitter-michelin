import { TabNav } from '@radix-ui/themes';

import { useEffect } from 'react';
import SHOP_CATEGORY from '../../../model/shop/const/shop-category';
import { useShopFilterStore } from '../../../store/shopFilterStore';
import getCategoryName from '../utils/getCategoryName';

const OFFLINE_CATEGORY_LIST = {
  [SHOP_CATEGORY.RESTAURANT]: '식당',
  [SHOP_CATEGORY.CAFE]: '카페',
  [SHOP_CATEGORY.LIFE]: '생활/문화',
  [SHOP_CATEGORY.VISIT]: '방문',
};

const ONLINE_CATEGORY_LIST = {
  [SHOP_CATEGORY.FRUITES]: '과일',
  [SHOP_CATEGORY.DAILY_GOODS]: '생활 잡화',
  [SHOP_CATEGORY.FOOD]: '식품',
  [SHOP_CATEGORY.HYGIENE]: '위생',
  [SHOP_CATEGORY.KITCHEN_WARE]: '주방용품',
};

const CategoryNav = () => {
  const {
    category: currCategory,
    setCategory: setCurrCategory,
    isOffline,
  } = useShopFilterStore();

  const categoryList = isOffline ? OFFLINE_CATEGORY_LIST : ONLINE_CATEGORY_LIST;

  useEffect(() => {
    setCurrCategory(Object.keys(categoryList)[0] as SHOP_CATEGORY);
  }, [isOffline]);

  return (
    <TabNav.Root>
      {Object.keys(categoryList).map((category) => (
        <TabNav.Link
          key={category}
          onClick={() => setCurrCategory(category)}
          active={category === currCategory}
        >
          {getCategoryName(category as SHOP_CATEGORY)}
        </TabNav.Link>
      ))}
    </TabNav.Root>
  );
};

export default CategoryNav;
