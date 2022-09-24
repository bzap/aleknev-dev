import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    Grid, 
    GridItem,
    VStack,
    AspectRatio,
    HStack,
    List, 
    ListIcon,
    ListItem,
  } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'


const About = () => ( 
    <Container maxW={'7xl'} w={'100%'} id='p3' py='7em'>
        <Stack
            align={'center'}
            maxW={'7x1'}
            bg='white'
            borderRadius={'12px'}
            boxShadow={'lg'}
            direction={'row'}
        >
            <Stack
                flex={1}
                p={'3em'}
                align={'center'}
                justify={'center'}>
                    <div>
                        {placeholderText()}
                    </div>
            </Stack>
            <Flex
                flex={1}
                p={'4em'}
                justify={{sm: 'center', md: 'center', lg: 'flex-end'}}
                align={'center'}
                position={'relative'}
                w={'full'}>
            <Box
                position={'relative'}
                h={'40em'}
                w={'30em'}
                rounded={'2xl'}
                boxShadow={'xl'}
                overflow={'hidden'}>
                <AspectRatio
                    ratio={2/3}>
                    <Image
                        fit={'cover'}
                        align={'center'}
                        w={'100%'}
                        h={'100%'}
                        src={'https://i.imgur.com/7R4gnAa.jpg'}>
                        </Image>
                </AspectRatio>
            </Box>
            </Flex>
        </Stack>


    </Container>
  );


//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>


const placeholderText = () => { 
    return (
        <VStack>
            <Text
                as={'p'}
                fontSize={20}>
                I'm a recent Computer Science graduate from <b>McMaster University</b> with a BaSc. degree. <br/><br/> 
                My initial interest in web development came around 2017 when I had my first real introduction to making a website using nothing more than HTML, CSS, and JS. Soon after that I fiddled with IOS and Android app development. Cross platform programming presented a challenge and so naturally soon after that I picked up React Native development.   
            </Text>
            <Text
                fontSize={20}
                as={'p'}>
                I love that this field is continously evolving, so I try to familiarize myself with new variations on an ongoing basis! That said, here's a list of things I'ved learnt and used the most over time:  
            </Text>
            <HStack>
            <List spacing={3}>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} color='green.500' />
                    React
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} color='green.500' />
                    JS
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} color='black' />
                    Node.js
                </ListItem>
                {/* You can also use custom icons from react-icons */}
            </List>    
            <List spacing={3}>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} color='green.500' />
                    React
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} color='green.500' />
                    JS
                </ListItem>
                <ListItem>
                    <ListIcon as={ChevronRightIcon} color='black' />
                    Node.js
                </ListItem>
                {/* You can also use custom icons from react-icons */}
            </List>             

            </HStack>
        </VStack>

    )
}

export default About

