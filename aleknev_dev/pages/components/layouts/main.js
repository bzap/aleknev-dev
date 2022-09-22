import React from 'react'
import { Container } from '@chakra-ui/react'
import Header from '../Header'

const Layout = ({ children, router }) => { 
    return (      
        <Container> 
            <Header/>
            <main>{children}</main> 
        </Container> 
    )   


}

export default Layout