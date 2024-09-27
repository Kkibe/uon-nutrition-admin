import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Modal, ModalBody, ModalHeader, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useToast } from '@chakra-ui/react'
import { useForm } from "react-hook-form";

export default function Login({isOpen, onOpen, onClose }) {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [data, setData] = useState();
  const toast = useToast( )
  const onSubmit = (data) => {
     //console.log(data);
     toast({
       title: "Submitted!",
       status: "success",
       duration: 3000,
       isClosable: true
     });
   
     setData(data);
   };
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalHeader>
        <Heading fontSize="lg">Login</Heading>
      </ModalHeader>
      <ModalBody>
      <Flex width="full" align="center" justifyContent="center">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box my={4} textAlign="left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isRequired isInvalid={errors.name}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="test@test.com" />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl mt={6} isRequired isInvalid={errors.name}>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******" />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
              Sign In
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
      </ModalBody>
  </Modal>
  )
}
