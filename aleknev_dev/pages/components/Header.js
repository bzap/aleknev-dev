import React from 'react'
import { Divider, Heading, Flex, Stack, Container, Button, Text, Box, Spacer } from '@chakra-ui/react'
import { Link } from "react-scroll/modules"
import AnimatedTabs from './Tabs/Tabs'

const Header = () => ( 
    <Container 
        display={'flex'} 
        justifyContent={'center'} 
        pt={'5'}
        >
        <Container 
            maxW={'7xl'} 
            position='fixed' 
            zIndex={200} 
            boxShadow={'lg'}
            borderRadius={'20px'}
            bg='white'
            >
            <Box
                p={2}
                py={{ base: '1em', md: '1em' }}>
                <Flex
                    align={'center'}
                    justifyContent={'space-between'}
                    direction={{ base: 'column', md: 'row' }}>
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '4xl', sm: '4xl', lg: '1xl' }}>    
                        <Text>
                        &thinsp;&lt;aleknev&gt;
                        </Text>
                    </Heading> 
                    <AnimatedTabs/>
                </Flex>
            </Box>
            
        </Container>


    </Container>
    
)//<Divider orientation='horizontal' borderRadius={'2em'} border='1px' dropShadow={'lg'}/>
export default Header