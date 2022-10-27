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
import Projects from '../../public/data/ProjectText'

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


const Preview = ({index}) => {
    console.log(Projects[1].tech.length)
    return (
    <Stack >
        <Flex
            justifyContent={'center'}
            flexShrink={1}
            overflow='hidden'>
            {projectImages('https://i.pinimg.com/564x/af/26/42/af2642d7d8ed1d60959f0825e545d92c.jpg')}
        </Flex>
        <Stack
            px={{base: 6, sm: 9, md: 9, lg: 9}}
            pt={{base: 4, sm: 4, md: 9, lg: 4}}
            spacing={-1}>
            <ChakraBox
            pb={1}
            variants={item}>
                {projectTitle(Projects[index].name)}
            </ChakraBox>
            <Flex>
                    {Projects[index].tech.map((x, idx) => (
                         projectSkill(x, Projects[index].icons[idx])   
                    ))}
            </Flex> 
        </Stack> 
        <Stack
            pb={{base: 8, sm: 8, md: '0em', lg: 8}}
            px={{ base: 6, sm: 9, md: 9, lg: 9 }}>
            <ChakraBox
            variants={item}>
                <Center>
                        {projectDesc(Projects[index].desc)}
                </Center>
            </ChakraBox>
            <ChakraBox
                variants={pillItem}>
                    <Flex>
                        {projectButton('Learn More', index, <InfoOutlineIcon />)}
                        <Spacer />
                        {projectButton('Live Demo', index, <WarningTwoIcon />)}
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
        <Heading
            fontSize={{ base: 30, sm: 40, md: 40, lg: 40 }}
            fontWeight={800}> 
            {props} 
        </Heading>
        
    )
}

const projectSkill = (props, icon) => {
    return (
        <>
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
        <Spacer/>
        </>
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
            >
            <Heading
                color={'blackAlpha.800'}
                fontSize={{ base: 14, sm: 16, md: 16, lg: 16 }}>
                {name}&#160;&gt;
            </Heading>
           
            {contentModal(btnRef, isOpen, onOpen, onClose, link )}
        </ChakraBox>
    )
}


const contentModal = (ref, io, oo, oc, link) => { 
    // slideshow == 1 ? do slideshow : nothing
    console.log(link, 'here')
    let body, title = ''
    if (link == 1){ 
        title = 'GONI-GO'
        body = 'yeah bro'
    }
    else if (link == 2){ 
        title = 'ARD UTIL'
        body = 'yeah bro lebron'
    }
    return ( 
        <Modal
            isCentered
            onClose={oc}
            finalFocusRef={ref}
            isOpen={io}
            scrollBehavior={'inside'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        fontSize={35}
                        fontWeight={900}>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {body}
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </ModalContent>
        </Modal>
    )
}


//textShadow={"1px 1px gray.700"}
export default Preview

