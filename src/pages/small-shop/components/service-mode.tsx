import { SegmentedControl } from '@radix-ui/themes';
import SHOP_CATEGORY from '../../../model/shop/const/shop-category';
import { useShopFilterStore } from '../../../store/shopFilterStore';

const ServiceMode = () => {
  const { isOffline, setIsOffline, setCategory } = useShopFilterStore();

  const handleOffline = () => {
    setIsOffline(true);
    setCategory(SHOP_CATEGORY.RESTAURANT);
  };

  const handleOnline = () => {
    setIsOffline(false);
    setCategory(SHOP_CATEGORY.FRUITES);
  };

  return (
    <SegmentedControl.Root defaultValue={isOffline ? 'inbox' : 'drafts'}>
      <SegmentedControl.Item value="inbox" onClick={handleOffline}>
        오프라인
      </SegmentedControl.Item>
      <SegmentedControl.Item value="drafts" onClick={handleOnline}>
        온라인
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  );
};

export default ServiceMode;
