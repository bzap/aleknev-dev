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
    <Container 
        maxW={'7xl'} 
        w={'100%'} 
        id='p3' 
        py='7em'>
        <Grid templateColumns='repeat(2, 1fr)' gap={'2em'}>
            {backgroundInfo()}
            {selfPortrait()}
            {skillsInfo()}
        </Grid>
        

    </Container>
  );

const backgroundInfo = () => { 
    return ( 
        <GridItem 
        colSpan={2}
        flex={1}
        justifyContent={'flex-start'}
        w='100%' 
        bg='white' 
        boxShadow={'lg'} 
        borderRadius={'25px'} >
            {placeholderText()}
        </GridItem>
    )
}


const selfPortrait = () => { 
    return ( 
            <GridItem 
            colSpan={1}
            flex={1}
            justifyContent={'flex-start'}
            w='100%' 
            bg='white' 
            boxShadow={'lg'} 
            borderRadius={'25px'} >
            {pictureFrame()}
        </GridItem>
    )
}

const skillsInfo = () => { 
    return (
        <GridItem 
            colSpan={3}
            flex={1}
            justifyContent={'flex-start'}
            w='100%' 
            bg='white' 
            boxShadow={'lg'} 
            borderRadius={'25px'} >
            {skillText()}
        </GridItem>
    )
}



//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>


const placeholderText = () => { 
    return (
        <Stack
        direction={'vertical'}
        p={10}>
            <Text
                as={'p'}
                fontSize={20}>
                I'm a recent Computer Science graduate from <b>McMaster University</b> with a BaSc. degree. <br/><br/> 
                My initial interest in web development came around 2017 when I had my first real introduction to making a website using nothing more than HTML, CSS, and JS. Soon after that I fiddled with IOS and Android app development. Cross platform programming presented a challenge and so naturally soon after that I picked up React Native development.   
                <br/><br/>
                When I'm not developing something I'm always in the pursuit of some of the best dan-dan noodles in the area (Szechuan Noodle Bowl anyone?), or on the quest for an endgame mechanical keyboard. The latter of which by now I can say is a paradox. Something about the style of my apps and why I ended up using rounded corners and dropshadows for a long time. 
                <br/><br/>
                Currently I'm looking for new oppurtunities as a developer!
            </Text>
        </Stack>

    )
}

const skillText = () => { 
    return ( 
        <HStack
        p={7}>
            <Text
                fontSize={20}
                as={'p'}>
                I love that this field is continously evolving, so I try to familiarize myself with new variations on an ongoing basis! That said, here's a list of things I'ved learnt and used the most over time:  
            </Text>

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
    )
}


//flexShrink={1}
//h={'13em'}
//overflow={'hidden'}
//boxShadow={'lg'}>

const pictureFrame = () => {
    return (
            <Box
                flex={1}
                position={'relative'}
                w={'20em'}
                align={'center'}
                overflow={'hidden'}
                borderRadius={'20px'}
                boxShadow={'lg'}>
                <Stack
                    direction={''}
                    h={'35em'}>
                    <Image
                        h={'100%'}
                        fit={'cover'}
                        align={'center'}
                        src={'https://i.imgur.com/7R4gnAa.jpg'}>
                        </Image>
                </Stack>
            </Box>
    )

}


export default About

