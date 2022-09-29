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
import Parallax from '../layouts/Parallax';
import { SiGithub  } from 'react-icons/si';


const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const cardVariants = {
    offscreen: {
      y: 0
    },
    onscreen: {
      y: 0,
    
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };


const Projects = () => ( 
    <Container 
        position={'relative'}
        maxW={'7xl'}
        id='1' 
        px={'10em'}
        py={'10em'}
        pb={'20em'}>
        <Grid templateColumns='repeat(2, 1fr)' gap={'10em'}>
          <Parallax offset={150}>
            {verticalItem('0%')}
          </Parallax>
          <Parallax offset={80}>
            {verticalItem('40%')}
          </Parallax>
          <Parallax offset={150}>
            {verticalItem('-20%')}
            </Parallax>
          <Parallax offset={80}>
            {verticalItem('40%')}
          </Parallax>
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
            direction={'column'}>
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
                            MORE CODE HERE    
                </Center>
               
                <Flex
                direction={'row'}>
                  <Flex
                  as={motion.div}
                  pt={'2em'}
                  direction={'column'}
                  alignItems={'flex-end'}>
                    <Text
                    fontSize={26}
                    fontWeight={'bold'}>
                      MORE&#160;&#160;&#160;&#160;
                    </Text> 
                    <Text
                    fontSize={26}
                    fontWeight={'bold'}>
                      CODE&#160;&#160;
                    </Text>
                    <Text
                    fontSize={26}
                    fontWeight={'bold'}>
                      HERE
                    </Text>
                  </Flex>  
                  
                  <ChakraBox
                  cursor={'pointer'}
                  as={motion.div}
                  whileHover={{scale:1.1}}
                  whileTap={{scale:0.9}}>
                    <Icon 
                    as={SiGithub} 
                    h={'6em'}
                    w={'6em'}/>
                  </ChakraBox>               
                </Flex>
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

