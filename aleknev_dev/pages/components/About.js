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
        maxW={'100%'} 
        px={{md:'4em', lg:'10em'}}
        w={'100%'} 
        id='0' 
        pt='10em'
        pb='40em'>
			<Flex
				position={'absolute'}
				maxW={'full'}
				w={'100%'}
				h={'100%'}
				top={'-10%'}
				left={0}
				>
				<Image
					filter={'grayscale(40%)'}
					fit='cover'
					h={'100%'}
					w={'100%'}
					src={'side2.png'} />
			</Flex>
        <Flex
		justifyContent={'center'}
        direction={'column'}
        gap={'10em'}>
					<Flex
					justifyContent={'center'}
					gap={'3em'}
					direction='row'>
						<Flex
						gap={2}
						justifyContent={'space-between'}
						direction='column'>
								<Heading
							fontSize={{ md: '6em', lg: '7em' }}> 
									About Me.
								</Heading>
								<Text
								w={'35em'}
								fontWeight={700}
								fontSize={{ sm: '0.7em', md: '1em', lg: '1.2em' }}
								color={'blackAlpha.800'}>
									"fear != fate", a simple but meaningful mantra that I try to live by. I often feel that irrational fear holds us back.
								</Text>
						</Flex>
						<Spacer/>
						{pageIndicator()}
					</Flex>
					<Flex
								position={'relative'}
								zIndex={10}
								w={'100%'}
								justifyContent={'center'}
								direction={'column'}
								gap={'5em'}>
									<Flex
									direction={{md:'column',lg:'row'}}
									w={'100%'}
									gap={{ md: '1em', lg:'12%'}}
									position={'relative'}
									justifyContent={{ md: 'center', lg: 'flex-end' }}>						
										<Flex
											justifyContent={'center'}
											h={'10%'}
											position={'relative'}
											direction={'column'}
											textAlign={{ md: 'start', lg:'end'}}>
												<Heading
												w={{md: '100%', lg: '1.5em'}}
												fontWeight={900}
												color={'blackAlpha.800'}
												fontSize={45}>
													BACKGROUND
												</Heading>
												<Heading
												w={{ md: '100%', lg: '100%' }}
												fontWeight={900}
												position={'relative'}
												textAlign={{ md: 'start', lg: 'end' }}
												top={-7}>
													&#x5f;
												</Heading>
										</Flex>						
										<Flex
										position={'relative'}
										flexDirection={{md:'center', lg:'flex-end'}}
										w={{md:'100%', lg:'45em'}}
										minW={'30%'}
										gap={'1em'}
										bg={'whiteAlpha.500'}
										backdropFilter='auto'
										backdropBlur='5px'
										boxShadow={'md'}
										borderRadius={'20px'}>         
												<Box
												w={'100%'}
													zIndex={1}
													variants={subContainer}>
													<Text
														textAlign={'justify'}
														p={10}
														as={'p'}
														color={'blackAlpha.800'}
														fontSize={15}
														fontWeight={'700'}>
															<Image
															boxShadow={'xl'}
															ml={10}
															mb={8}
															float={'right'}
															fit='cover'
															borderRadius={'8px'}
															h={'22em'}
															w={'15em'}
															src={'https://i.imgur.com/7R4gnAa.jpg'} />
															I'm a recent Computer Science graduate from <b>McMaster University</b> with a BaSc. degree. <br /><br />
															My initial interest in web development came around 2017 when I had my first real introduction to making a website using nothing more than HTML, CSS, and JS. Soon after that I fiddled with IOS and Android app development. Cross platform programming presented a challenge and so naturally soon after that I picked up React Native development.
															<br></br><br></br>
															When I'm not developing something I'm always in the pursuit of some of the best dan-dan noodles in the area (Szechuan Noodle Bowl anyone?), or on the quest for an endgame mechanical keyboard. The latter of which by now I can say is a paradox. Something about the style of my apps and why I ended up using rounded corners and dropshadows for a long time.
															<br></br><br></br>Currently I'm <b>looking for new opportunities</b> as a developer!
													</Text>

												</Box>
										</Flex>
									</Flex>
									<Flex
										direction={{ md: 'column', lg: 'row' }}
										w={'100%'}
										gap={{ md: '1em', lg: '12%' }}
										position={'relative'}
										justifyContent={{ md: 'center', lg: 'flex-end' }}>
										<Flex
											justifyContent={'center'}
											h={'10%'}
											position={'relative'}
											direction={'column'}
											textAlign={{ md: 'start', lg: 'end' }}>
											<Heading
												w={{ md: '100%', lg: '1.5em' }}
												fontWeight={900}
												color={'blackAlpha.800'}
												fontSize={45}>
												SKILLS
											</Heading>
											<Heading
												w={{ md: '100%', lg: '100%' }}
												fontWeight={900}
												position={'relative'}
												textAlign={{ md: 'start', lg: 'end' }}
												top={-7}>
												&#x5f;
											</Heading>
										</Flex>
										<Flex
											position={'relative'}
											flexDirection={{ md: 'center', lg: 'flex-end' }}
											w={{ md: '100%', lg: '45em' }}
											minW={'30%'}
											gap={'1em'}
											bg={'whiteAlpha.500'}
											backdropFilter='auto'
											backdropBlur='5px'
											boxShadow={'md'}
											borderRadius={'20px'}>
											<Box
												w={'100%'}
												zIndex={1}
												variants={subContainer}>
												{skillsInfo()}

											</Box>
										</Flex>
									</Flex>

								</Flex>
                        </Flex>
			<Flex
				position={'absolute'}
				zIndex={0}
				maxW={'full'}
				w={'100%'}
				h={'100%'}
				top={'35%'}			
				left={'60%'}>
				<Image
					filter={'grayscale(40%)'}
					fit='cover'
					h={'50%'}
					w={'50%'}
					src={'aboutcorn.png'} />
			</Flex>
    </Container>
    
)}



