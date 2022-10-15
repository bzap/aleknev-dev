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
	Center,
	Icon,
	IconButton,
	createIcon,
	IconProps,
	useColorModeValue,
	useBreakpoint,
	Spacer,
  } from '@chakra-ui/react';
import Head from 'next/head';
import Keyboard from './Keyboard/Keyboard'

const Hero = ({loading}) => {
	console.log(loading.states)
	return (
		<Container
			id={'home'}
			maxW={'100%'}
			px={{ sm: '5%', md: '10%', lg: '10%' }}
			h={'100%'}
			direction={'column'}
			flex={1}
			pt={{ base: '7em', sm: '10em', md: '10em', lg: '10em' }}
			pb={{ base: '7em', sm: '10em', md: '16em', lg: '10em' }}>
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
				<Spacer />
				{keyboard(loading)}
			</Flex>
		</Container>
	)

}
	




const keyboard = (loading) => { 
	const bp = useBreakpoint()
	//console.log(loading, 'lol')
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
				<Keyboard newFov={55}/>
			)}
			{bp == '2xl' && (
				<Keyboard newFov={50}/>
			)}
			{bp == 'sm' && (
				<Keyboard newFov={45}/>
			)}
			{bp == 'md' && (
				<Keyboard newFov={40}/>
			)}
			{bp == 'base' && (
				<Keyboard newFov={45} />
			)}
		</Flex>		
	) 
	
}


const introText = () => { 
	return ( 
		<Flex
		position={'relative'}
		zIndex={1}
		w={'auto'}
		direction={'column'}
		alignItems={'flex-end'}>
			<Heading> 
				<Text 
					as='span'
					color={'blackAlpha.800'}
					fontWeight='700'
					fontSize={{ base: '75%', sm: '90%', md:'80%', lg: '80%', xl: '100%' }}>
					Hey, I'm
				</Text>
				<Text 
					as={'span'} 
					color={'blackAlpha.800'}
					fontWeight='900'
					w={'4em'}
					h={'4em'}
					pl={8}
					fontSize={{ base: '1.7em', sm: '2em', md: '2.5em', lg: '2.6em', xl: '3.5em', '2xl': '4em' }}>  
					Linas
				</Text>    
				<Text 
					as={'span'} 
					color={'black'} 
					fontSize={{ base: '0.7em', sm: '1em', md: '1.1em', lg: '1.1em', xl: '1.1em', '2xl': '1.2em' }}>  
					.
				</Text> 
			</Heading> 
			<Heading>				
				<Text
					as={'span'}
					color={'blackAlpha.900'}
					fontWeight='700'
					fontSize={{ base: '0.5em', sm: '0.6em', md: '0.6em', lg: '0.6em', xl: '0.7em', '2xl': '0.7em' }}>
					A developer based in
				</Text>
				<Text 
					position={'relative'}
					justifyContent={'flex-end'}
					as={'span'} 
					color={'blackAlpha.800'} 
					fontWeight='900'
					fontSize={{ base: '1.1em', sm: '1.3em', md: '1.4em', lg: '1.3em', xl: '1.5em', '2xl': '1.8em' }}>  
					&thinsp;Toronto
				</Text>      
				<Text 
					as={'span'} 
					color={'blackAlpha.800'}
					fontWeight='800'
					fontSize={{ base: '0.7em', sm: '1em', md: '1.1em', lg: '1.1em', xl: '1.1em', '2xl': '1.2em' }}>  
					,
				</Text> 
			</Heading>
			<Heading
			pt={'2'}>
				<Text 
					as={'span'}
					fontWeight={700}
					color={'blackAlpha.800'}
					fontSize={{ base: '0.4em', sm: '0.5em', md: '0.55em', lg: '0.55em', xl: '0.6em', '2xl': '0.62em' }}>
					that's on a pursuit for
				</Text>  
				<Text 
					as={'span'} 
					color={'blackAlpha.800'}
					fontWeight='900'
					fontSize={{ base: '0.9em', sm: '1em', md: '1.1em', lg: '1.1em', xl: '1.1em', '2xl': '1.2em' }}>  
					&thinsp;&thinsp;growth
				</Text>  
				<Text
					as={'span'}
					color={'blackAlpha.800'}
					fontWeight='800'
					fontSize={{ base: '0.7em', sm: '1em', md: '1.1em', lg: '1.1em', xl: '1.1em', '2xl': '1.2em' }}>
					.
				</Text> 
			</Heading> 	
		</Flex>
	)
}

export default Hero