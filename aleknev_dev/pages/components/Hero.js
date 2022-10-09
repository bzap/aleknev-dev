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
    maxW={'100%'} 
    px={{sm: '5%', md: '10%', lg:'10%'}}
	h={'100%'}
	direction={'column'}
	flex={1}
	pt={{ base: 20, md: '10em' }}
	pb={{ base: 20, md: '16em' }}>
		<Flex
			position={'absolute'}
			maxW={'full'}
			w={'50%'}
			top={'-3%'}
			left={'0%'}>
			<Image
				filter={'grayscale(40%)'}
				fit='cover'
				h={'100%'}
				w={'100%'}
				src={'heroblob23big.png'} />
		</Flex>
		<Flex
		bg='blue.200'
		h={'40em'}
		w={'100%'}
		position={'relative'}
		direction={'row'}>
			<Flex
			justifyContent={'center'}
			w={'65%'}
			position={'relative'}
			alignItems={'center '}>
				{introText()}
			</Flex>
			{keyboard()}
		</Flex>
	</Container>
)


const keyboard = () => { 
	return (
		<Flex
		bg='black'
		w={'35%'}
		h={'100%'}
		zIndex={0}
		justifyContent={'flex-end'}>
			
		</Flex>		
	) 
	
}


const introText = () => { 
	return ( 
		<Flex
		bg='green.100'
		position={'relative'}
		zIndex={1}
		w={'100%'}
		direction={'column'}
		alignItems={'flex-end'}>
			<Heading> 
				<Text 
				
					as='span'
					color={'blackAlpha.800'}
					fontWeight='700'
					fontSize={{ base: '20', sm: '30', lg: '100%' }}>
					Hey, I'm
				</Text>
				<Text 
					as={'span'} 
					color={'blackAlpha.800'}
					fontWeight='900'
					w={'4em'}
					h={'4em'}
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
					color={'blackAlpha.800'}
					fontWeight='700'
					fontSize={{ base: '20', sm: '30', lg: '27' }}>
					A developer based in
				</Text>
				<Text 
					as={'span'} 
					color={'blackAlpha.800'} 
					fontWeight='900'
					fontSize={{ base: '40', sm: '50', lg: '50' }}>  
					&thinsp;Toronto
				</Text>      
				<Text 
					as={'span'} 
					color={'blackAlpha.800'}
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
					color={'blackAlpha.800'}
					fontSize={{ base: '20', sm: '30', lg: '22' }}>
					that's on a pursuit for
				</Text>  
				<Text 
					as={'span'} 
					color={'blackAlpha.800'}
					fontWeight='900'
					fontSize={{ base: '40', sm: '50', lg: '32' }}>  
					&thinsp;&thinsp;growth.
				</Text>      
			</Heading> 	
		</Flex>
	)
}

export default Hero