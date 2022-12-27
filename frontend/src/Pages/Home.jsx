import React from 'react'
import { Container, Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Center } from "@chakra-ui/react";

import Login from '../Components/Authentication/Login';
import SignUp from '../Components/Authentication/SignUp';


const Home = () => {
  return (
    <Container maxW="xl" centerContent>
      {/* <Box
        d="flex"
        p={3}
        bg="#90e0ef"
        w="100%"
        m="20px 0px 15px 0px"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="3xl" fontFamily="Work sans" fontWeight={"bold"} color="blue" justifyContent={"center"}>Talk-A-Tive</Text>
      </Box> */}
      <Center bg='#CCF5FF' h='20px' color='blue.500' mb="10px" mt="10px" width="100%" p={7} fontSize="2xl" fontWeight={"bold"}>
      Chit-Chatoo App</Center>

      

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="soft-rounded" colorScheme={"blue"}>
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Home

