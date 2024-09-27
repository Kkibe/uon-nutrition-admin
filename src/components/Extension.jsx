import { Avatar, Badge, Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaApper, FaBookmark, FaChrome, FaComment, FaEdit, FaShare, FaStar, FaUser } from 'react-icons/fa';
import Logo from '../assets/icon.png';
export default function Extension() {
  return (
<Card maxW='sm' margin={4}>
   <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='2' alignItems='center' flexWrap='wrap'>
        <FaChrome />
        <Box>
          <Heading size='sm'>chrome  <Badge colorScheme='green'>Live</Badge></Heading>
          <Text>Art & Design </Text>
        </Box>
      </Flex>
      <Avatar name='Segun Adebayo' src={Logo} />
    </Flex>
  </CardHeader>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      maxHeight={155}
      minWidth={"100%"}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' color='blue.600'>AI Image Editor</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <Button flex='1' variant='ghost' leftIcon={<FaStar />}>
      13.2k
    </Button>
    <Button flex='1' variant='text' leftIcon={<FaUser />} disabled>
      2.2
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<FaEdit />}>
      Edit
    </Button>
    <Button flex='1' variant='ghost' leftIcon={<FaShare />}>
      Share
    </Button>
  </CardFooter>
</Card>
  )
}
