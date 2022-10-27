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
		<>
				<Container
					id={'home'}
					maxW={'100%'}
					px={{ sm: '5%', md: '10%', lg: '10%' }}
					h={'90vh'}
					direction={'column'}
					flex={1}
					pt={'7em'}
					pb={{ base: '7em', sm: '10em', md: '16em', lg: '10em', xl: '16em' }}>
						<Flex
						direction={'column'}>
							<ChakraBox	
								h={'40em'}
								as={motion.div}
								variants={heroContainer}
								display={'flex'}
								alignItems={{ base: null, sm: null, md: 'center', lg: 'center' }}
								justifyContent={'center'}
								initial={'hidden'}
								whileInView={'visible'}
								viewport={{ once: true }}>
								<Flex
									h={'100%'}
									w={'100%'}
									position={'relative'}
									justifyContent={'space-between'}
									direction={{ base: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row', '2xl': 'row' }}>
									<Flex
										justifyContent={'center'}
										w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', 'xl': '65%', '2xl': '65%' }}
										position={'relative'}
										alignItems={'center'}>
										{introText()}
									</Flex>
									<Spacer />
									{keyboard(loading)}
								</Flex>
							</ChakraBox>							
						</Flex>
				</Container>
				<ChakraBox
					position={'relative'}
					as={motion.div}
					variants={scrollArrows}
					initial={'hidden'}
					whileInView={'visible'}>
					<Flex
						justifyContent={'center'}>
						<ScrollIndicator />
					</Flex>
				</ChakraBox>
			</>
	)
}
	
const keyboard = (loading) => { 
	const bp = useBreakpoint()
	return (
		<Flex
		w={{base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '35%', '2xl': '35%'}}
		h={'100%'}
		zIndex={0}
		justifyContent={'flex-end'}>	
			<Keyboard props={{ newFov: 30, outerLoading: loading }} />
		</Flex>		
	) 
	
}


const introText = () => { 
	return ( 
		<Flex
		position={'relative'}
		zIndex={1}
		direction={'column'}
		justifyContent={'center'}
		w={'100%'}>
			<Flex
			position={'relative'}
			justifyContent={{base: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'flex-start'}}
			>	
				<ChakraBox
					as={motion.div}
					variants={heroDesc}
					> 		
				<Heading
						as={'span'}
						position={'relative'}
						color={'blackAlpha.800'}
						fontSize={{ base: '9vw', sm: '9vw', md: '8vw', lg: '7vw', xl: '6.5vw', '2xl': '7em' }}>
						<Wave text={'Hey! I\'m Linas.'} />
				</Heading>
				</ChakraBox>
			</Flex>
			<Flex
			position={'relative'}
			justifyContent={{base: 'center', sm: 'center', md: 'center', lg: 'center', xl: 'flex-start'}}	
			textAlign={{base: 'center', sm: 'center', md: 'center', lg: 'start'}}>
				<ChakraBox
					px={{base: 0, sm: 0, md: 6, lg: 0}}
					as={motion.div}
					variants={heroDesc}> 	
					<Text
					
						as={'span'}
						position={'relative'}
						textAlign={'center'}
						color={'blackAlpha.700'}
						fontSize={{ base: '1em', sm: '1.2em', md: '1.3em', lg: '1.3em', xl: '1.5em', '2xl': '1.8em' }}>
						I'm a developer based in Toronto, that's on a pursuit for growth.
					</Text>
				</ChakraBox>
			</Flex>
		</Flex>
		
	)
}



export default Hero