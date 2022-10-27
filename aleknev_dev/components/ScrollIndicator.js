import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Grid,
    GridItem,
    chakra,
    Center,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    useBreakpoint,
    shouldForwardProp,
    Spacer,
} from '@chakra-ui/react';
import Head from 'next/head';
import Keyboard from './Keyboard/Keyboard'
import { AnimatePresence, motion, useScroll, isValidMotionProp } from 'framer-motion'
import { background } from '../styles/Variants';
import { arrowContainer, gitGT } from '../styles/Variants';
import { HiChevronDown } from 'react-icons/hi';
import { CgChevronDown } from 'react-icons/cg'

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ScrollIndicator = () => { 
    return ( 
            <AnimatePresence mode='wait'>   
                <ChakraBox
                    as={motion.div}
                    initial={'hidden'}
                    animate={'visible'}
                    variants={arrowContainer}>
                    <Flex
                    alignItems={'center'}
                    direction={'row'}>
                        <ChakraBox
                            as={motion.div}
                            variants={gitGT}>
                            <Icon
                                w={'2.2em'}
                                h={'2.2em'}
                                as={CgChevronDown}
                            />
                        </ChakraBox>
                        <ChakraBox
                            position={'relative'}
                            as={motion.div}
                            variants={gitGT}>
                            <Icon
                                w={'2.2em'}
                                h={'2.2em'}
                                as={CgChevronDown}
                            />
                        </ChakraBox>
                        <ChakraBox
                            position={'relative'}
                            as={motion.div}
                            variants={gitGT}>
                            <Icon
                                w={'2.2em'}
                                h={'2.2em'}
                                as={CgChevronDown}
                            />
                        </ChakraBox>
                    </Flex>
                </ChakraBox>
            </AnimatePresence>
    
    )


}


export default ScrollIndicator