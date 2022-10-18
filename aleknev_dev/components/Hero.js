import {
	Container,
	Stack,
	Flex,
	Box,
	Heading,
	Text,
	Button,
	Image,
	Grid,
	GridItem,
	chakra,
	Center,
	Icon,
	IconButton,
	createIcon,
	IconProps,
	useColorModeValue,
	useBreakpoint,
	shouldForwardProp,	
	Spacer,
  } from '@chakra-ui/react';
import Head from 'next/head';
import Keyboard from './Keyboard/Keyboard'
import { AnimatePresence, motion, useScroll, isValidMotionProp } from 'framer-motion'
import { background, heroContainer, heroDesc, heroTitle, heroKeyboard, scrollArrows } from '../styles/Variants';
import ScrollIndicator from './ScrollIndicator';
import Wave from './Variants/Wave';

const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Hero = ({loading}) => {
	return (
				<Container
					id={'home'}
					maxW={'100%'}
					px={{ sm: '5%', md: '10%', lg: '10%' }}
					h={'100%'}
					direction={'column'}
					flex={1}
					pt={{ base: '7em', sm: '10em', md: '10em', lg: '4em' }}
					pb={{ base: '7em', sm: '10em', md: '16em', lg: '16em' }}>
						<ChakraBox
							as={motion.div}
							variants={heroContainer}
							initial={'hidden'}
							whileInView={'visible'}
							viewport={{ once: true }}>
								<Flex
									h={'40em'}
									w={'100%'}
									position={'relative'}
									justifyContent={'space-between'}
									direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}>
									<Flex
										justifyContent={'center'}
										w={{ base: '100%', sm: '100%', md: '100%', lg: '65%' }}
										position={'relative'}
										alignItems={'center'}>
											{introText()}				
									</Flex>
									<Spacer/>
									{keyboard(loading)}
								</Flex>
						</ChakraBox>
				<ChakraBox
					h={{ base: '5em', sm: '8em', md: '8em', lg: '15em' }}
					position={'relative'}
					as={motion.div}
					variants={scrollArrows}
					initial={'hidden'}
					whileInView={'visible'}>
					<Flex
						justifyContent={'center'}
						w={'100%'}>
						<ScrollIndicator />
					</Flex>
				</ChakraBox>
				</Container>
	)
}
	
const keyboard = (loading) => { 
	const bp = useBreakpoint()
	return (
		<Flex
		w={{base: '100%', sm: '100%', md: '100%', lg: '35%'}}
		h={'100%'}
		zIndex={0}
		justifyContent={'flex-end'}>	
			{bp == 'lg' && (
				<Keyboard props={{newFov: 70, outerLoading: loading}}/>
			)}
			{bp == 'xl' && (
				<Keyboard props={{ newFov: 55, outerLoading: loading }}/>
			)}
			{bp == '2xl' && (
				<Keyboard props={{ newFov: 50, outerLoading: loading }} />
			)}
			{bp == 'sm' && (
				<Keyboard props={{ newFov: 45, outerLoading: loading }} />
			)}
			{bp == 'md' && (
				<Keyboard props={{ newFov: 40, outerLoading: loading }} />
			)}
			{bp == 'base' && (
				<Keyboard props={{ newFov: 45, outerLoading: loading }} />
			)}
		</Flex>		
	) 
	
}


const introText = () => { 
	return ( 

		<Flex
		position={'relative'}
		zIndex={1}
		direction={'column'}
		>
			<Flex>	
				<ChakraBox
					as={motion.div}
					variants={heroDesc}> 	
					
				<Text 
						as={'span'}
						position={'relative'}
						color={'blackAlpha.800'}
						fontWeight={800}
						textRend
						fontSize={'5.7em'}>
						<Wave text={'Hey! I\'m Linas.'} />
				</Text>
				</ChakraBox>
			</Flex>
			<Flex>	
				<ChakraBox
					as={motion.div}
					variants={heroDesc}> 	
					<Text
						as={'span'}
						position={'relative'}
						color={'blackAlpha.800'}
						fontWeight='700'
						fontSize={'2em'}>
						I'm a developer based in Toronto, that's on a pursuit for growth.
					</Text>
				</ChakraBox>
			</Flex>
		</Flex>
		
	)
}



export default Hero