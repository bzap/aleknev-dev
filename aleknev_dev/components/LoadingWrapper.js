import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Fade, 
    Grid,
    GridItem,
    Center,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    chakra,
    useColorModeValue,
    useBreakpoint,
    shouldForwardProp,
    Spacer,
} from '@chakra-ui/react';
import { motion, useScroll, useTransform, isValidMotionProp, AnimatePresence } from "framer-motion"
import HashLoader from "react-spinners/HashLoader";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const LoadingWrapper = () => { 

    return (
        <ChakraBox
            
            as={motion.div}
            maxW='100%'
            width='100%'
            height={'100%'}
            margin='auto'
            minH='120vh'>
                <Center  
                w={'100%'}
                minH='100vh'>
                    <HashLoader
                        color={'#373737'}
                        size={80}/>
                </Center>
        </ChakraBox>
    )
}


export default LoadingWrapper