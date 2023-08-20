import { styled } from "styled-components";
import Search from "../../components/Search";
import Bar from "./components/Bar";
import TagList from "./components/TagList";
import Content from "../home/components/Content";
import { useLocation } from "react-router-dom";

const GroupPage = () => {
  const location = useLocation();
  const group = location.state.group;
  return (
    <>
      <MainContainer>
        <div className="margin60"></div>
        <Bar />
        <div className="margin50"></div>
        <Search page="group" group={group} />
        <div className="margin50"></div>
        <TagList group={group} />
        <div className="margin50"></div>
        <Content />
        <div className="margin250"></div>
      </MainContainer>
    </>
  );
};

export default GroupPage;

const MainContainer = styled.div`
  width: 390px;
  height: 100%;
  padding: 0 25px;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
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
