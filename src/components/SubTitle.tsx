import { ReactNode } from "react"
import styled from "styled-components"

interface SubTitleProps {
  children: ReactNode
}

export const SubTitle = ({ children }: SubTitleProps) => {
  return <Text>{children}</Text>
}

const Text = styled.h1`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 35px;
`
