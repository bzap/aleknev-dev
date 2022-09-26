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
    Center
  } from '@chakra-ui/react';
import Preview from './Preview'


const Projects = () => ( 
    <Container 
        maxW={'7xl'}
        id='Projects' 
        px={'10em'}
        py={'10em'}
        pb={'20em'}>
        <Grid templateColumns='repeat(2, 1fr)' gap={'10em'}>
            {verticalItem('0%')}
            {verticalItem('40%')}
            {verticalItem('10%')}
            {verticalItem('50%')}
            {horizontalItem()}
        </Grid>
    </Container>
  );

const verticalItem = (top, left) => { 
    return ( 
        <GridItem 
            flex={1}
            position='relative'
            justifyContent={'flex-start'}
            w='100%' 
            top={top}
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
            flex={1}
            justifyContent={'center'}
            position={'relative'}
            w='full' 
            pl={'3em'}
            top={'10em'}>
            <Stack
            direction={'column'}>
                <Text
                    position={'absolute'}
                    
                    zIndex={8}
                    height={'300px'}
                    top={'-2em'}
                    width={'full'}
                    fontSize={'2em'}
                    fontWeight={'bold'}>
                        &#x2192;&#x2192;     
                </Text>
                <Text
                    position={'absolute'}
                    zIndex={8}
                    height={'300px'}
                    top={'-1em'}
                    width={'full'}
                    fontSize={'2em'}
                    fontWeight={'bold'}>
                        MORE ON GITHUB     
                </Text>
                <Text
                    position={'absolute'}
                    zIndex={8}
                    height={'300px'}
                    left={'8.5em'}
                    width={'full'}
                    fontSize={'2em'}
                    fontWeight={'bold'}>
                        &#x2192;&#x2192;      
                </Text>


            
            </Stack>
        </GridItem>
    )
}

//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>



export default Projects

