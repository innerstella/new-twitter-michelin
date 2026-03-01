import { SegmentedControl } from '@radix-ui/themes';
import { useEffect } from 'react';
import SHOP_CATEGORY from '../../../model/shop/const/shop-category';
import { useShopFilterStore } from '../../../store/shopFilterStore';

const ServiceMode = () => {
  const { isOffline, setIsOffline, setCategory } = useShopFilterStore();

  useEffect(() => {
    setCategory(isOffline ? SHOP_CATEGORY.RESTAURANT : SHOP_CATEGORY.FRUITES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOffline]);

  return (
    <SegmentedControl.Root defaultValue={isOffline ? 'inbox' : 'drafts'}>
      <SegmentedControl.Item value="inbox" onClick={() => setIsOffline(true)}>
        오프라인
      </SegmentedControl.Item>
      <SegmentedControl.Item value="drafts" onClick={() => setIsOffline(false)}>
        온라인
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};

export default ServiceMode;
