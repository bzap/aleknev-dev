import {
    Divider,
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
    VStack,
    AspectRatio,
    HStack,
    Center,
    List, 
    ListIcon,
    ListItem,
  } from '@chakra-ui/react';
import { SiReact, SiChakraui, SiJavascript, SiPython } from 'react-icons/si';
import { motion } from "framer-motion";


const About = () => ( 
    <Container 
        maxW={'7xl'} 
        w={'100%'} 
        id='0' 
        py='7em'>
        <Flex
        maxW={'7x1'}
        direction={'row'}
        justifyContent={'center'}
        gap={'7em'}>
            <Flex 
            direction='column'
            gap={'6em'}>
                    {backgroundInfo()}
                    <Flex
                    h={'20em'}
                    gap={'2em'}>
                        {pictureFrame('0%', '0%', 'https://i.imgur.com/7R4gnAa.jpg', 8, 'full', 'full')}
                        {pictureFrame('0%', '0%', 'https://i.imgur.com/7R4gnAa.jpg', 8, 'full', 'full')}
                    </Flex>
            </Flex>
            <Flex
            direction='column'
            gap={'5em'}>
                {selfPortrait()}
                {skillsInfo()}
            </Flex>
        </Flex>
    </Container>
  );

const backgroundInfo = () => { 
    return ( 
        <GridItem 
        as={motion.div}
        whileHover={{ scale: 1.03 }}
        flex={1}
        justifyContent='center'
        borderRadius={'20px'}
        bg={'white'}
        boxShadow={'lg'}
        p={6}
        w='35em'>
            {placeholderText()}
        </GridItem>
    )
}

const selfPortrait = () => { 
    return ( 
            <GridItem 
            colSpan={2}
            flex={1}
            w={'25em'}
            justifyContent={'flex-end'} >
            {pictureFrame('0%', '0%', 'https://i.imgur.com/7R4gnAa.jpg', 8, 'full', 'full')}
        </GridItem>
    )
}

const skillsInfo = () => { 
    return (
        <GridItem 
            as={motion.div}
            whileHover={{ scale: 1.03 }}
            colSpan={2}
            h={'35em'}
            position='relative'
            flex={1}
            w='25em' 
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
        <Flex
        direction={'column'}
        p={6}>
            <Heading>
                <Text
                    pb='2'
                    fontSize={'1em'}
                    fontWeight={'bold'}> 
                    &#x2192;&#8201;&#x2192;
                </Text>
            </Heading>
            <Divider orientation={'horizontal'}/>
            <Text
                pt={'5'}
                as={'p'}
                fontSize={16}
                fontWeight={'500'}>
                I'm a recent Computer Science graduate from <b>McMaster University</b> with a BaSc. degree. <br/><br/> 
                My initial interest in web development came around 2017 when I had my first real introduction to making a website using nothing more than HTML, CSS, and JS. Soon after that I fiddled with IOS and Android app development. Cross platform programming presented a challenge and so naturally soon after that I picked up React Native development.   
                <br/><br/>
                When I'm not developing something I'm always in the pursuit of some of the best dan-dan noodles in the area (Szechuan Noodle Bowl anyone?), or on the quest for an endgame mechanical keyboard. The latter of which by now I can say is a paradox. Something about the style of my apps and why I ended up using rounded corners and dropshadows for a long time. 
                <br/><br/>
                Currently I'm <b>looking for new opportunities</b> as a developer!
            </Text>
        </Flex>

    )
}

const skillText = () => { 
    return ( 
        <Flex
        p={'10'}
        direction={'column'}>
            <Heading>
                <Text
                    pb='2'
                    fontSize={'1em'}
                    fontWeight={'bold'}> 
                    SKILLS
                </Text>
            </Heading>
            <Divider orientation={'horizontal'}/>
            <Text
                fontSize={16}
                pt={'5'}
                pb={'8'}
                as={'p'}
                fontWeight={'500'}>
                I love that the field is ever evolving, and I find it fun to familiarize myself with new things on an ongoing basis! That said, here's a list of things I've used the most over time:  
            </Text>
            <Grid
            templateColumns='repeat(3, 1fr)'
            gap={3}>
                {skillList(4)}
                {skillList(4)}
                {skillList(4)}
            </Grid >        
        </Flex>

    )
}

const skillList = (items) => { 
    // get from mdx here
    const name = 'React'
    const ic = SiReact

    // temp icons for test 
    const name2 = 'Python'
    const name3 = 'JS'
    const name4 = 'Chakra'
    const ic2 = SiPython
    const ic3 = SiJavascript
    const ic4 = SiChakraui

    return( 
        <List spacing={4}>
        {skillItem(name, ic)}
        {skillItem(name2, ic2)}
        {skillItem(name3, ic3)}
        {skillItem(name4, ic4)}
        {skillItem(name4, ic4)}
        {/* You can also use custom icons from react-icons */}
    </List>        
    )
}

const skillItem = (name, ic) => { 
    return(
        <ListItem>
            <Flex
            flex={1}
            alignItems='center'
            direction={'row'}>
                <ListIcon as={ic} color='black.500' />
                <Text
                    fontWeight={'bold'}>
                    &thinsp;{name}
                </Text>
            </Flex>
        </ListItem>
    )
}

//flexShrink={1}
//h={'13em'}
//overflow={'hidden'}
//boxShadow={'lg'}>


// need to remake this function for cleanliness with selfprotrait
const pictureFrame = (top, left, url, ind, w, h) => {
    return (
            <Box
                as={motion.div}
                whileHover={{ scale: 1.03 }}
                flex={1}
                position={'relative'}>

                <Stack  
                    overflow={'hidden'}
                    direction={'column'}
                    h={'35em'}
                    >
                <Image
                    borderRadius={'20px'}
                    boxShadow={'2xl'}
                    borderWidth={'5em'}
                    zIndex={ind}
                    w={w}
                    h={h}
                    position={'absolute'}
                    top={top}
                    left={left}
                    fit={'cover'}
                    align={'center'}
                    src={url}/>
            )
                </Stack>
            </Box>
    )
    
}


//{stackedImage('45%', '30%', 'https://staticg.sportskeeda.com/editor/2022/02/af653-16442505538786-1920.jpg', 7, '11em', '11em')}
//{stackedImage('79%', '60%', 'https://i.imgur.com/P9IVqkS.jpeg', 8, '7em', '7em')}


export default About

