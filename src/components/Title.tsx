import { ReactNode } from "react"
import styled from "styled-components"

interface TitleProps {
  children: ReactNode
}

export const Title = ({ children }: TitleProps) => {
  return <Text>{children}</Text>
}

const Text = styled.h1`
  color: #000;
  font-size: 28px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin-bottom: 40px;
`
