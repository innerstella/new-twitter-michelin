import { ReactNode } from "react"
import styled from "styled-components"
import DisplayAds from "../components/DisplayAd"

interface TemplateProps {
  children: ReactNode
  showAd?: boolean
}

const Template = ({ children, showAd = true }: TemplateProps) => {
  return (
    <Background>
      <Content>
        {children}
        {showAd && <DisplayAds />}
      </Content>
    </Background>
  )
}

export default Template

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  height: 100dvh;

  @media (min-width: 400px) {
    width: 100vw;
    background-color: gray;
  }
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 400px) {
    width: 400px;
  }
`
