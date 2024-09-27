import { Container, Stack } from '@chakra-ui/react'
import React from 'react'
import Extension from '../components/Extension'

export default function Extensions() {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
        <Extension />
        <Extension />
        <Extension />
        <Extension />
    </div>
  )
}
