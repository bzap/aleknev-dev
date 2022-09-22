import React from 'react'
import { Box, Container } from '@chakra-ui/react'


const Layout = ({ children, router }) => { 
   //maxWidth='100^' minHeight='100vh'
    return (    
        <Container  maxW='container' width='100%' margin='auto' minH='100vh' bg='#faf7fa'> 
            <main>{children}</main> 
        </Container> 
    )   


}

export default Layout