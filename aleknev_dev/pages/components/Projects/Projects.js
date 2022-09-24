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
        id='p2' 
        py='10em'
        pb='20em'>
        <Grid templateColumns='repeat(2, 1fr)' gap={'5em'}>
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
            top={'10em'}>
            <Stack>
                <Blob
                    w={'50em'}
                    h={'50em'}
                    position={'absolute'}
                    left={0}
                    zIndex={-1}
                    color={useColorModeValue('red.50', 'red.400')}
                    />




                <Center
                    position={'absolute'}
                    height={'300px'}
                    top={'50%'}
                    left={'50%'}
                    width={'full'}
                    fontSize={'2em'}
                    fontWeight={'bold'}>
                        &#x2192;&#x2192; And more on my GitHub &#x2192;&#x2192;      
                </Center>


            
            </Stack>
        </GridItem>
    )
}

//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>

// inspo from chakra ui -> TODO: customize it  
const Blob = (props) => {
    return (
      <Icon
        width={'100%'}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    )
}


export default Projects

