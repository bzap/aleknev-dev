import React from 'react'
import Link from 'next/link'
import { Flex, Stack, Container, Button, Text, Box, Spacer } from '@chakra-ui/react'

const Header = () => ( 
    <Flex marginTop='10px' padding='3' maxW='md'bg='white' border='0px' borderRadius='15' borderColor='white' boxShadow='lg'> 
            <Button colorScheme='gray' variant='ghost' borderRadius='15'>About</Button>
            <Spacer/>
            <Button colorScheme='gray' variant='ghost' borderRadius='15'>Skills</Button>
            <Spacer/>
            <Button colorScheme='gray' variant='ghost' borderRadius='15'>Projects</Button>
            <Spacer/>
            <Button colorScheme='gray' variant='ghost' borderRadius='15'>Contact</Button>
    </Flex>
)

export default Header