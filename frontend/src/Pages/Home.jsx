import React from 'react'
import { Container, Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Center } from "@chakra-ui/react";

import Login from '../Components/Authentication/Login';
import SignUp from '../Components/Authentication/SignUp';


const Home = () => {
  return (
    <Container maxW="xl" centerContent>

      <Center bg='white' h='20px' color='blue.400' mb="10px" mt="10px" width="100%" p={7} fontSize="2xl" fontWeight={"bold"}>
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

