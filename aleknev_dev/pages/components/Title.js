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
import { motion, Variants, HTMLMotionProps, isValidMotionProp } from "framer-motion";
import Wave from './Variants/Wave'
import { textContainer, titleContainer, subTitleContainer, indicators} from '../../styles/Variants'


const Title = ({title, desc, page}) => { 
    return ( 
            <Flex
                justifyContent={'center'}
                direction='row'>
                <Flex
                    justifyContent={'space-between'}
                    direction='column'>
                    <Heading
                        lineHeight={'0.8em'}
                        fontSize={{ sm: '4em', md: '6em', lg: '7em' }}>
                        <Wave text={title}/>
                    </Heading>
                    <ChakraBox   
                    variants={subTitleContainer}>
                        <Text
                            w={{ sm: '25em', md: '35em', lg: '35em' }}
                            fontWeight={700}
                            fontSize={{ sm: 15, md: '1em', lg: '1.2em' }}
                            color={'blackAlpha.800'}>
                            {desc}
                        </Text>
                    </ChakraBox>
                </Flex>
                <Spacer />
                {pageIndicator(page)}
            </Flex>
    )
}


const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


const pageIndicator = (page) => {
    return (
        <Flex
            w={'100%'}
            h={'100%'}
            position={'relative'}
            direction="row"
            justifyContent={'flex-end'}>
            <Flex
                justifyContent={'center'}
                direction={'column'}>
                <Flex
                    direction={'column'}
                    position={'relative'}>
                    <Heading

                        position='relative'
                        sx={{ 'writingMode': 'vertical-rl' }}
                        fontSize={{ sm: '3.5em', md: '4em', lg: '4.8em' }}
                        color={'blackAlpha.800'}
                        fontWeight={900}>
                        <ChakraBox
                            left={'20%'}
                            position={'relative'}
                            variants={indicators}>
                            {page}
                        </ChakraBox> 
                         
                    </Heading>
                    <Heading
                        position='relative'
                        sx={{ 'writingMode': 'vertical-rl' }}
                        fontSize={{ sm: '3.5em', md: '4em', lg: '4.8em' }}
                        color={'blackAlpha.300'}
                        fontWeight={900}>
                        <ChakraBox
                        left={'20%'}
                        position={'relative'}
                        variants={indicators}>
                            03
                        </ChakraBox>
                    </Heading>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Title