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
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    Grid, 
    GridItem,
    ButtonGroup,
    ListIcon,
    Spacer,
    chakra,
    shouldForwardProp
  } from '@chakra-ui/react';
import { InfoOutlineIcon, WarningTwoIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { pskillsItem, item, pillItem } from '../Variants/Variants'
import { motion, isValidMotionProp } from "framer-motion";
import { SiReact, SiPython, SiAngular, SiVuedotjs  } from 'react-icons/si';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


const Preview = () => (
    <Stack 
        maxW={'7x1'}>
        <Flex
            justifyContent={'center'}
            flexShrink={1}
            overflow='hidden'>
            {projectImages('https://i.pinimg.com/564x/af/26/42/af2642d7d8ed1d60959f0825e545d92c.jpg')}
        </Flex>
        <Stack
            px={9}
            pt={4}
            spacing={-1}>
            <ChakraBox
            variants={item}>
                {projectTitle('GONI-GO')}
            </ChakraBox>
            <Flex>
                    <div>{projectSkill('React', SiReact)}</div>
                    <Spacer/>
                    <div>{projectSkill('Angular', SiAngular)}</div>
                    <Spacer/>
                    <div>{projectSkill('Vue', SiVuedotjs)}</div>
                    <Spacer/>
                    <div>{projectSkill('Python', SiPython)}</div>
            </Flex>
        </Stack> 
        <Stack
            pb={5}
            px={9}>
            <ChakraBox
            variants={item}>
                <Center>
                    {projectDesc('This is a temporary description before I set it up to look nice and do things. This line is way too long and will be fixed when I introduce some JSON data.')}
                </Center>
            </ChakraBox>
            <Flex>
            {projectButton('Learn More', 'temp', <InfoOutlineIcon/>)}  
            <Spacer/>    
            {projectButton('Live Demo', 'temp', <WarningTwoIcon/>)}   
            </Flex>

        </Stack>
    </Stack>
)


const projectImages = (props) => { 
    return (
        <Image
            align={'center'}
            borderTopRadius={'10px'}
            h={'12em'}
            w={'full'}

            
            fit={'background'}
            src={props}/>
    )
}

const projectTitle = (props) => { 
    return ( 
        <Text
            fontSize={40}
            fontWeight={800}> 
            {props} 
        </Text>
        
    )
}

const projectSkill = (props, icon) => {
    // make this map from a future json object 
    return (
        <ChakraBox
        px={1}
        variants={pskillsItem}>
                <Center
                direction={'row'}>
                    <Icon as={icon} w={3} h={3} color='black.500' />
                    <Text
                        fontSize={12}
                        fontWeight={800}>
                        &thinsp;{props}
                    </Text>
                </Center>
        </ChakraBox>   
    )
}

const projectDesc = (props) => { 
    return ( 
        <Text 
            py={2}
            
            as='p'
            fontSize={'14'}
            fontWeight={'700'}
            color={'gray.600'}>  
            {props}
        </Text>
    )
}


const projectButton = (name, link, icon) => { 
    return (
        <Flex 
        pt={3}
        justifyContent={'flex-end'}
            flex={1}
            colorScheme={'white'}
            textColor={'Black'}
            fontWeight={'bold'}
            whiteSpace={'nowrap'}
            fontSize={15}>
                {name}&#160;&gt;
            
        </Flex>
    )

}
//textShadow={"1px 1px gray.700"}
export default Preview

