import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { Shop } from '../../../model/shop';
import { useShopFilterStore } from '../../../store/shopFilterStore';

const useFetchShops = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isOffline, category: currCategory } = useShopFilterStore();

  useEffect(() => {
    const fetchShops = async () => {
      setIsLoading(true);
      const { data } = await supabase
        .from('shop')
        .select('*')
        .eq('is_offline', isOffline)
        .eq('category', currCategory);

      setShops(data ?? []);
      setIsLoading(false);
    };
    fetchShops();
  }, [currCategory, isOffline]);
  return { shops, isLoading };
};

export default useFetchShops;
