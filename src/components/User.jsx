import { Avatar, AvatarBadge, Button, Card, CardBody, CardFooter, CardHeader, IconButton, Stack, Td, Text, Tr } from '@chakra-ui/react'
import React from 'react'
import { FaNode } from 'react-icons/fa';

export default function User() {
  const onOpen = () => {

  }
  return (
      <Tr>
        <Td>1</Td>
        <Td display='flex' alignItems='center'>
          <Avatar size='md' marginRight={2} name='Ryan Florence' src='https://bit.ly/ryan-florence' >
            <AvatarBadge borderColor='papayawhip' bg='tomato' boxSize='1.25em' />
          </Avatar>Kibet</Td>
        <Td>kibet@gmail.com</Td>
        <Td>Admin</Td>
        <Td isNumeric>+12</Td>
        <Td><Text >14/06/21</Text></Td>
      </Tr>
  )
}
