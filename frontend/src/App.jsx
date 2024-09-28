import { ChakraProvider, Box, Heading } from "@chakra-ui/react";
import ChatBox from "./components/ChatBox";
import './App.css'

function App() {

  return (
    <ChakraProvider>
      <Box p={5}>
        <Heading as="h1" mb={6}>
          Real-Time Chat
        </Heading>
        <ChatBox />
      </Box>
    </ChakraProvider>
  )
}

export default App
