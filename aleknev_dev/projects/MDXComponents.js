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

const MDXComponents = { 
    h1: (props) => <Heading fontSize={30} {...props} />,
    h2: (props) => 
                    <Flex
                        py={2}
                        px={{base: '0.5em', sm: '0.5em', md: '1em', lg: '2em'}}>
                            <Heading  
                                fontSize={{ base: 26, sm: 27, md: 28, lg: 30 }}
                                {...props} />
                    </Flex>,
    p: (props) => 
                    <Flex
                        px={{ base: '0.5em', sm: '0.5em', md: '1em', lg: '2em' }}>
                            <Text 
                            fontSize={{ base: 12, sm: 14, md: 14, lg: 14 }}
                            as={'span'} 
                            lineHeight={'1.3em'} 
                            color={'blackAlpha.800'} 
                            {...props} />
                    </Flex>,

    img: (props) => 
                    <Flex
                        borderRadius={'11px'}
                        boxShadow={'xl'}
                        mb={{ base: '1em', sm: '1em', md: '1.5em', lg: '3em' }}>
                            <Image 
                              
                                maxH={'40em'}
                                borderRadius={'11px'} 
                                {...props} />
                    </Flex>
}

export default MDXComponents