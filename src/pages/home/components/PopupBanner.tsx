import { useState } from 'react';
import { styled } from 'styled-components';

const POPUP_LINK = 'https://x.com/bboeverbx/status/2022687295560970288?s=20';
const POPUP_IMAGE = '/assets/pop-up/bx.webp';
const EXPIRE_DATE = '2026-02-25 23:59:59';

const PopupBanner = () => {
  const [visible, setVisible] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleClose = () => {
    setVisible(false);
  };

  const handleLink = () => {
    window.open(POPUP_LINK, '_blank');
  };

  const today = new Date();
  const expireDate = new Date(EXPIRE_DATE);
  const isExpired = expireDate.getTime() < today.getTime();

  if (!visible || isExpired) return null;

  return (
    <Overlay onClick={handleClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ImageWrapper onClick={handleLink}>
          {!imageLoaded && <Skeleton />}
          <img
            src={POPUP_IMAGE}
            width={806}
            height={1140}
            alt="팝업 배너"
            onLoad={() => setImageLoaded(true)}
          />
        </ImageWrapper>
        <ButtonRow>
          <ActionButton onClick={handleLink}>축하하러 가기 🥳</ActionButton>
          <Divider />
          <CloseButton onClick={handleClose}>닫기</CloseButton>
        </ButtonRow>
      </Modal>
    </Overlay>
  );
};

export default PopupBanner;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  width: 320px;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  width: 100%;

  img {
    width: 100%;
    display: block;
  }
`;

const shimmer = `
  @keyframes shimmer {
    0% { background-position: -320px 0; }
    100% { background-position: 320px 0; }
  }
`;

const Skeleton = styled.div`
  ${shimmer}
  width: 100%;
  height: 450px;
  aspect-ratio: 1 / 1;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 640px 100%;
  animation: shimmer 1.4s infinite linear;
`;

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  height: 52px;
  border-top: 1px solid #e8e8e8;
`;

const ActionButton = styled.button`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: #222;
  cursor: pointer;
  font-family: 'SUIT', sans-serif;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: #e8e8e8;
`;

const CloseButton = styled.button`
  flex: 1;
  height: 100%;
  background: none;
  border: none;
  font-size: 14px;
  color: #888;
  cursor: pointer;
  font-family: 'SUIT', sans-serif;

  &:hover {
    background-color: #f5f5f5;
  }
`;
