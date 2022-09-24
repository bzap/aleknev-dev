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
import horizontalPreview from './Preview'


const Projects = () => ( 
    <Container 
        maxW={'7xl'}
        id='p2' 
        py='7em'>
        <Grid templateColumns='repeat(3, 1fr)' gap={'2em'}>
            {verticalItem()}
            {verticalItem()}
            {verticalItem()}
            {horizontalItem()}
        </Grid>
    </Container>
  );


const verticalItem = () => { 
    return ( 
        <GridItem 
            flex={1}
            justifyContent={'flex-start'}
            w='100%' 
            bg='white' 
            boxShadow={'lg'} 
            borderRadius={'25px'} >
            <Preview/>
        </GridItem>        
    )
}

const horizontalItem = () => { 
    return ( 
        <GridItem 
            colSpan={2}
            flex={1}
            justifyContent={'flex-start'}
            w='100%' 
            bg='white' 
            boxShadow={'lg'} 
            borderRadius={'25px'} >
            {horizontalPreview()}
        </GridItem>
    )
}

//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>

export default Projects

