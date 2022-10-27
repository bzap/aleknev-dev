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
    shouldForwardProp,
    useBreakpoint
} from '@chakra-ui/react';
import { motion, Variants, HTMLMotionProps, isValidMotionProp } from "framer-motion";
import Wave from './Variants/Wave'
import { textContainer, titleContainer, subTitleContainer, indicators } from '../styles/Variants'


const Title = ({title, desc, page}) => { 
    const bp = useBreakpoint()
    return ( 
            <Flex
                w={'100%'}
                direction='row'>
                <Flex         
                    justifyContent={'space-between'}
                    direction='column'>
                    <Flex
                    position={'relative'}
                    zIndex={0}
                    w={'20em'}>
                    <Heading
                        color={'blackAlpha.800'}
                        position={'relative'}
                        fontSize={{ base: '3.5em', sm: '4em', md: '6em', lg: '7em' }}>
                        <Wave text={title}/>
                    </Heading>
                </Flex>
                    <ChakraBox   
                    w={'100%'}
                    variants={subTitleContainer}>
                        <Text
                            w={{ base: '100%', sm: '25em', md: '35em', lg: '35em' }}
                            fontSize={{ base: 13, sm: 15, md: '1em', lg: '1.1em' }}
                            color={'gray.600'}>
                            {desc}
                        </Text>
                    </ChakraBox>
                </Flex>
                <Spacer />
                {bp == 'sm' || bp == 'md' || bp == 'lg' || bp == 'xl' || bp == '2xl' && (
                    <Spacer/>
                )}
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
            w={{base: 0, sm: '100%', md: '100%', lg: '100%'}}
            h={{ base: 0, sm: '100%', md: '100%', lg: '100%' }}
            position={'relative'}
            direction="row"
            justifyContent={'flex-end'}>
            <Flex
                top={'1em'}
                h={'100%'}
                position={'relative'}
                justifyContent={'center'}
                direction={'column'}>
                <Flex
                    direction={'column'}
                    position={'relative'}>
                    <Heading
                        position='relative'
                        sx={{ 'writingMode': 'vertical-rl' }}
                        fontSize={{ base: '0em', sm: '3.5em', md: '4em', lg: '5.4em' }}
                        color={'blackAlpha.800'}
                        fontWeight={900}>
                        <ChakraBox
                        position={'relative'}
                            variants={indicators}>
                            <Text
                            position={'relative'}
                            left={'1rem'}>
                                {page}
                            </Text>
                        </ChakraBox> 
                         
                    </Heading>
                    <Heading
                        position='relative'
                        sx={{ 'writingMode': 'vertical-rl' }}
                        fontSize={{ base: '0em', sm: '3.5em', md: '4em', lg: '5.4em' }}
                        color={'blackAlpha.300'}
                        fontWeight={900}>
                        <ChakraBox
                        position={'relative'}
                        variants={indicators}>
                            <Text
                                position={'relative'}
                                left={'1rem'}>
                                    03
                            </Text>
                        </ChakraBox>
                    </Heading>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Title