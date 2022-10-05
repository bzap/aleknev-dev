import {
    Divider,
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    chakra,
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
    Spacer,
    shouldForwardProp
  } from '@chakra-ui/react';
import { SiReact, SiChakraui, SiJavascript, SiPython } from 'react-icons/si';
import { motion, useScroll, useTransform, isValidMotionProp } from "framer-motion";
import Parallax from './layouts/Parallax';
import { skillsContainer, subContainer, item, skillsItem, container } from './Variants/Variants';
import Head from 'next/head';
import { redirect } from 'next/dist/server/api-utils';


const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const About = () => {
    //const { scrollYProgress } = useScroll() 
    //const y1 = useTransform(scrollYProgress, [0, 300], [0, 200]);
    //const y2 = useTransform(scrollYProgress, [0, 300], [0, -100]);
  
    return( 

    


    
    <Container 
        position={'relative'}
        maxW={'9xl'} 
        px={'10em'}
        w={'100%'} 
        id='0' 
        pt='10em'
        pb='40em'>
        <Flex
        direction={'column'}
        gap={'10em'}>
                        <Flex
                        gap={'5em'}
                        direction='column'>
                                <Heading
                                fontSize={'7em'}> 
                                    About
                                </Heading>
                                <Text
								pb={'5em'}
                                w={'30em'}
                                fontWeight={600}
                                fontSize={'1.4em'}
                                color={'blackAlpha.600'}>
                                    This is sample text talking about my projects. That's just the way it goes sometimes. It is what it is.
                                </Text>
								<Flex
								w={'100%'}
								position={'relative'}
								justifyContent={'center'}
								direction={'column'}>
									<Flex
									direction={'row'}
									position={'relative'}
									justifyContent={'center'}>						
										<Flex
											
											w={'22em'}
											h={'10em'}
											borderRightWidth={'9px'}
											borderRightColor={'blackAlpha.800'}>
											<Flex
											w={'22em'}
											direction={'column'}
											position={'relative'}
											bottom={'10px'}
											gap={0}
											pr={10}>
												<Heading
												position={'relative'}
												textAlign={'end'}
												fontWeight={'900'}
												fontSize={'2.5em'}>
													BACKGROUND
												</Heading>
											</Flex>
										</Flex>
										<Flex
										pl={'5em'}
										w={'60em'}>         
												<ChakraBox
													zIndex={1}
													variants={subContainer}>
														{backgroundInfo()}
												</ChakraBox>
										</Flex>
									</Flex>
								</Flex>
								<Flex
								w={'100%'}
								position={'relative'}
								justifyContent={'center'}
								direction={'column'}>
									<Flex
									direction={'row'}
									position={'relative'}
									justifyContent={'center'}>						
										<Flex
											w={'22em'}
											h={'10em'}
											borderRightWidth={'9px'}
											borderRightColor={'blackAlpha.800'}>
											<Flex
											w={'22em'}
											direction={'column'}
											position={'relative'}
											bottom={'10px'}
											gap={0}
											pr={10}>
												<Heading
												position={'relative'}
												textAlign={'end'}
												fontWeight={'900'}
												fontSize={'2.5em'}>
													SKILLS
												</Heading>
											</Flex>
										</Flex>
										<Flex
										pl={'5em'}
										w={'60em'}>         
												<ChakraBox
													zIndex={1}
													variants={subContainer}>
														{skillsInfo()}
												</ChakraBox>
										</Flex>
									</Flex>
								</Flex>
                        </Flex>
        </Flex>
    </Container>
    
)}

const backgroundInfo = () => { 
    return ( 
        <Flex 
        as={motion.div}
        whileHover={{ scale: 1.025 }}
        boxShadow={'md'}
        bg='whiteAlpha.500'
        borderRadius={'20px'}
        direction={'row'}
        gap={10}
        w={'60em'}
        justifyContent='center'>
    
            {placeholderText()}
            <Stack>                            
                <Image
                    fit='cover'
                    borderRightRadius={'12px'}
                    borderWidth={'5em'}
                    filter={'grayscale(80%)'}
                    h={'100%'}
                    w={'100%'}
                    src={'https://i.imgur.com/7R4gnAa.jpg'}/>

            </Stack>
        </Flex>
    )
}


