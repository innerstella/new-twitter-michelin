import { styled } from "styled-components";

const Header = () => {
  return (
    <LogoContainer>
      <span className="material-symbols-outlined title">restaurant</span>
      <span className="title">&nbsp; 트위터 맛집 검색기</span>
    </LogoContainer>
  );
};

export default Header;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  .title {
    color: #4a5568;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
