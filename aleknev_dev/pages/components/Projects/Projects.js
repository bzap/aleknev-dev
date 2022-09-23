import {
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
import Preview from './Preview'


const Projects = () => ( 
    <Container maxW={'7xl'} w={'100%'} id='p2' py='7em'>

        <Grid templateColumns='repeat(3, 1fr)' gap={'2em'}>
            <GridItem 
            
                flex={1}
                justifyContent={'flex-start'}
                w='100%' 
                bg='white' 
                boxShadow={'lg'} 
                borderRadius={'15px'} >
                <Preview/>
            </GridItem>
            <GridItem 
                flex={1}
                justifyContent={'flex-start'}
                w='100%' 
                bg='white' 
                boxShadow={'lg'} 
                borderRadius={'15px'} >
                <Preview/>
            </GridItem>
            <GridItem 
                flex={1}
                justifyContent={'flex-start'}
                w='100%' 
                bg='white' 
                boxShadow={'lg'} 
                borderRadius={'15px'} >
                <Preview/>
            </GridItem>
            <GridItem w='100%' h='10em' bg='white' boxShadow={'lg'} borderRadius={'15px'}>\
                lol
            </GridItem>
        </Grid>


    </Container>
  );


//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>

export default Projects

