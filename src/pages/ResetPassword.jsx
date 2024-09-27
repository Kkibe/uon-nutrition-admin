import { Button, Container, HStack, PinInput, PinInputField, Textarea } from '@chakra-ui/react'
import React from 'react'

export default function ResetPassword() {
  return (
    <Container   style={{
        width: '100%', 
        minHeight: "100vh", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    }}>
    <HStack>
  <PinInput type='alphanumeric' otp placeholder='🥳'>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
  
</HStack>
<Button>RESET PASSWORD</Button>
    </Container>
  )
}
