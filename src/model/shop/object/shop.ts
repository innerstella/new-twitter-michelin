export interface Shop {
  id: string;
  name: string;
  is_offline: boolean;
  category: string;
  description?: string;
  address?: string;
  phone?: string;
  site_url?: string;
  twitter_url?: string;
  map_url?: string;
  latitude?: number;
  longitude?: number;
}
