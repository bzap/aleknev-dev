import {
    Center,
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
  } from '@chakra-ui/react';


const Preview = () => (
    <Container 
        maxW={'7x1'}
        p={10}>
        <Flex
        flex={1}
        justifyContent={'center'}>
            <div>{projectImages()}</div>
        </Flex>
        
        <Stack>
              
            <Center>
                <div>{projectTitle('ARD Util')}</div>
            </Center>
            <Divider orientation='horizontal'/>
            <Grid templateColumns='repeat(5, 1fr)' gap={3}>
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
                <GridItem> 
                    <div>{projectSkill('Chakra')}</div>
                </GridItem>
                <GridItem> 
                    <div>{projectSkill('Node')}</div>
                </GridItem>
                <GridItem> 
                    <div>{projectSkill('Java')}</div>
                </GridItem>
                <GridItem> 
                    <div>{projectSkill('NextJS')}</div>
                </GridItem>
                <GridItem> 
                    <div>{projectSkill('ThreeJS')}</div>
                </GridItem>
                <GridItem> 
                    <div>{projectSkill('C++')}</div>
                </GridItem>
            </Grid>
            <Center>
                <div>{projectDesc('This is a temporary description before I set it up to look nice and do things. This line is way too long and will be fixed when I introduce some JSON data.')}</div>
            </Center>
        </Stack> 
    </Container>
)



const projectImages = () => { 

    return (
        <Image
        align={'center'}
        h={'60%'}
        borderRadius={'20'}
        boxShadow={'lg'}
        src={
          'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
        }
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
        <Center
            bg='black' 
            py='1'
            boxShadow={'lg'} 
            borderRadius={'12'}
            textColor={'white'}
            align={'center'}
            justifyContent={'center'}
            fontSize={'12'}
            fontWeight={'600'}>
            {props}
        </Center> 
    )
}

const projectDesc = (props) => { 
    return ( 
        <Text 
            py={'4'}
            as='p'
            fontSize={'18'}>  
            {props}
        </Text>
    )
}

export default Preview

