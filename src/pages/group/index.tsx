import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import Template from '../../templates';
import Content from '../home/components/Content';
import Bar from './components/Bar';
import TagList from './components/TagList';

const GroupPage = () => {
  const location = useLocation();
  const group = location.state.group;

  return (
    <Template>
      <MainContainer>
        <Bar title={`# ${group}`} />
        <TagList group={group} />
        <div className="margin50"></div>
        <Content />
      </MainContainer>
    </Template>
  );
};

export default GroupPage;

const MainContainer = styled.div`
  width: 100%;
  height: 100dvh;
  padding: 0 25px;
  background-color: #fafafa;
  font-family: 'SUIT', sans-serif;
  .margin35 {
    height: 35px;
  }
  .margin40 {
    height: 40px;
  }
  .margin50 {
    height: 50px;
  }
  .margin60 {
    height: 60px;
  }
  .margin250 {
    height: 250px;
  }
`;
