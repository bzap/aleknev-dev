import { motion, Variants, HTMLMotionProps, isValidMotionProp } from "framer-motion";
import {
    Divider,
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    chakra,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    Grid,
    GridItem,
    VStack,
    AspectRatio,
    HStack,
    Center,
    List,
    ListIcon,
    ListItem,
    Spacer,
    shouldForwardProp
} from '@chakra-ui/react';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});



const textContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: { 
            staggerChildren: 0.07, 
            delayChildren: 0.1 
        }
    }
};

const letterContainer = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200
        }
    },
    hidden: {
        opacity: 0,
        y: 20,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200
        }
    }
};

const Wave = ({text}) => { 
    const letters = Array.from(text)
    console.log(letters)
    return ( 
        <ChakraBox
        as={motion.div}
        variants={textContainer}
        initial={'hidden'}
            whileInView={'visible'}
            viewport={{ once: true }}>
            <Flex
            direction={'row'}>
                {letters.map((letter, idx) =>(
                    <ChakraBox
                    as={motion.div}
                    key={idx}
                    variants={letterContainer}> 
                        {letter == ' ' ? '\u00A0' : letter}
                    </ChakraBox>   
                ))}
            </Flex>
        </ChakraBox>
        
    )
}


export default Wave