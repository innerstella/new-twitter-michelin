import { styled } from "styled-components";

import Header from "./components/Header";
import Search from "../../components/Search";
import Group from "./components/Group";
import Content from "./components/Content";
import Banner from "./components/Banner";

const HomePage = () => {
  return (
    <>
      <MainContainer>
        <div className="margin60"></div>
        <Header />
        <div className="margin60"></div>
        <Search page="home" />
        <div className="margin35"></div>
        <Group />
        <div className="margin35"></div>
        <center>
          <Banner />
        </center>
        <div className="margin35"></div>
        <Content />
        <div className="margin120"></div>
      </MainContainer>
    </>
  );
};

export default HomePage;

const MainContainer = styled.div`
  width: 100vw;
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
  .margin60 {
    height: 60px;
  }
  .margin70 {
    height: 70px;
  }
  .margin120 {
    height: 120px;
  }
`;
