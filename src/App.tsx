import React from "react"
import "./App.css"
import AppRouter from "./Router"
import { ChakraProvider } from "@chakra-ui/react"
import "@radix-ui/themes/styles.css"
import { Theme } from "@radix-ui/themes"

function App() {
  return (
    <>
      <ChakraProvider>
        <Theme accentColor="tomato">
          <AppRouter />
        </Theme>
      </ChakraProvider>
    </>
  )
}

export default App
