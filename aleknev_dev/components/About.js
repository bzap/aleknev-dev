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
    shouldForwardProp,
	useBreakpointValue,
	useBreakpoint
  } from '@chakra-ui/react';
import { SiReact, SiChakraui, SiJavascript, SiPython } from 'react-icons/si';
import { MdOutlineSubdirectoryArrowRight } from 'react-icons/md'
import { motion, useScroll, useTransform, isValidMotionProp } from "framer-motion";
import { skillsContainer, subContainer, item, skillsItem, container } from '../styles/Variants'
import Head from 'next/head';
import { redirect } from 'next/dist/server/api-utils'
import Title from './Title'
import Wave from './Variants/Wave'
import { about, gradient, gradient2, currentSkills, background, title, itemIcon, itemText, itemTitle, aboutItem, titleContainer, projectSubContainer, projectContainer } from '../styles/Variants'


const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const About = () => {
	const bp = useBreakpoint()
	console.log(bp)
    return(
    <Box
        position={'relative'}
        maxW={'100%'} 
        px={{base: '3%', sm: '5%', md: '10%', lg:'10%'}}
        w={'100%'} 
        id='0' 
		pt={{ base: '7em', sm:'10em', md: '10em', lg: '10em'}}
		pb={{ base: '7em', sm: '10em', md: '16em', lg: '16em' }}>
        <Flex
		justifyContent={'center'}
        direction={'column'}
        gap={'2em'}>
			<ChakraBox
			variants={gradient}
			initial={'hidden'}
			whileInView={'visible'}
			viewport={{ once: true }}>
						<Flex
							position={'absolute'}
							w={'100%'}
							h={'100%'}
							top={{sm: '-20em', md: '-20em', lg: '-20em'}}
							left={{sm: '-10em', md: '-15em', lg: '-15em'}}>
							<Center>
								<Image
									
									h={{base: '0em', sm: '70em', md: '70em', lg: '78em'}}
									w={{base: '0em', sm: '70em', md: '70em', lg: '78em'}}
									src={'topabout.webp'} />
							</Center>
						</Flex>
				</ChakraBox>
						<ChakraBox
							as={motion.div}
							variants={about}
							initial={'hidden'}
							whileInView={'visible'}
							viewport={{ once: true, amount: 0.5}}>
						<Title 
							title={'About Me.'}
							desc={'"fear != fate", a simple but meaningful mantra that I try to live by.I often feel that irrational fear holds us back.'}
							page={'01'}/>
						</ChakraBox>
						<Flex
							position={'relative'}
							zIndex={10}
							w={'100%'}
							justifyContent={'center'}
							direction={'column'}
							gap={{base: '1em', sm: '2em', md: '4em', lg:'5em'}}>
						<Flex>
						<ChakraBox
							variants={gradient2}
							initial={'hidden'}
							whileInView={'visible'}
							viewport={{ once: true, amount: 0.99}}>
						<Flex
							position={'absolute'}
							zIndex={0}
							maxW={'full'}
							w={'100%'}
							h={'100%'}
							top={{sm: '60em', md: '50em', lg: '20em'}}
							left={{sm: '5em', md: '15em', lg: '40em'}}>
							<Image
								fit='cover'
								h={{ base: '0em', sm: '60em', md: '70em', lg: '70em'}}
								w={{base: '0em', sm: '60em', md: '85em', lg: '85em'}}
								src={'cornerabout.webp'} />
						</Flex>
						</ChakraBox>
						</Flex>
							<ChakraBox
								as={motion.div}
								variants={background}
								initial={'hidden'}
								whileInView={'visible'}
								viewport={
										bp == 'lg' || bp == 'xl' || bp == '2xl' ? ({ once: true, amount: 0.65 }) 
											: bp == 'md' ? ({ once: true, amount: 0.65 }) 
												: bp == 'sm' ? ({ once: true, amount: 0.5 }) 
													: bp == 'base' ? ({ once: true, amount: 0.5 })
														: ({ once: true })}>
									<Flex		
									direction={{base: 'column', sm: 'column', md:'column',lg:'row'}}
									w={'100%'}
									zIndex={10}
									gap={{ base: '0.5em', sm: '0.5em', md: '1em', lg:'8%'}}
									position={'relative'}
									justifyContent={{ base: 'center', sm: 'center', md: 'center', lg: 'flex-end' }}>	
										<ChakraBox
										variants={aboutItem}>			
											<Flex
												justifyContent={'flex-start'}
												position={'relative'}
												direction={'column'}
												textAlign={{ base: 'start', sm: 'start', md: 'start', lg:'end'}}>
												<Icon
													position={'relative'}
													as={MdOutlineSubdirectoryArrowRight}
													w={{ base: 0, sm: '0em', md: '0em', lg: '5.7em' }}
													h={{ base: 0, sm: '0em', md: '0em', lg: '5.7em' }}
													color={'blackAlpha.800'}
													transform={{ lg: 'scale(1)' }} />
											</Flex>
										</ChakraBox>		
										<ChakraBox
										whileHover={{ scale: 1.025 }}
										variants={aboutItem}>			
										<Flex
										position={'relative'}
										flexDirection={{base: 'center', sm: 'center', md:'center', lg:'flex-end'}}
										w={{base: '100%', sm: '100%', md:'100%', lg:'45em'}}
										minW={'50%'}
										gap={'1em'}
										bg={'whiteAlpha.600'}
										backdropFilter='auto'
										backdropBlur='5px'
										boxShadow={'md'}
										borderRadius={'20px'}>         
												<ChakraBox
													w={'100%'}
													zIndex={1}
													py={{ base: 7, sm: 8, md: 10, lg: 10 }}
													px={{ base: 7, sm: 8, md: 10, lg: 10 }}	>
													<ChakraBox
													variants={aboutItem}>
														<Heading>
															<Text
																pb={4}
																borderBottomWidth={'2px'}
																borderBottomColor={'blackAlpha.100'}
																color='blackAlpha.800'
																fontWeight={900}
																fontSize={{ base: 30, sm: 35, md: 38, lg: 38 }}>
																BACKGROUND 
															</Text>
														</Heading>
													</ChakraBox>
													<ChakraBox
													variants={itemText}>	
													<Text
														textAlign={'justify'}
														pt={8}
														pb={2}
														color={'blackAlpha.800'}
														fontSize={{base: 13, sm: 13.5, md: 14, lg: 14.5}}
														fontWeight={'700'}>	
															<Image
															justifyContent={'center'}
															position={'relative'}
															boxShadow={'md'}
															ml={10}
															mb={5}
															mt={'7px'}
															float={'right'}
															fit='cover'
															borderRadius={'3px'}
															borderWidth={'5px'}
															borderColor={'black'}
															h={{ base: '12em', sm: '15em', md: '20em', lg: '22em'}}
															w={{ base: '9em', sm: '10em', md: '15em', lg: '15em' }}
															src={'https://i.imgur.com/7R4gnAa.jpg'} />								
															I'm a recent Computer Science graduate from <b>McMaster University</b> with a BaSc. degree.
															My initial interest in web development came around 2017 when I had my first real introduction to making a website using nothing more than HTML, CSS, and JS. Soon after that I fiddled with IOS and Android app development. Cross platform programming presented a challenge and so naturally soon after that I picked up React Native development.
															When I'm not developing something I'm always in the pursuit of some of the best dan-dan noodles in the area (Szechuan Noodle Bowl anyone?), or on the quest for an endgame mechanical keyboard. The latter of which by now I can say is a paradox. Something about the style of my apps and why I ended up using rounded corners and dropshadows for a long time.Currently I'm <b>looking for new opportunities</b> as a developer!
													</Text>
													</ChakraBox>
												</ChakraBox>
											</Flex>
										</ChakraBox>			
									</Flex>

									</ChakraBox>
									<ChakraBox
										as={motion.div}
										variants={background}
										initial={'hidden'}
										whileInView={'visible'}
										viewport={
												bp == 'lg' || bp == 'xl' || bp == '2xl' ? ({ once: true, amount: 0.80 })
													: bp == 'md' ? ({ once: true, amount: 0.75 })
														: bp == 'sm' ? ({ once: true, amount: 0.5 })
															: bp == 'base' ? ({ once: true, amount: 0.5 })
																: ({ once: true })}>
									<Flex
										direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
										w={'100%'}
										gap={{ base: '0.5em', sm: '0.5em', md: '1em', lg: '8%' }}
										position={'relative'}
										justifyContent={{ base: 'center', sm: 'center', md: 'center', lg: 'flex-end' }}>
										<ChakraBox
										variants={aboutItem}>	
											<Flex
												justifyContent={'center'}
												zIndex={10}
												position={'relative'}
												direction={'column'}
												textAlign={{ base: 'start', sm: 'start', md: 'start', lg: 'end' }}>
												<Icon
													as={MdOutlineSubdirectoryArrowRight}
													w={{base: '0em', sm: '0em', md: '0em', lg: '5.7em'}}
													h={{base: '0em', sm: '0em', md: '0em', lg: '5.7em' }}
													color={'blackAlpha.800'}
													transform={{ lg: 'scale(1)'}}/>
											</Flex>
										</ChakraBox>
										<ChakraBox
											whileHover={{ scale: 1.025 }}
											variants={aboutItem}>
										<Flex
											position={'relative'}
											flexDirection={{ base: 'center', sm: 'center', md: 'center', lg: 'flex-end' }}
											w={{ base: '100%', sm: '100%', md: '100%', lg: '45em' }}
											minW={'50%'}
											gap={'1em'}
											zIndex={10}
											bg={'whiteAlpha.600'}
											backdropFilter='auto'
											backdropBlur='5px'
											boxShadow={'md'}
											borderRadius={'20px'}>
											<Box
												position={'relative'}
												zIndex={10}			
												w={'100%'}>
												{skillsInfo()}
											</Box>

										</Flex>
										</ChakraBox>
									
										
									</Flex>
									</ChakraBox>
								</Flex>
								
                        </Flex>
    </Box>
    
)}


