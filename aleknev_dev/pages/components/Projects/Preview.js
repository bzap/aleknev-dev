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
    chakra,
    shouldForwardProp
  } from '@chakra-ui/react';
import { InfoOutlineIcon, WarningTwoIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { pskillsItem, imageItem, skillsTextItem, previewContainer, item, skillsItem, pillItem } from '../Variants/Variants'
import { motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


const Preview = () => (
    <Stack 
        maxW={'7x1'}>
        <Stack
            flexShrink={1}
            h={'13em'}
            overflow={'hidden'}
            boxShadow={'lg'}>
            {projectImages('https://raw.githubusercontent.com/bzap/amazon_review_data/master/ss.png?token=GHSAT0AAAAAABZBXH62PJFSQM5UXV25ZXCCYZLQFBQ')}
        </Stack>
        <Stack
            px={10}
            pt={7}
            spacing={-1}>
            <ChakraBox
            variants={item}>
                {projectTitle('GONI-GO')}
            </ChakraBox>
            <Grid templateColumns='repeat(4, 1fr)' gap={3}>
                <GridItem> 
                    <div>{projectSkill('React')}</div>
                </GridItem>
                <GridItem> 
                    <div>{projectSkill('Angular')}</div>
                </GridItem>
                <GridItem> 
                    <div>{projectSkill('JS')}</div>
                </GridItem>
                <GridItem>
                    <div>{projectSkill('Python')}</div>
                </GridItem>
            </Grid>
        </Stack> 
        <Stack
            px={10}
            pb={10}>
            <ChakraBox
            variants={item}>
                <Divider orientation='horizontal' pt={3}/>
                <Center>
                    {projectDesc('This is a temporary description before I set it up to look nice and do things. This line is way too long and will be fixed when I introduce some JSON data.')}
                </Center>
            </ChakraBox>
            <ButtonGroup 
                as={motion.div}
                variants={pillItem}
                flex={1}
                alignContent={'center'}
                size='sm'
                bg='white'
                isAttached
                boxShadow={'lg'}
                borderRadius={'20px'}> 
                    {projectButton('Details', 'temp', <InfoOutlineIcon/>)}      
                    {projectButton('Demo', 'temp', <WarningTwoIcon/>)}   
            </ButtonGroup>
        </Stack>
    </Stack>

)


const projectImages = (props) => { 
    return (
        <Image
            align={'center'}
            borderTopRadius={'20'}
            top={32}
            fit={'background'}
            boxShadow={'lg'}
            src={props}/>
    )
}

const projectTitle = (props) => { 
    return ( 
        <Text
            pt='2'
            fontSize={'2.5em'}
            fontWeight={'bold'}> 
            {props} 
        </Text>
        
    )
}

const projectSkill = (props) => {
    // make this map from a future json object 
    return (
        <ChakraBox
        variants={pskillsItem}>
            <Box
                minW={'4em'}
                p={'1px'}
                bg='gray.600' 
                boxShadow={'lg'} 
                borderRadius={'22px'}
                textColor={'white'}         
                >
                <Center
                p={'4px'}
                textColor={'white'}
                fontSize={'10'}
                fontWeight={'600'}>
                {props}
                </Center>
            </Box>  
        </ChakraBox>   
    )
}

const projectDesc = (props) => { 
    return ( 
        <Text 
            py={'4'}
            px={'1'}
            as='p'
            fontSize={'15'}
            fontWeight={'500'}
            color={'gray.500'}>  
            {props}
        </Text>
    )
}


const projectButton = (name, link, icon) => { 
    return (
    <Button 
        flex={1}
        color='Gray' 
        textColor={'Black'}
        rightIcon={icon}
        borderRadius={'20px'}>
        {name}
        </Button>
    )

}
//textShadow={"1px 1px gray.700"}
export default Preview

