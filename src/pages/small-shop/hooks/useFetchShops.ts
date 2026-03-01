import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { Shop } from '../../../model/shop';
import { useShopFilterStore } from '../../../store/shopFilterStore';

const useFetchShops = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  const { isOffline, category: currCategory } = useShopFilterStore();

  useEffect(() => {
    const fetchShops = async () => {
      const { data } = await supabase
        .from('shop')
        .select('*')
        .eq('is_offline', isOffline)
        .eq('category', currCategory);

      setShops(data ?? []);
    };
    fetchShops();
  }, [currCategory, isOffline]);
  return { shops };
};

export default useFetchShops;
