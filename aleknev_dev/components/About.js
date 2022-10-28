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
import aboutText from '../public/data/AboutText'
import { about, gradient, gradient2, currentSkills, background, title, itemIcon, itemText, itemTitle, aboutItem, titleContainer, projectSubContainer, projectContainer } from '../styles/Variants'
import { CgSmile } from 'react-icons/cg';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const About = () => {
	const bp = useBreakpoint()
    return(
    <Box
        position={'relative'}
        maxW={'100%'} 
        px={{base: '6.5%', sm: '5%', md: '10%', lg:'12%'}}
        w={'100%'} 
        id='0' 
		pt={{ base: '7em', sm:'10em', md: '10em', lg: '10em'}}
		pb={{ base: '7em', sm: '10em', md: '16em', lg: '16em' }}>
        <Flex
		justifyContent={'center'}
        direction={'column'}>
			<ChakraBox
			variants={gradient}
			initial={'hidden'}
			whileInView={'visible'}
			viewport={{ once: true }}>
						<Flex
							position={'absolute'}
							w={'100%'}
							h={'100%'}
							top={{sm: '0em', md: '-20em', lg: '-10em'}}
							left={{sm: '0em', md: '-15em', lg: '-15em'}}>
							<Center>
								<Image
								h={{ base: '0em', sm: '0', md: '0em', lg: '0em', xl: '78em' }}
								w={{ base: '0em', sm: '0', md: '0em', lg: '0em', xl: '78em' }}
									src={'topabout.webp'} />
							</Center>
						</Flex>
				</ChakraBox>
						<Flex
						position={'relative'}
						direction={'column'}
						alignItems={{base: 'center', sm: 'center', md: 'center', lg: 'start'}}>
							<ChakraBox
								position={'relative'}

								as={motion.div}
								variants={about}
								initial={'hidden'}
								whileInView={'visible'}
								viewport={{ once: true, amount: 0.5 }}>
								<Title
									title={'About Me.'}
									desc={'"fear != fate", a simple but meaningful mantra that I try to live by. It\'s a reminder to try and shrug off irrational fear.'}
									page={'01'} />
							</ChakraBox>
						</Flex>

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
							top={{sm: '50em', md: '40em', lg: '20em'}}
							left={{sm: '5em', md: '15em', lg: '50em'}}>
							<Image
								fit='cover'
									h={{ base: '0em', sm: '0em', md: '0em', lg: '0em', xl: '70em' }}
									w={{ base: '0em', sm: '0em', md: '0em', lg: '0em', xl: '85em' }}
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
													: bp == 'base' ? ({ once: true})
														: ({ once: true })}>
									<Flex		
									direction={{base: 'column', sm: 'column', md:'column',lg:'row'}}
									w={'100%'}
									zIndex={10}
									gap={{ base: '0.5em', sm: '0.5em', md: '1em', lg:'6.5%'}}
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
													color={'blackAlpha.800'}/>
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
													py={{ base: 6, sm: 8, md: 10, lg: 10 }}
													px={{ base: 6, sm: 8, md: 10, lg: 10 }}	>
													<ChakraBox
													variants={aboutItem}>
														<Heading
																														pb={4}
																borderBottomWidth={'2px'}
																borderBottomColor={'blackAlpha.100'}
																color='blackAlpha.800'
																fontWeight={900}
																fontSize={{ base: 30, sm: 35, md: 38, lg: 40 }}>
																BACKGROUND 
														</Heading>
													</ChakraBox>
													<ChakraBox
													variants={itemText}>	
													<Text
														lineHeight={'1.3em'}
														display={'inline-block'}
														textAlign={'justify'}
														pt={8}
														pb={2}
														whiteSpace={'pre-line'}
														color={'gray.700'}
														fontSize={{base: 13, sm: 13.5, md: 14, lg: 14}}>	
															<Image
															justifyContent={'center'}
															position={'relative'}
															boxShadow={'md'}
															ml={10}
															mb={5}
															mt={'7px'}
															float={'right'}
															fit='cover'
															borderRadius={'9px'}
															borderWidth={'5px'}
															borderColor={'black'}
															h={{ base: '12em', sm: '15em', md: '20em', lg: '22em'}}
															w={{ base: '9em', sm: '10em', md: '15em', lg: '15em' }}
															src={'https://i.imgur.com/7R4gnAa.jpg'} />								
																{aboutText.background}
																<Icon
																	pl={'3px'}
																	as={CgSmile}
																	h={'1.3em'}
																	w={'1.3em'}
																	verticalAlign={'bottom'}
																	color={'blackAlpha.800'}/>
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
										gap={{ base: '0.5em', sm: '0.5em', md: '1em', lg: '6.5%' }}
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
													color={'blackAlpha.800'}/>
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
			px={{base: 6, sm: 8, md: 12, lg: 10}}
			pt={{ base: 6, sm: 8, md: 12, lg: 10 }}
			>
			<ChakraBox
			variants={aboutItem}>	
			<Heading
					pb={4}
					borderBottomWidth={'2px'}
					borderBottomColor={'blackAlpha.100'}
					color='blackAlpha.800'
					fontSize={{ base: 30, sm: 35, md: 38, lg: 40 }}>
					SKILLS
			</Heading>
			</ChakraBox>
			<ChakraBox
			variants={itemText}>
           		{skillText()}
			</ChakraBox>
			<ChakraBox
			variants={currentSkills}>
				<Flex
					pb={{ base: 8, sm: 10, md: 14, lg: 14 }}
				justify-content={'space-between'}
				direction='row'
				w={'100%'}>
					{skillList(1)}
					<Spacer/>
					{skillList(2)}
					<Spacer />
					{skillList(3)}
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
					lineHeight={'1.3em'}
					color={'gray.700'}
					fontSize={{ base: 13, sm: 13.5, md: 14, lg: 14 }}>
                    	{aboutText.skillBackground}
                </Text>
                </ChakraBox>
            </Flex>
    )
}

const skillList = (pos) => { 
    return( 
		<Flex>
			<List spacing={8}>
					{pos == 1 && [...Array(6)].map((item, idx) => (
							skillItem(aboutText.skills[idx][0], aboutText.skills[idx][1])))}
					{pos == 2 && [...Array(6)].map((item, idx) => (
						skillItem(aboutText.skills[idx + 6][0], aboutText.skills[idx + 6][1])))}
					{pos == 3 && [...Array(6)].map((item, idx) => (
						skillItem(aboutText.skills[idx + 12][0], aboutText.skills[idx + 12][1])))}
			</List>   
		</Flex>     
    )
}

const skillItem = (name, ic) => { 
	return(
        <ListItem
		key={name}>
            <Flex
			key={name}
			w={'100%'}
			alignItems={'center'}
            direction={'row'}>
                <ListIcon as={ic} color='black.500'/>
                <Text
					textAlign={'center'}
					color={'blackAlpha.800'}
					fontWeight={900}
					fontSize={{ base: 12, sm: 13.5, md: 14, lg: 15 }}>
                    &thinsp;{name}
                </Text>
            </Flex>
        </ListItem>
    )
}

export default About


