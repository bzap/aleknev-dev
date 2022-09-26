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
    Center,
    ScaleFade
  } from '@chakra-ui/react';
import Preview from './Preview'
import { motion } from "framer-motion";


const Projects = () => ( 
    <Container 
        maxW={'7xl'}
        id='2' 
        px={'10em'}
        py={'10em'}
        pb={'20em'}>
        <Grid templateColumns='repeat(2, 1fr)' gap={'10em'}>
            {verticalItem('0%')}
            {verticalItem('40%')}
            {verticalItem('10%')}
            {verticalItem('50%')}
            {gitButton()}
        </Grid>
    </Container>
  );

const verticalItem = (top, left) => { 
    return ( 
        <GridItem 
            as={motion.div}
            whileHover={{ scale: 1.025 }}
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

const gitButton = () => { 
    return ( 

        <GridItem 
            flex={1}
            justifyContent={'center'}
            position={'relative'}
            
            w='full' 
            pl={'3em'}
            top={'10em'}>
            <Flex
				direction={'column'}
				>
                <Text
                    as={motion.div}
                    zIndex={8}
                    fontSize={'2em'}
                    fontWeight={'bold'}>
                        &#x2192;&#x2192;     
                </Text>
                <Text
                    zIndex={8}
                    initial={{x:'1em'}}
                    animation={{x:'10em'}}
                    transition={{ease:"linear", duration:2, repeat: Infinity}}
                    width={'full'}
                    fontSize={'1.8em'}
                    fontWeight={'bold'}>
                        SEE MORE ON GITHUB     
                </Text>
                <Text
                    zIndex={8}
                    left={'8.5em'}
                    fontSize={'2em'}
                    fontWeight={'bold'}>
                        &#x2192;&#x2192;      
                </Text>


            
            </Flex>
        </GridItem>
    )
}

//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>



export default Projects

