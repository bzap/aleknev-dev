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
  } from '@chakra-ui/react';
import Head from 'next/head';
const Hero = () => ( 
    <Container maxW={'7xl'} id='p1'>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 15, lg: 30 }}
        py={{ base: 20, md: 48 }}
        direction={{ base: 'column', md: 'row' }}>
        <Stack flex={1} spacing={{ base: 5, md: 0 }}>
        <Heading>  
            <Text as={'span'} 
                  color={'black'}
                  fontWeight='600'
                  fontSize={{ base: '20', sm: '30', lg: '50' }}>
                Hey! I'm
            </Text>
            <Text 
                as={'span'} 
                color={'black'} 
                fontWeight='semibold'
                fontSize={{ base: '40', sm: '50', lg: '90' }}>  
                 &thinsp;Linas
            </Text>      
            <Text 
                as={'span'} 
                color={'black'} 
                fontSize={{ base: '20', sm: '30', lg: '40' }}>  
                 .
            </Text> 
            <Text
                color={'gray.600'}
                fontWeight='600'
                pl={'9'}
                fontSize={{ base: '20', sm: '30', lg: '30' }}>
                I'm a developer based in Toronto. 
            </Text>
          <Text 
            pt={1}
            color={'gray.500'}
            pl={'20'}
            fontSize={{ base: '20', sm: '30', lg: '22' }}>
              Sometimes I'm known for my pursuits of dan-dan noodles and other times for my strong desire to learn.  
        </Text>  
        </Heading> 
  

        </Stack>

        <Flex
          flex={1}
          justify={{sm: 'center', md: 'center', lg: 'flex-end'}}
          align={'center'}
          position={'relative'}
          w={'full'}>
          <Box
            position={'relative'}
            height={'400px'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'100%'}
            overflow={'hidden'}>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );

export default Hero