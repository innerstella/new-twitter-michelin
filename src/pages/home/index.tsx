import { styled } from "styled-components"
import Header from "./components/Header"
import Search from "../../components/PlaceSearch"
import Group from "./components/Group"
import Content from "./components/Content"
import Banner from "./components/Banner"
import Template from "../../templates"
import { Spacer } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Template>
      <MainContainer>
        <Header />
        <Spacer height="60px" />
        <Search page="home" />
        <Spacer height="35px" />
        <Group />
        <Spacer height="35px" />
        <center>
          <Banner />
        </center>
        <Spacer height="35px" />
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
`
