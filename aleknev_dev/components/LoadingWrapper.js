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
import { motion, useScroll, useTransform, isValidMotionProp } from "framer-motion"
import HashLoader from "react-spinners/HashLoader";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const LoadingWrapper = () => { 
    return ( 
        <Container
            as={motion.div}
            maxW='100%'
            width='100%'
            margin='auto'
            minH='100vh'
            bg='#D9D9D9'>
                    <Center>
                        <HashLoader
                            color={'#373737'}
                            size={80}
                        />
                    </Center>
        </Container>
    )
}


export default LoadingWrapper