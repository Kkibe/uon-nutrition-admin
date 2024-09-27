import { Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'


export default function Error() {
  return (
    <Flex flexDirection={'column'} alignItems={'center'} gap={5}>
        <Heading color={'red'}>404 Error</Heading>
        <Text>Ooops! Can't find this page!</Text>
        <Link ><FaArrowLeft className='icon'/> </Link>
    </Flex>
  )
}
