import {
    Center,
    HStack,
    Divider,
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    useDisclosure,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Modal,
    ModalFooter,
    Grid, 
    GridItem,
    ButtonGroup,
    ListIcon,
    Spacer,
    chakra,
    shouldForwardProp
  } from '@chakra-ui/react';
import { InfoOutlineIcon, WarningTwoIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { pskillsItem, item, pillItem } from '../../styles/Variants'
import { motion, isValidMotionProp } from "framer-motion";
import { SiReact, SiPython, SiAngular, SiVuedotjs  } from 'react-icons/si';
import { useState, useEffect, useRef } from 'react'

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


const Preview = ({proj}) => {
    return (
    <Stack >
        <Flex
            justifyContent={'center'}
            flexShrink={1}
            overflow='hidden'>
            {projectImages('https://i.pinimg.com/564x/af/26/42/af2642d7d8ed1d60959f0825e545d92c.jpg')}
        </Flex>
        <Stack
            px={{base: 4, sm: 9, md: 9, lg: 9}}
            pt={4}
            spacing={-1}>
            <ChakraBox
            variants={item}>
                {projectTitle('GONI-GO')}
            </ChakraBox>
            <Flex>
                    <div>{projectSkill('React', SiReact)}</div>
                    <Spacer/>
                    <div>{projectSkill('Angular', SiAngular)}</div>
                    <Spacer/>
                    <div>{projectSkill('Vue', SiVuedotjs)}</div>
                    <Spacer/>
                    <div>{projectSkill('Python', SiPython)}</div>
            </Flex>
        </Stack> 
        <Stack
            pb={5}
            px={{ base: 4, sm: 9, md: 9, lg: 9 }}>
            <ChakraBox
            variants={item}>
                <Center>
                    {projectDesc('This is a temporary description before I set it up to look nice and do things. This line is way too long and will be fixed when I introduce some JSON data.')}
                </Center>
            </ChakraBox>
            <ChakraBox
                variants={pillItem}>
                    <Flex>
                        {projectButton('Learn More', proj, <InfoOutlineIcon />)}
                        <Spacer />
                        {projectButton('Live Demo', proj, <WarningTwoIcon />)}
                    </Flex>
            </ChakraBox>


        </Stack>
    </Stack>
    )
}


const projectImages = (props) => { 
    return (
        <Image
            align={'center'}
            borderTopRadius={'10px'}
            h={'12em'}
            w={'full'}

            
            fit={'background'}
            src={props}/>
    )
}

const projectTitle = (props) => { 
    return ( 
        <Text
            fontSize={{ base: 30, sm: 40, md: 40, lg: 40 }}
            fontWeight={800}> 
            {props} 
        </Text>
        
    )
}

const projectSkill = (props, icon) => {
    // make this map from a future json object 
    return (
        <ChakraBox
        px={1}
        variants={pskillsItem}>
                <Center
                direction={'row'}>
                    <Icon as={icon} w={3} h={3} color='black.500' />
                    <Text
                        fontSize={{ base: 10, sm: 12, md: 12, lg: 12 }}>
                        &thinsp;{props}
                    </Text>
                </Center>
        </ChakraBox>   
    )
}

const projectDesc = (props) => { 
    return ( 
        <Text 
            py={2}
            as='p'
            fontSize={{ base: 12, sm: 14, md: 14, lg: 14 }}
            color={'gray.600'}>  
            {props}
        </Text>
    )
}


const projectButton = (name, link, icon) => { 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef([])
    return (
        <ChakraBox
        pt={3}
        as={motion.div}
        cursor={'pointer'}
        justifyContent={'flex-end'}
        flex={1}
        textColor={'Black'}
        ref={btnRef}
        whiteSpace={'nowrap'}
        onClick={onOpen}
        whileTap={{scale: 0.9}}
        whileHover={{scale:1.03}}
            fontSize={{ base: 14, sm: 16, md: 16, lg: 16 }}>
            {name}&#160;&gt;
            {contentModal(btnRef, isOpen, onOpen, onClose, link )}
        </ChakraBox>
    )
}


const contentModal = (ref, io, oo, oc, link) => { 
    return ( 
        <Modal
            isCentered
            onClose={oc}
            finalFocusRef={ref}
            isOpen={io}
            scrollBehavior={'inside'}>
                <ModalOverlay />
                {link == '01' && (
                <ModalContent>
                    <ModalHeader
                        fontSize={35}
                        fontWeight={900}>GONIGO</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        this would be something like data.modalBody
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
                )}
                {link == '02' && (
                    <ModalContent>
                        <ModalHeader
                            fontSize={35}
                            fontWeight={900}>ARD UTIL</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            LEBRAN JAEWMS
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </ModalContent>
                )}
        </Modal>
    )
}


//textShadow={"1px 1px gray.700"}
export default Preview

