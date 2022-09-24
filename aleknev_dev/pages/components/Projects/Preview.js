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
    chakra,
  } from '@chakra-ui/react';
import { InfoOutlineIcon, WarningTwoIcon, ArrowForwardIcon } from '@chakra-ui/icons'


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
            pb={10}>
            {projectTitle('GONI-GO')}
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
            <Center>
                <div>{projectDesc('This is a temporary description before I set it up to look nice and do things. This line is way too long and will be fixed when I introduce some JSON data.')}</div>
            </Center>
            <Flex
            flex={1}
            bg={'gray.100'}
            borderRadius='20px'
            boxShadow={'lg'}
            spacing={5}>
                <div>{projectButton('Details', 'temp', <InfoOutlineIcon/>)}</div>
                <div>{projectButton('Demo', 'temp', <WarningTwoIcon/>)}</div>
                <div>{projectButton('Source', 'temp', <ArrowForwardIcon/>)}</div>
            </Flex>
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
            src={props}
      />
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
    )
}

const projectDesc = (props) => { 
    return ( 
        <Text 
            py={'4'}
            as='p'
            fontSize={'18'}
            color={'gray.500'}>  
            {props}
        </Text>
    )
}

const projectButton = (name, link, icon) => { 
    return (
    <Button 
        color='Gray' 
        textColor={'Black'}
        borderRadius={'20px'}
        rightIcon={icon}>
        {name}
        </Button>
    )

}

export default Preview

