import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Stripes from '../Stripes'

const Layout = ({ children, router }) => { 
   //maxWidth='100^' minHeight='100vh'
    return (    
        <Container  
        maxW='100%' 
        width='100%' 
        margin='auto' 
        minH='100vh' 
        bg='#F2F2F2'
        overflow={'hidden'}
        userSelect={'none'}
        left={0}
        pl={0}
        pr={0}> 
            <main>{children}</main> 
        </Container> 
    )   


}

export default Layout