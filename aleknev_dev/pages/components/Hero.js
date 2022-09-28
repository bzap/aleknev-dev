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
	Icon,
	IconButton,
	createIcon,
	IconProps,
	useColorModeValue,
  } from '@chakra-ui/react';
import Head from 'next/head';



const Hero = () => ( 
	<Container
	id={'home'}
	maxW={'7xl'}
	direction={'column'}
	flex={1}
	
	px='7em'
	pt={{ base: 20, md: '20em' }}
	pb={{ base: 20, md: '40em' }}>
		<Grid
		position={'relative'}
		gap={'12em'}
		templateColumns='repeat(3, 1fr)'>
			<GridItem 
			zIndex={3}
			position={'relative'}
			w={'40em'}
			colSpan={2}>
				<Flex
				direction={'column'}
				alignItems={'flex-end'}
				>
				<Heading>  
					<Text 
						as='span'
						color={'black'}
						fontWeight='600'
						fontSize={{ base: '20', sm: '30', lg: '50' }}>
						Hey, I'm
					</Text>
					<Text 
						as={'span'} 
						color={'black'} 
						fontWeight='bold'
						pl={8}
						fontSize={{ base: '40', sm: '50', lg: '95' }}>  
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
						fontWeight='semibold'
						fontSize={{ base: '20', sm: '30', lg: '27' }}>
						A developer based in
					</Text>
					<Text 
						as={'span'} 
						color={'black'} 
						fontWeight='bold'
						fontSize={{ base: '40', sm: '50', lg: '50' }}>  
						&thinsp;Toronto
					</Text>      
					<Text 
						as={'span'} 
						color={'black'} 
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
						that's on the pursuit for
					</Text>  
					<Text 
						as={'span'} 
						color={'black'} 
						fontWeight='bold'
						fontSize={{ base: '40', sm: '50', lg: '32' }}>  
						&thinsp; growth.
					</Text>      
				</Heading> 	
				</Flex>

			</GridItem>
			<GridItem 
			
			w={'30em'}
			colSpan={1}>
			<Flex	
				flex={1}
				justify={{sm: 'center', md: 'center', lg: 'flex-end'}}
				align={'center'}
				position={'relative'}>
				<Box
					bg='white'
					transform={'rotate(-30deg)'}
					position={'relative'}
					height={'300px'}
					rounded={'50em'}
					boxShadow={'2xl'}
					width={'100%'}
					overflow={'hidden'}
					>
				</Box>
			</Flex>				
			</GridItem>
		</Grid>
	</Container>

  );

export default Hero