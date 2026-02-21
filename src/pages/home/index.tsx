import { Spacer } from '@chakra-ui/react';
import { Flex, RadioCards, Text } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Search from '../../components/PlaceSearch';
import Template from '../../templates';
import Banner from './components/Banner';
import Coffee from './components/Coffee';
import Header from './components/Header';
import Noti from './components/Noti';

const HomePage = () => {
  return (
    <Template>
      <MainContainer>
        <Header />
        <Spacer height="60px" />
        <Search page="home" />
        <Spacer height="35px" />
        <Flex width="350px" justify="center">
          <RadioCards.Root>
            <Flex direction="row" justify="between" width="325px">
              <Link to="/group-list">
                <RadioCards.Item value="group" style={{ width: '150px' }}>
                  <Text size="2" weight="bold">
                    👀 그룹별로 보기
                  </Text>
                </RadioCards.Item>
              </Link>
              <Link to="/recommend">
                <RadioCards.Item value="recommend">
                  <Text size="2" weight="bold">
                    ✨ 추천 해시태그 보기
                  </Text>
                </RadioCards.Item>
              </Link>
            </Flex>
            <Flex direction="row" justify="between" width="325px">
              <RadioCards.Item
                value="smallshop"
                style={{ width: '150px' }}
                onClick={() =>
                  window.open('https://smallshop-archive.web.app/')
                }
              >
                <Text size="2" weight="bold">
                  🔔 소상공인 찾기
                </Text>
              </RadioCards.Item>
              <Link to="/hotpot">
                <RadioCards.Item value="sauce">
                  <Text size="2" weight="bold">
                    🍲 훠궈 소스 백과사전
                  </Text>
                </RadioCards.Item>
              </Link>
            </Flex>
          </RadioCards.Root>
        </Flex>
        <Spacer height="35px" />
        <Coffee />
        <Spacer height="35px" />
        <center>
          <Banner />
        </center>
        <Spacer height="20px" />
        <Noti />
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
