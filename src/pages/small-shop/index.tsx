import { Link, Spacer } from '@chakra-ui/react';
import { ScrollArea, Text } from '@radix-ui/themes';
import { useShopFilterStore } from '../../store/shopFilterStore';
import { MainContainer } from '../../styles/main';
import Template from '../../templates';
import Bar from '../group/components/Bar';
import Banner from '../home/components/Banner';
import Noti from '../home/components/Noti';
import { ServiceMode } from './components';
import CategoryNav from './components/category-nav';
import { ShopCard } from './components/shop-card';
import { ShopCardSkeleton } from './components/shop-card-skeleton';
import useFetchShops from './hooks/useFetchShops';

const SmallShopPage = () => {
  const { isOffline } = useShopFilterStore();

  const { shops, isLoading } = useFetchShops();

  return (
    <Template>
      <MainContainer>
        <Bar title="🔔 딸랑! 소상공인 가게 찾기" />
        <Noti
          badgeText="이벤트"
          text={
            <Text>
              소상공인이 운영하는 가게 홍보 배너를 게시해드립니다!
              <br />
              <Link
                href="https://open.kakao.com/o/swA9S8Ud"
                target="_blank"
                textDecoration="underline"
              >
                🔗 문의 링크
              </Link>
            </Text>
          }
        />
        <Spacer height="10px" />
        <Banner />
        <Spacer height="20px" />
        <ServiceMode />
        <CategoryNav />
        <ScrollArea style={{ height: 'calc(100dvh - 350px)' }}>
          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i}>
                  <Spacer height="10px" />
                  <ShopCardSkeleton />
                </div>
              ))
            : shops.map((shop) => (
                <div key={shop.id}>
                  <Spacer height="10px" />
                  <ShopCard shop={shop} isOffline={isOffline} />
                </div>
              ))}
        </ScrollArea>
      </MainContainer>
    </Template>
  );
};

export default SmallShopPage;
