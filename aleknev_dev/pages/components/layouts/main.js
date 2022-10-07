import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import Stripes from '../Stripes'
import Stripesv2 from '../Stripesv2'

const Layout = ({ children, router }) => { 
   //maxWidth='100^' minHeight='100vh'
    return (    
        <Container  
        maxW='container' 
        width='100%' 
        margin='auto' 
        minH='100vh' 
        bg='#F2F2F2'
        overflow={'hidden'}
        left={0}
        > 
        
            <main>{children}</main> 
        </Container> 
    )   


}

export default Layout