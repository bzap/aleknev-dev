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
    ScaleFade,
    transition, chakra, 
    shouldForwardProp
  } from '@chakra-ui/react';
import Preview from './Preview'
import { motion, isValidMotionProp } from "framer-motion";


const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const cardVariants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };


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
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{once:true, amount:0.8}}
            variants={cardVariants}
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
                <ChakraBox
                as={motion.div}
                initial={{x:0}}
                animate={{x:'90%'}}
                transition={{
                    type: 'tween',
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2,
                  }}>
                    <Text
                        position={'relative'}
                        top={3}
                        zIndex={8}
                        fontSize={'2em'}
                        fontWeight={'bold'}>
                            &#x2192;&#x2192;     
                    </Text>
                </ChakraBox>
                <Center
                        as={motion.div}
                        whileHover={{scale:1.1}}
                        whileTap={{scale:1}}
                        cursor={'pointer'}
                        zIndex={8}
                        transition={{ease:"linear", duration:2, repeat: Infinity}}
                        width={'full'}
                        fontSize={'1.8em'}
                        fontWeight={'bold'}>
                            SEE MORE ON GITHUB     
                </Center>
                <ChakraBox
                as={motion.div}
                initial={{x:'90%'}}
                animate={{x:'0'}}
                transition={{
                    type: 'tween',
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'reverse',
                    duration: 2,
                  }}>
                    <Text
                        position={'relative'}
                        top={-3}
                        zIndex={8}
                        fontSize={'2em'}
                        fontWeight={'bold'}>
                            &#x2192;&#x2192;     
                    </Text>
                </ChakraBox>
            </Flex>
        </GridItem>
    )
}

//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>



export default Projects

