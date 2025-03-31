import styled from "styled-components"
import Template from "../../templates"
import Header from "../home/components/Header"
import { Spacer } from "@chakra-ui/react"
import { Title } from "../../components"
import { Box, Tabs, Text } from "@radix-ui/themes"

const HotpotPage = () => {
  return (
    <Template>
      <HotpotPageWrapper>
        <Header />
        <Spacer height="60px" />
        <Title>어떤 소스를 만들어볼까요?</Title>
        <Tabs.Root defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger value="account">전체 보기</Tabs.Trigger>
            <Tabs.Trigger value="documents">인기 소스</Tabs.Trigger>
            <Tabs.Trigger value="settings">키워드</Tabs.Trigger>
          </Tabs.List>
          <Box pt="3">
            <Tabs.Content value="account">
              <Text size="2">Make changes to your account.</Text>
            </Tabs.Content>

            <Tabs.Content value="documents">
              <Text size="2">Access and update your documents.</Text>
            </Tabs.Content>

            <Tabs.Content value="settings">
              <Text size="2">
                Edit your profile or update contact information.
              </Text>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </HotpotPageWrapper>
    </Template>
  )
}

export default HotpotPage

const HotpotPageWrapper = styled.div`
  width: 100%;
  height: 100dvh;
  padding: 0 25px;
  background-color: #fafafa;
  font-family: "SUIT", sans-serif;
`
