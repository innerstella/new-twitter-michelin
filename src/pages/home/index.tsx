import { styled } from "styled-components"

import Header from "./components/Header"
import Search from "../../components/Search"
import Group from "./components/Group"
import Content from "./components/Content"
import Banner from "./components/Banner"
import Template from "../../templates"

const HomePage = () => {
  return (
    <Template>
      <MainContainer>
        <Header />
        <div className="margin60" />
        <Search page="home" />
        <div className="margin35" />
        <Group />
        <div className="margin35" />
        <center>
          <Banner />
        </center>
        <div className="margin35" />
        <Content />
      </MainContainer>
    </Template>
  )
}

export default HomePage

const MainContainer = styled.div`
  width: 100%;
  height: 100dvh;
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
`
