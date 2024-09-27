import React from 'react'
import User from '../../components/User'
import { Button, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr, Wrap, WrapItem } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
export default function Users() {
  return (
<TableContainer>
  <Text>Admin Users</Text>
<Wrap>
  <WrapItem>
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
  </WrapItem>
  <WrapItem>
    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  </WrapItem>
</Wrap>
  <Table variant='striped' colorScheme='teal'  size='sm'>
    <TableCaption>Web Tools Admin Users</TableCaption>
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>USERNAME</Th>
        <Th>EMAIL</Th>
        <Th>ROLE</Th>
        <Th isNumeric>POSTS</Th>
        <Th>EMPLOYED</Th>
      </Tr>
    </Thead>
    <Tbody>
      <User />
      <User />
      <User />
      <User />
    </Tbody>
    <Tfoot>
      <Tr>
        <Th><Button>Load More</Button></Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
}
