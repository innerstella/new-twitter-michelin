import { Spacer } from '@chakra-ui/react';
import { ScrollArea, Theme } from '@radix-ui/themes';
import { motion, useDragControls } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Shop } from '../../../model/shop';
import { useShopFilterStore } from '../../../store/shopFilterStore';
import { ShopCard } from './shop-card';
import { ShopCardSkeleton } from './shop-card-skeleton';

interface Props {
  shops: Shop[];
  isLoading: boolean;
}

const SHEET_HEIGHT = 550;
const PEEK_RATIO = 0.35; // 접혔을 때 뷰포트의 30% 만큼 보임

const getCollapsedY = () =>
  Math.max(0, SHEET_HEIGHT - Math.round(window.innerHeight * PEEK_RATIO));

const ShopListSheet = ({ shops, isLoading }: Props) => {
  const { isOffline, selectedShop, selectedShopSource } = useShopFilterStore();
  const dragControls = useDragControls();
  const constraintsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [collapsedY, setCollapsedY] = useState(getCollapsedY);
  const [sheetY, setSheetY] = useState(() => getCollapsedY());

  useEffect(() => {
    const handleResize = () => {
      const next = getCollapsedY();
      setCollapsedY(next);
      setSheetY((prev) => (prev !== 0 ? next : 0));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!selectedShop) return;

    if (selectedShopSource === 'map') {
      // 시트 열고 해당 카드로 스크롤
      setSheetY(0);
      setTimeout(() => {
        cardRefs.current[selectedShop.id]?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 350); // 시트 열리는 애니메이션 후 스크롤
    } else {
      // 카드 클릭 시 시트 접기
      setSheetY(collapsedY);
    }
  }, [selectedShop, selectedShopSource, collapsedY]);

  return ReactDOM.createPortal(
    <Theme accentColor="green">
      <Overlay ref={constraintsRef}>
        <Sheet
          drag="y"
          dragControls={dragControls}
          dragConstraints={{ top: 0, bottom: collapsedY }}
          dragElastic={0.1}
          initial={{ y: collapsedY }}
          animate={{ y: sheetY }}
          onDragEnd={(_, info) => setSheetY(info.offset.y > 0 ? collapsedY : 0)}
        >
          <Handle onPointerDown={(e) => dragControls.start(e)} />
          <ScrollArea
            style={{ height: `${SHEET_HEIGHT - 28}px`, padding: '0 20px' }}
          >
            {isLoading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i}>
                    <Spacer height="10px" />
                    <ShopCardSkeleton />
                  </div>
                ))
              : shops.map((shop) => (
                  <div
                    key={shop.id}
                    ref={(el) => {
                      cardRefs.current[shop.id] = el;
                    }}
                  >
                    <Spacer height="10px" />
                    <ShopCard shop={shop} isOffline={isOffline} />
                  </div>
                ))}
          </ScrollArea>
        </Sheet>
      </Overlay>
    </Theme>,
    document.body
  );
};

export default ShopListSheet;

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  height: ${SHEET_HEIGHT}px;
  z-index: 100;
  pointer-events: none;
`;

const Sheet = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${SHEET_HEIGHT}px;
  background: #fff;
  border-radius: 16px 16px 0 0;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.1);
  pointer-events: all;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

const Handle = styled.div`
  width: 40px;
  height: 4px;
  background: #ddd;
  border-radius: 2px;
  margin: 12px auto;
  cursor: grab;
`;