const pageIndicator = () => { 
	return ( 
		<Flex
		w={'100%'}
		position={'relative'}
		direction="row"
		justifyContent={'flex-end'}	>
			<Flex
			w={'13em'}
			transform={'rotate(90deg)'}
			transformOrigin={'top left'}
			top={'10px'}
			left={'100%'}
			justifyContent={'flex-end'}
			position={'absolute'}
			direction={'column'}>
					<Flex
					left={'0.5em'}
					direction={'row'}
					position={'relative'}>
						<Flex
						direction='column'>
							<Heading
							fontSize={{md: '4em', lg: '4.5em'}}
							color={'blackAlpha.800'}
							fontWeight={900}
							pb={8}>
								01
							</Heading>
						</Flex>
						<Flex
						direction='column'>
							<Heading
							fontSize={{md: '4em', lg:'4.5em'}}
							color={'blackAlpha.300'}
							fontWeight={900}
							pb={8}>
								03
							</Heading>
						</Flex>
					
					</Flex>
			</Flex>
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
			direction={'column'}
            as={motion.div}
            whileHover={{ scale: 1.025 }}
            position='relative'>
           		{skillText()}
				<Flex
				pb={12}
				px={12}
				justify-content={'space-between'}
				direction='row'
				w={'100%'}>
					{skillList(4)}
					<Spacer/>
					{skillList(4)}
					<Spacer />
					{skillList(4)}
					<Spacer />
					{skillList(4)}
				</Flex> 
        	</Flex>
    )
}

//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>


const placeholderText = () => { 
    return (
            <ChakraBox
            variants={item}>

            </ChakraBox>

    )
}

const skillText = () => { 
    return ( 
            <Flex
            p={10}
            direction={'column'}>
                <ChakraBox
                variants={item}>
                <Text
					textAlign={'justify'}
                    as={'p'}
					color={'blackAlpha.800'}
					fontSize={15}
					fontWeight={'700'}>
                    Filler text filler text, this is my strength, filler text. I love that the field is ever evolving, and I find it fun to familiarize myself with new things on an ongoing basis! That said, here's a list of things I've used the most over time:  
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
		<Flex>
			<List spacing={8}>
			{skillItem(name, ic)}
			{skillItem(name2, ic2)}
			{skillItem(name3, ic3)}
			{skillItem(name4, ic4)}
			{skillItem(name4, ic4)}
			</List>   
		</Flex>     
    )
}

const skillItem = (name, ic) => { 
    return(
        <ListItem>
            <Flex
			w={'100%'}
			alignItems={'center'}
            direction={'row'}>
                <ListIcon as={ic} color='black.500'/>
                <Text
					textAlign={'center'}
                    fontSize={16}
                    fontWeight={700}>
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


