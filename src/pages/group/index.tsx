import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import PlaceSearch from '../../components/PlaceSearch';
import Template from '../../templates';
import Bar from './components/Bar';
import TagList from './components/TagList';

const GroupPage = () => {
  const location = useLocation();
  const group = location.state.group;

  return (
    <Template>
      <MainContainer>
        <Bar title={`# ${group}`} />
        <PlaceSearch page="group" group={group} />
        <div className="margin25" />
        <TagList group={group} />
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
  .margin25 {
    height: 25px;
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
