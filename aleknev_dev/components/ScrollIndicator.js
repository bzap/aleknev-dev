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

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


const ScrollIndicator = () => { 
    return ( 
        <Flex
        position={'relative'}
        top={'2em'}>
            <AnimatePresence exitBeforeEnter>
                <ChakraBox
                    as={motion.div}
                    initial={'hidden'}
                    animate={'visible'}
                    variants={arrowContainer}>
                    <Flex
                    
                    alignItems={'center'}
                    direction={'column'}>
                        <ChakraBox
                            as={motion.div}
                            variants={gitGT}>
                            <Icon
                                w={'4em'}
                                h={'4em'}
                                as={HiChevronDown}
                            />
                        </ChakraBox>
                        <ChakraBox
                            position={'relative'}
                            top={'-2.5rem'}
                            as={motion.div}
                            variants={gitGT}>
                            <Icon
                                w={'3.2em'}
                                h={'3.2em'}
                                as={HiChevronDown}
                            />
                        </ChakraBox>
                        <ChakraBox
                            position={'relative'}
                            top={'-4.5rem'}
                            as={motion.div}
                            variants={gitGT}>
                            <Icon
                                w={'2.5em'}
                                h={'2.5em'}
                                as={HiChevronDown}
                            />
                        </ChakraBox>
                    </Flex>
                </ChakraBox>
            </AnimatePresence>
        </Flex>
    
    )


}


export default ScrollIndicator