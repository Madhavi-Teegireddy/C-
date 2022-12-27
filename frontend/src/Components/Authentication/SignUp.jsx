import React from 'react'
import { FormControl, FormLabel, Input, InputGroup, VStack } from '@chakra-ui/react'
import { useState } from 'react'



const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [picLoading, setPicLoading] = useState(false);

    return (
    <VStack spacing={"5px"} color="black">
      <FormControl id="first-name" isRequired>
        <FormLabel>Name</FormLabel>
          <Input
          placeholder='Enter Your Name'
          onChange={(e) =>setName(e.target.value)}/>
      </FormControl>

      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
          <Input
          placeholder='Enter Your Email'
          onChange={(e) =>setEmail(e.target.value)}/>
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
          type={"password"}
          placeholder='Enter Password'
          onChange={(e) =>setEmail(e.target.value)}/>
          </InputGroup>
      </FormControl>

    </VStack>
  )
}

export default SignUp