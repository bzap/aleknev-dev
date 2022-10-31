import { useState } from "react";
import { motion, isValidMotionProp } from "framer-motion";

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
    Link,
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

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const LazyImageAnimator = ({props}) => {
    const [img, setImg] = useState(true);
    const isLoading = () => {
        setImg(false)
    }
    return (
        <Flex
            borderRadius={'11px'}
            
            mb={{ base: '1em', sm: '1em', md: '1.5em', lg: '3em' }}>
                <ChakraBox   
                    boxShadow={'xl'}
                    borderRadius={'11px'} 
                    bg={'black.100'}
                    initial={{ 
                        height: '16em',
                        opacity: 0 
                    }}
                    animate={{
                        height: img ? '16em' : 'auto',
                        opacity: img ? 0 : 1
                    }}
                    transition={{
                        opacity: {
                            delay: 0.2,
                            duration: 0.4
                        }}}>
                            <Image
                                maxH={'40em'}
                                borderRadius={'11px'}
                                onLoad={isLoading}
                                {...props}/>
                </ChakraBox>
        </Flex>
    );
}

export default LazyImageAnimator