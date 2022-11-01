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
    shouldForwardProp,
    calc
} from '@chakra-ui/react';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const LazyImageAnimator = ({ props }) => {
    const [img, setImg] = useState(true);
    const isLoading = () => {
        setImg(false)
    }
    const imageData = props.src.split('_')
    console.log(imageData[0], imageData[1], imageData[2], '3')
    const src = { src: imageData[0], alt: props.alt }
    return (
        <Flex
            borderRadius={'11px'}
            position={'relative'}>
            <ChakraBox

                position={'relative'}
                boxShadow={'xl'}
                borderRadius={'11px'}
                initial={{
                    height: '5em',
                    opacity: 0
                }}
                animate={{
                    height: img ? '5em' : 'auto',
                    opacity: img ? 0 : 1
                }}
                transition={{
                    opacity: {
                        delay: 0.3,
                        duration: 0.4
                    }
                }}>
                <Flex
                    position={'relative'}>
                    <Image
                        
                        borderRadius={'11px'}
                        onLoad={isLoading}
                        h={'auto'}
                        htmlHeight={imageData[2]}
                        htmlWidth={imageData[1]}
                        maxW={'100%'}
                        {...src} />
                </Flex>
            </ChakraBox>
        </Flex>
    );
}

export default LazyImageAnimator