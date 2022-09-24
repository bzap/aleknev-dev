import React from 'react'
import { Divider, Heading, Flex, Stack, Container, Button, Text, Box, Spacer } from '@chakra-ui/react'
import { Link } from "react-scroll/modules"

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
                    <Stack direction='row' justify={'flex-end'} > 
                            <Button 
                                colorScheme='gray' 
                                borderRadius='15' 
                                boxShadow={'md'}
                                >
                                <Link activeClass="active" to="p1" spy={true} smooth={true} offset={0} duration={500}>
                                    About
                                </Link>    
                            </Button>
                            <Button colorScheme='gray' variant='ghost' borderRadius='15'>
                            <Link activeClass="active" to="p2" spy={true} smooth={true} offset={0} duration={500}>
                                Skills
                            </Link>
                            </Button>
                            <Button colorScheme='gray' variant='ghost' borderRadius='15'>
                            <Link activeClass="active" to="p3" spy={true} smooth={true} offset={0} duration={500}>
                                Projects
                            </Link>
                                </Button>
                            <Button colorScheme='gray' variant='ghost' borderRadius='15'>Contact</Button>
                    </Stack>
                </Flex>
            </Box>
            
        </Container>


    </Container>
    
)//<Divider orientation='horizontal' borderRadius={'2em'} border='1px' dropShadow={'lg'}/>
export default Header