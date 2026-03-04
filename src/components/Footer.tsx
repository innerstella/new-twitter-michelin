import { Flex, Text } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <Flex direction="row" gap="4" justify="center" wrap="wrap">
        <Link to="/about">
          <Text size="1" style={{ color: '#A0AEC0' }}>
            서비스 소개
          </Text>
        </Link>
        <Link to="/privacy">
          <Text size="1" style={{ color: '#A0AEC0' }}>
            개인정보처리방침
          </Text>
        </Link>
        <Link to="/log">
          <Text size="1" style={{ color: '#A0AEC0' }}>
            변경 로그
          </Text>
        </Link>
      </Flex>
      <Text size="1" style={{ color: '#CBD5E0', marginTop: '6px', display: 'block', textAlign: 'center' }}>
        © 2022 트위터 맛집 검색기
      </Text>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 16px 0 20px;
  text-align: center;
`;
