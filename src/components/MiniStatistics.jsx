import { Box, Card, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function MiniStatistics({title, amount, percentage, icon}) {
  return (
    <Card padding={4}>
        <Flex display='flex' alignItems='center' justifyContent='space-between'>
            <Flex display='flex' alignItems='center' justifyContent='space-evenly' flexDirection='column'>
                <Text fontSize={18} fontWeight={550}>{title}</Text>
                <Text display='flex' fontSize={20}>{amount}<Text fontSize={17} color='green' margin='5px'>{percentage}</Text></Text>
            </Flex>
            <Box padding='10px' borderRadius={50} backgroundColor='blue'>{icon}</Box>
        </Flex>
    </Card>
  )
}