const selfPortrait = () => { 
    return ( 
            <Flex
            flex={1}
            w={'30em'}>
                    {pictureFrame('0%', '0%', '0%', '0%', 'https://i.imgur.com/7R4gnAa.jpg', 8, 'full', 'full')}
            </Flex>
    )
}

const skillsInfo = () => { 
    return (
        <Flex
		w={'60em'}
		gap={'3em'}
		direction={'row'}>
			<Flex
            as={motion.div}
            whileHover={{ scale: 1.025 }}
            colSpan={2}
            position='relative'
            flex={1}
			w={'30em'}
            bg='whiteAlpha.600' 
            boxShadow={'md'} 
            borderRadius={'22px'}>
           		{skillText()}
        	</Flex>
			<Flex
            as={motion.div}
            whileHover={{ scale: 1.025 }}
            colSpan={2}
            position='relative'
            flex={1}
			w={'30em'}
            bg='whiteAlpha.600' 
            boxShadow={'md'} 
            borderRadius={'22px'}>
				<Center
				w={'100%'}>
					<ChakraBox
					variants={skillsItem}>
						<Flex
						direction={'row'}
						gap={10}>
							{skillList(4)}
							{skillList(4)}
							{skillList(4)}
						</Flex> 
                </ChakraBox>    
				</Center> 
        	</Flex>

		</Flex>
    )
}

//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>


const placeholderText = () => { 
    return (
        <Flex
        p={10}
        direction={'column'}>
            <ChakraBox
           
            variants={item}>
            <Text
                variants={item}
                as={'p'}
                fontSize={15}
                
                fontWeight={'600'}>
                I'm a recent Computer Science graduate from <b>McMaster University</b> with a BaSc. degree. <br/><br/> 
                My initial interest in web development came around 2017 when I had my first real introduction to making a website using nothing more than HTML, CSS, and JS. Soon after that I fiddled with IOS and Android app development. Cross platform programming presented a challenge and so naturally soon after that I picked up React Native development.   
                When I'm not developing something I'm always in the pursuit of some of the best dan-dan noodles in the area (Szechuan Noodle Bowl anyone?), or on the quest for an endgame mechanical keyboard. The latter of which by now I can say is a paradox. Something about the style of my apps and why I ended up using rounded corners and dropshadows for a long time. 
                Currently I'm <b>looking for new opportunities</b> as a developer!
            </Text>
            </ChakraBox>
        </Flex>

    )
}

const skillText = () => { 
    return ( 
            <Flex
            p={'10'}
            direction={'column'}>
                <ChakraBox
                variants={item}>
                </ChakraBox>
                <ChakraBox
                variants={item}>
                <Text
                    fontSize={15}
                    pt={'5'}
                    pb={'8'}
                    as={'p'}
                    fontWeight={'500'}>
                    I love that the field is ever evolving, and I find it fun to familiarize myself with new things on an ongoing basis! That said, here's a list of things I've used the most over time:  
                </Text>
                </ChakraBox>
  
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
                    fontSize={15}
                    fontWeight={'bold'}>
                    &thinsp;{name}
                </Text>
            </Flex>
        </ListItem>
    )
}

const pictureFrame = (top, left, bottom, right, url, ind, w, h) => {
    return (
            <Flex
                as={motion.div}
                whileHover={{ scale: 1.025 }}
                flex={1}
                position={'relative'}>
                <Flex  
                    overflow={'hidden'}
                    h={'30em'}>
                <Image
                    filter={'grayscale(70%)'}
                    borderRadius={'12px'}
                    boxShadow={'md'}
                    borderWidth={'5em'}
                    zIndex={ind}
                    w={w}
                    h={h}
                    position={'absolute'}
                    top={top}
                    left={left}
                    bottom={bottom}
                    right={right}
                    fit={'cover'}
                    align={'center'}
                    src={url}/>
                </Flex>
            </Flex>
    )
    
}




//{stackedImage('45%', '30%', 'https://staticg.sportskeeda.com/editor/2022/02/af653-16442505538786-1920.jpg', 7, '11em', '11em')}
//{stackedImage('79%', '60%', 'https://i.imgur.com/P9IVqkS.jpeg', 8, '7em', '7em')}


export default About