const skillsInfo = () => { 
    return (
			<Flex
			direction={'column'}
            as={motion.div}
            position='relative'
			px={{base: 7, sm: 8, md: 12, lg: 10}}
			pt={10}
			>
			<ChakraBox
			variants={aboutItem}>	
			<Heading>
				<Text
					pb={4}
					borderBottomWidth={'2px'}
					borderBottomColor={'blackAlpha.100'}
					color='blackAlpha.800'
					fontWeight={900}
					fontSize={{ base: 30, sm: 35, md: 38, lg: 40 }}>
					SKILLS
				</Text>
			</Heading>
			</ChakraBox>
			<ChakraBox
			variants={itemText}>
           		{skillText()}
			</ChakraBox>
			<ChakraBox
			variants={currentSkills}>
				<Flex
				pb={14}
				justify-content={'space-between'}
				direction='row'
				w={'100%'}>
					{skillList(4)}
					<Spacer/>
					{skillList(4)}
					<Spacer />
					{skillList(4)}
				</Flex>
			</ChakraBox> 
        	</Flex>
    )
}


const skillText = () => { 
    return ( 
            <Flex
			pt={8}
			pb={8}
            direction={'column'}>
                <ChakraBox
                variants={item}>
                <Text
					textAlign={'justify'}
                    as={'p'}
					color={'blackAlpha.800'}
					fontSize={{ base: 13, sm: 13.5, md: 14, lg: 14.5 }}
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
					fontSize={{ base: 12, sm: 13.5, md: 14, lg: 15 }}
                    fontWeight={700}>
                    &thinsp;{name}
                </Text>
            </Flex>
        </ListItem>
    )
}

export default About


