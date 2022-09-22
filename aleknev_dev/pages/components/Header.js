import React from 'react'
import Link from 'next/link'
import { Divider, Heading, Flex, Stack, Container, Button, Text, Box, Spacer } from '@chakra-ui/react'

const Header = () => ( 
    <Container maxW={'7xl'}>
    <Box
        py={{ base: '1em', md: '2em' }}>
        <Flex
            align={'center'}
            justifyContent={'space-between'}
            spacing={{ base: 8, md: 15, lg: 30 }}
            py={{ base: 6, md: 6 }}
            direction={{ base: 'column', md: 'row' }}>
            <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '4xl', sm: '4xl', lg: '1xl' }}>    
                <Text>
                    &lt;aleknev&gt;
                </Text>
            </Heading> 
            <Stack direction='row' justify={'flex-end'} > 
                    <Button colorScheme='gray' borderRadius='15' boxShadow={'md'}>About</Button>
                    <Button colorScheme='gray' variant='ghost' borderRadius='15'>Skills</Button>
                    <Button colorScheme='gray' variant='ghost' borderRadius='15'>Projects</Button>
                    <Button colorScheme='gray' variant='ghost' borderRadius='15'>Contact</Button>
            </Stack>
        </Flex>
    </Box>
    <Divider orientation='horizontal' borderRadius={'2em'} border='1px' dropShadow={'lg'}/>
    </Container>
)

export default Header