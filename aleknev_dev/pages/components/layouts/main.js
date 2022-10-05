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
        sx={{'background-color': '#FFDEE9', 'background-image': 'linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)'}}
        > 
        
            <main>{children}</main> 
        </Container> 
    )   


}

export default Layout