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
import { motion, AnimatePresence, isValidMotionProp } from "framer-motion";
import { IoMdReturnRight } from 'react-icons/io'
import { SiGithub  } from 'react-icons/si';
import { projectContainer, gitGT, gitLT, arrowContainer, gitText, projectSubContainer, gradient, gradient3, gradient4, skillsContainer, item, skillsItem, about } from '../../styles/Variants'
import Head from 'next/head';
import { useState, useEffect } from 'react'
import { pageIndicator } from '../About';
import Title from '../Title'





const ChakraBox = chakra(motion.div, {
		shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
	});

const Projects = () => { 
		const bp = useBreakpoint()
		return (
		<Box
		position={'relative'}
		maxW={'100%'}
		px={{ base: '6.5%', sm: '5%', md: '10%', lg: '10%' }}
		w={'100%'}
		id='1'
		pt={{ base: '4em', sm:'6em', md: '6em', lg: '6em'}}
		pb={{ base: '20em', sm: '20em', md: '22em', lg: '26em' }}>
		<Flex
			justifyContent={'center'}
			direction={'column'}>
				<ChakraBox
						as={motion.div}
						variants={about}
						initial={'hidden'}
						whileInView={'visible'}
						viewport={{ once: true, amount: 0.85 }}>
				<Title
				title={'Projects.'}			
				desc={'These are .'} 
				page={'02'}/>
				</ChakraBox>
				<Flex
				position={'relative'}
				zIndex={10}
				pt={{ base: '2em', sm: '4em', md: '5em', lg: '5em' }}
				direction='column'
				justifyContent={'center'}>
						<ChakraBox
							variants={gradient4}
							initial={'hidden'}
							whileInView={'visible'}
							viewport={{ once: false }}>
						<Flex
							position={'absolute'}
							maxW={'100%'}
							w={{base: '0em', sm: '0em', md: '0em', lg: '90em'}}
							h={{base: '0em', sm: '0em', md: '0em', lg: '90em' }}
							top={{base: '0em', sm: '0em', md: '0em', lg: '5em'}}
							left={{base: '0em', sm: '0em', md: '0em', lg: '40em' }}>
							<Center>
								<Image
									w={'100%'}
									h={'100%'}
									src={'topproj.webp'} />
							</Center>
						</Flex>
						</ChakraBox>
					<ChakraBox 
					variants={projectContainer}>	
							<Flex
								direction={'row'}
								justifyContent={'space-between'}
								flexDirection='flex-start'
								sx={{ 'flexWrap': 'wrap' }}>
								{[...Array(6).keys()].map((item, idx) => (
									<Box
									
									key={idx}
									display={{base: 'flex', sm:'flex', md: 'flex'}}
									w={{sm:'100%', md: '100%', lg: '25em'}}
									
									justifyContent={'center'}>
										{verticalItem((idx * 11).toString()+'%', "0" + (idx + 1).toString())}
									</Box> 
								))}
							</Flex>
					</ChakraBox>
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
			left={'-15%'}>
			<Image
				fit='cover'
				h={{ base: '0em', sm: '0em', md: '0em', lg: '65em' }}
				w={{ base: '0em', sm: '0em', md: '0em', lg: '65em' }}
				src={'centerproj.webp'} />
		</Flex>	
		</ChakraBox>
		<ChakraBox
					as={motion.div}
					initial={'hidden'}
					whileInView={'visible'}
					viewport={{ once: true, amount: 0.8}}
					variants={gitText}>
		{gitButton()}
		</ChakraBox>
	</Box> 
		)
}

const verticalItem = (top, index) => { 
		return ( 
			<ChakraBox
				
				position={'relative'}
				pt={top}
				variants={projectSubContainer}
				initial={'hidden'}
				whileInView={'visible'}
				viewport={{once: false}}>	
					<Flex
					w={'100%'}
				
					position={'relative'}
					direction={{base: 'column', sm: 'column', md: 'row', lg: 'column'}}
					justifyContent='space-between'
					gap={{base:'0em', sm: '0em', md: '6em', lg:'0em'}}>
						<Flex
						position={'relative'}
						direction={'column'}>
							<Heading
							fontWeight={900}
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
							viewport={{once: true, amount:0.8}}
							flex={1}
							position={'relative'}
							h={'30.5em'}
							justifyContent={'center'}
							w={{base: '100%', sm:'24em', md:'28em', lg:'100%'}} 
							bg={'whiteAlpha.600'}
							backdropFilter='auto'
							backdropBlur='5px'
							boxShadow={'md'} 
							borderRadius={'22px'} >
							<Preview index={index.slice(1,2)}/>
						</Flex> 
				</Flex>   
			</ChakraBox>
		)
}

const gitButton = () => { 
		return ( 
				<Flex
						position={'relative'}
						pt={{base: '6em', sm: '6em', md: '7em', lg: '10em'}}
						justifyContent={{base: 'center', sm: 'center', md: 'center', lg: 'flex-end'}}>
				<ChakraBox
					as={motion.div}>
								<Center>
								<ChakraBox
									as={motion.div}>
									<Icon
										w={{ base: '3.3em', sm: '3.8em', md: '5em', lg: '5em' }}
										h={{ base: '3.3em', sm: '3.8em', md: '5em', lg: '5em' }}
										color={'blackAlpha.800'}
										as={IoMdReturnRight}
									/>
								</ChakraBox>   								
									<ChakraBox
									cursor={'pointer'}
									as={motion.div}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
										direction={'row'}>
										<Heading
											fontSize={{ base: 34, sm: 37, md: 40, lg: 45 }}
											fontWeight={'bold'}>
											&nbsp;GITHUB
										</Heading> 
									</ChakraBox>
								</Center> 
				</ChakraBox>
						</Flex>
		)
}

export default Projects

