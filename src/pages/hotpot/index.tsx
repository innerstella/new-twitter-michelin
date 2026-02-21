import { Spacer } from '@chakra-ui/react';
import { Box, Tabs } from '@radix-ui/themes';
import styled from 'styled-components';
import Template from '../../templates';
import Bar from '../group/components/Bar';
import KeywordList from './components/KeywordList';
import PopularList from './components/PopularList';
import SearchBar from './components/SearchBar';
import TotalList from './components/TotalList';

const HotpotPage = () => {
  return (
    <Template>
      <HotpotPageWrapper>
        <Bar title="🍲 훠궈 소스 백과사전" />
        <Spacer height="20px" />
        <SearchBar />
        <Spacer height="24px" />
        <Tabs.Root defaultValue="total">
          <Tabs.List>
            <Tabs.Trigger value="total">전체 소스</Tabs.Trigger>
            <Tabs.Trigger value="popular">인기 소스</Tabs.Trigger>
            <Tabs.Trigger value="keyword">키워드</Tabs.Trigger>
          </Tabs.List>
          <Box pt="4">
            <Tabs.Content value="total">
              <TotalList />
            </Tabs.Content>
            <Tabs.Content value="popular">
              <PopularList />
            </Tabs.Content>
            <Tabs.Content value="keyword">
              <KeywordList />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </HotpotPageWrapper>
    </Template>
  );
};

export default HotpotPage;

const HotpotPageWrapper = styled.div`
  width: 100%;
  min-height: 100dvh;
  padding: 0 25px;
  background-color: #fafafa;
  font-family: 'SUIT', sans-serif;
  box-sizing: border-box;
`;
