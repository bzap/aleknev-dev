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
  } from '@chakra-ui/react';
import Head from 'next/head';
import Keyboard from './Keyboard/Keyboard'

const Hero = () => ( 
	<Container
	id={'home'}
	maxW={'7xl'}
	direction={'column'}
	flex={1}
	pt={{ base: 20, md: '20em' }}
	pb={{ base: 20, md: '40em' }}>
		<Flex
		h={'40em'}
		w={'80em'}
		position={'relative'}
		gap={'2em'}
		direction={'row'}>
			<Flex
			w={'auto'}
			position={'relative'}
			alignItems={'flex-start'}>
				{introText()}
			</Flex>
			{animation()}
		</Flex>
	</Container>
)


const animation = () => { 
	return (
		<Flex
		w={'70em'}
		h={'60em'}
		position={'absolute'}
		right={'-20%'}
		top={'-50%'}
		zIndex={0}
		justifyContent={'center'}>
			<Keyboard/>
		</Flex>		
	) 
}


const introText = () => { 
	return ( 
		<Flex
		position={'relative'}
		zIndex={1}
		w={'100%'}
		direction={'column'}
		alignItems={'flex-end'}>
			<Heading>  
				<Text 
					as='span'
					color={'black'}
					fontWeight='700'
					fontSize={{ base: '20', sm: '30', lg: '50' }}>
					Hey, I'm
				</Text>
				<Text 
					as={'span'} 
					color={'black'} 
					fontWeight='900'
					pl={8}
					fontSize={{ base: '40', sm: '50', lg: '4em' }}>  
					Linas
				</Text>    
				<Text 
					as={'span'} 
					color={'black'} 
					fontSize={{ base: '20', sm: '30', lg: '50' }}>  
					.
				</Text> 
			</Heading> 
			<Heading>				
				<Text
					as={'span'}
					color={'gray.600'}
					fontWeight='700'
					fontSize={{ base: '20', sm: '30', lg: '27' }}>
					A developer based in
				</Text>
				<Text 
					as={'span'} 
					color={'gray.800'} 
					fontWeight='900'
					fontSize={{ base: '40', sm: '50', lg: '50' }}>  
					&thinsp;Toronto
				</Text>      
				<Text 
					as={'span'} 
					color={'black'} 
					fontWeight='800'
					fontSize={{ base: '20', sm: '30', lg: '35' }}>  
					,
				</Text> 
			</Heading>
			<Heading
			pt={'2'}>
				<Text 
					as={'span'}
					fontWeight={'semibold'}
					color={'gray.500'}
					fontSize={{ base: '20', sm: '30', lg: '22' }}>
					that's on a pursuit for
				</Text>  
				<Text 
					as={'span'} 
					color={'gray.600'} 
					fontWeight='900'
					fontSize={{ base: '40', sm: '50', lg: '32' }}>  
					&thinsp;&thinsp;growth.
				</Text>      
			</Heading> 	
		</Flex>
	)
}

export default Hero