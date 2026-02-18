import { Spacer } from '@chakra-ui/react';
import { Flex, RadioCards, Text } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Search from '../../components/PlaceSearch';
import Template from '../../templates';
import Banner from './components/Banner';
import Content from './components/Content';
import Header from './components/Header';

const HomePage = () => {
  return (
    <Template>
      <MainContainer>
        <Header />
        <Spacer height="60px" />
        <Search page="home" />
        <Spacer height="35px" />
        <Flex>
          <RadioCards.Root>
            <Flex direction="row" justify="between" width="340px">
              <Link to="/group-list">
                <RadioCards.Item value="group" style={{ width: '160px' }}>
                  <Text size="2" weight="bold">
                    👀 그룹별로 보기
                  </Text>
                </RadioCards.Item>
              </Link>
              <Link to="/recommend">
                <RadioCards.Item value="recommend" style={{ width: '160px' }}>
                  <Text size="2" weight="bold">
                    ✨ 추천 해시태그 보기
                  </Text>
                </RadioCards.Item>
              </Link>
            </Flex>
          </RadioCards.Root>
        </Flex>
        <Spacer height="35px" />
        <center>
          <Banner />
        </center>
        <Spacer height="35px" />
        <Content />
      </MainContainer>
    </Template>
  );
};

export default HomePage;

const MainContainer = styled.div`
  width: 100%;
  height: 100dvh;
  padding: 0 25px;
  background-color: #fafafa;
  font-family: 'SUIT', sans-serif;
`;
