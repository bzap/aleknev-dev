import {
		Container,
		Stack,
		Flex,
		Box,
		Heading,
		Text,
		Button,
		Image,
		Spacer,
		Icon,
		IconButton,
		createIcon,
		IconProps,
		useColorModeValue,
		Grid, 
		GridItem,
		Wrap, 
		WrapItem,
		Center,
		ScaleFade,
		useBreakpoint,
		useBreakpointValue,
		transition, chakra, 
		shouldForwardProp
	} from '@chakra-ui/react';
import Preview from './Preview'
import { motion, isValidMotionProp } from "framer-motion";
import { SiGithub  } from 'react-icons/si';
import { projectContainer, projectSubContainer, gradient, gradient3, gradient4, skillsContainer, item, skillsItem, about } from '../../styles/Variants'
import Head from 'next/head';
import { useState, useEffect } from 'react'
import { pageIndicator } from '../About';
import Title from '../Title'





const ChakraBox = chakra(motion.div, {
		shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
	});

const Projects = () => { 
		return (
		<Box
		position={'relative'}
		maxW={'100%'}
		px={{ base: '3%', sm: '5%', md: '10%', lg: '10%' }}
		w={'100%'}
		id='0'
		pt='10em'
		pb='40em'>
		<Flex
			justifyContent={'center'}
			direction={'column'}>
				<ChakraBox
						as={motion.div}
						variants={about}
						initial={'hidden'}
						whileInView={'visible'}
						viewport={{ once: true }}>
				<Title
				title={'Projects.'}			
				desc={'"fear != fate", a simple but meaningful mantra that I try to live by.I often feel that irrational fear holds us back.'} 
				page={'02'}/>
				</ChakraBox>
				<Flex
				position={'relative'}
				zIndex={10}
				pt={{ base: '2em', sm: '4em', md: '7em', lg: '7em' }}
				direction='column'
				
				justifyContent={'center'}>
						<ChakraBox
							variants={gradient4}
							initial={'hidden'}
							whileInView={'visible'}
							viewport={{ once: true }}>
						<Flex
							position={'absolute'}
							maxW={'100%'}
							w={{base: '0em', sm: '90em', md: '90em', lg: '100em'}}
							h={{base: '0em', sm: '100em', md: '100em', lg: '100em' }}
							top={{base: '0em', sm: '40em', md: '10em', lg: '-5em'}}
							left={{base: '0em', sm: '10em', md: '20em', lg: '20em' }}>
							<Center>
								<Image
									filter={'grayscale(40%)'}
									w={'100%'}
									h={'100%'}
									src={'newblob.png'} />
							</Center>
						</Flex>
						</ChakraBox>
					<ChakraBox 
					variants={projectContainer}
					initial={'hidden'}
					whileInView={'visible'} 
					viewport={{once: false}}>	
							<Flex
								direction={'row'}
								justifyContent={'space-between'}
								flexDirection='flex-start'
								sx={{ 'flexWrap': 'wrap' }}>
								{[...Array(6).keys()].map((item, idx) => (
									<Box
									key={idx}
									display={{sm:'flex', md:null}}
									w={{sm:'100%', md: '100%', lg: '24em'}}
									justifyContent={'center'}>
										{verticalItem((idx * 5).toString()+'em', "0" + (idx + 1).toString())}
									</Box> 
								))}
							</Flex>
						</ChakraBox>
						{gitButton()}
				</Flex>
				</Flex>
		<ChakraBox
			variants={gradient3}
			initial={'hidden'}
			whileInView={'visible'}
			viewport={{ once: true }}>
		<Flex
			position={'absolute'}
			zIndex={0}
			w={'100%'}
			top={{base: '0em', sm: '55%', md: '50%', lg: '45%'}}
			left={'-20%'}>
			<Image
				filter={'grayscale(40%)'}
				fit='cover'
				h={{ base: '0em', sm: '50em', md: '70em', lg: '50%' }}
				w={{ base: '0em', sm: '100%', md: '85em', lg: '90%' }}
				src={'centerproj.png'} />
		</Flex>	
		</ChakraBox>
	</Box> 
		)
}

const verticalItem = (top, index) => { 
		return ( 
			<ChakraBox
				variants={projectSubContainer}>
					<Flex
					w={'100%'}
					direction={{base: 'column', sm: 'column', md: 'row', lg: 'column'}}
					justifyContent='space-between'
					gap={{base:'0em', sm: '0em', md: '2em', lg:'0em'}}>
						<Flex
						position={'relative'}
						top={top}
						direction={'column'}>
							<Heading
							fontWeight={800}
							fontSize={{base: 34, sm: 37, md: 40, lg: 45}}>
								{index}
							</Heading>
							<Heading
							position={'relative'}
							top={-7}
							pl={1}>
								&#x5f;
							</Heading>
						</Flex>
						<Flex
							as={motion.div}
							whileHover={{ scale: 1.025 }}
							viewport={{once:true, amount:0.8}}
							flex={1}
							position={'relative'}
							h={'30.5em'}
							justifyContent={'center'}
							gap
							w={{base: '100%', sm:'24em', md:'28em', lg:'24em'}} 
							top={top}
							bg={'whiteAlpha.600'}
							backdropFilter='auto'
							backdropBlur='5px'
							boxShadow={'md'} 
							borderRadius={'22px'} >
							<Preview proj={index}/>
						</Flex> 
				</Flex>   
				</ChakraBox> 
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
						</Flex>
				</GridItem>
		)
}

export default Projects

