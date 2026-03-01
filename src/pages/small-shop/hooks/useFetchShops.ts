import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { Shop } from '../../../model/shop';
import { useShopFilterStore } from '../../../store/shopFilterStore';

const useFetchShops = (): { shops: Shop[]; isLoading: boolean } => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isOffline, category: currCategory } = useShopFilterStore();

  useEffect(() => {
    let cancelled = false;

    const fetchShops = async () => {
      setIsLoading(true);
      const { data } = await supabase
        .from('shop_v2')
        .select('*')
        .eq('is_offline', isOffline)
        .eq('category', currCategory);

      if (!cancelled) {
        setShops(data ?? []);
        setIsLoading(false);
      }
    };
    fetchShops();

    return () => {
      cancelled = true;
    };
  }, [currCategory, isOffline]);
  return { shops, isLoading };
};

export default useFetchShops;
