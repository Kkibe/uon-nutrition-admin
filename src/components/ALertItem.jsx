import { Alert, AlertDescription, AlertDialog, AlertIcon, AlertTitle } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function ALertItem({status}) {
return (
<Alert status={status} style={{maxWidth: "350px", position: "absolute", right: "0px", zIndex: "10"}}>
  <AlertIcon />
  <AlertTitle>success</AlertTitle>
  <AlertDescription>user logged in successfully</AlertDescription>
</Alert>
  )
}
