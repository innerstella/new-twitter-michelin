import { Spacer } from '@chakra-ui/react';
import { Flex, RadioCards, Text } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Footer from '../../components/Footer';
import Search from '../../components/PlaceSearch';
import Template from '../../templates';
import LOG_DATA from '../log/data';
import Banner from './components/Banner';
import Coffee from './components/Coffee';
import Header from './components/Header';
import Noti from './components/Noti';
import PopupBanner from './components/PopupBanner';

const HomePage = () => {
  const { version, changes } = LOG_DATA[0];

  return (
    <Template>
      <PopupBanner />
      <MainContainer>
        <div>
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
                <Link to="/smallshop">
                  <RadioCards.Item value="smallshop" style={{ width: '150px' }}>
                    <Text size="2" weight="bold">
                      🔔 소상공인 찾기
                    </Text>
                  </RadioCards.Item>
                </Link>
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
          <Noti badgeText={version} text={<>{changes}</>} />
        </div>
        <Footer />
      </MainContainer>
    </Template>
  );
};

export default HomePage;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100dvh;
  padding: 0 25px;
  background-color: #fafafa;
  font-family: 'SUIT', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
