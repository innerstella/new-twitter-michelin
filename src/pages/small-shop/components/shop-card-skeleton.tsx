import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -340px 0; }
  100% { background-position: 340px 0; }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 680px 100%;
  animation: ${shimmer} 1.2s infinite linear;
  border-radius: 4px;
`;

const CardWrapper = styled.div`
  width: 340px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ShopCardSkeleton = () => (
  <CardWrapper>
    <SkeletonBase style={{ width: '60%', height: '18px' }} />
    <SkeletonBase style={{ width: '100%', height: '14px' }} />
    <SkeletonBase style={{ width: '80%', height: '14px' }} />
  </CardWrapper>
);
