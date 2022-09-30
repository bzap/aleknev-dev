import {
	Container,
	Stack,
	chakra,
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
	Center,
	useColorModeValue,
	shouldForwardProp
  } from '@chakra-ui/react';
import Head from 'next/head';
import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";


const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


const Stripesv2 = () => ( 
	<Container
	maxW={'container'}
	left={0}
	position={'fixed'}
	zIndex={200}
	bg='blue.100'
	overflow={'hidden'}>
		<Grid
		
		gap={'15em'}
		templateRows='repeat(18, 1fr)'>
			{reverseGrid()}
			{forwardGrid()}
			{reverseGrid()}
			{forwardGrid()}
			{reverseGrid()}
			{forwardGrid()}
			{reverseGrid()}
			{forwardGrid()}

			{reverseGrid()}
			{forwardGrid()}
			{reverseGrid()}
			{forwardGrid()}
			{reverseGrid()}
			{forwardGrid()}
			{reverseGrid()}
			{forwardGrid()}

			{reverseGrid()}
			{forwardGrid()}
		</Grid>
	</Container>
  )

const bar = () => { 
	return ( 
		<Box
		h={'20px'}
		w={'20em'}
		borderRadius={'18px'}
		bg='#e8edf3'/>
	) 
}

const reverseGrid = () => { 
	return ( 
			<Stack>
				<Flex
				width={'200%'}
				overflow={'hidden'}
				left={0}>
					{reverseLine()}
					{reverseLine()}
				</Flex>
			</Stack>
	)
}


const reverseLine = () => {
	return ( 
		<ChakraBox
		w={'50%'}
		position={'relative'}
		left={0}
		as={motion.div}
		animate={{translateX:['0%','-100%']}}
		transition={{repeat: Infinity, 
					repeatType: 'loop', 
					duration:35,
					ease:'linear',
					
					}}>
						{lineOfBars()}
		</ChakraBox>
	)
}


const lineOfBars = () => { 
	return (
		<Flex 
		justify={'space-around'}>
			{[...Array(10)].map((item, idx) => (
				bar()
			))}
		</Flex> 
	)
}


const forwardGrid = () => { 
	return ( 
			<Stack
			>
				<Flex
				width={'200%'}
				overflow={'hidden'}
				left={0}>
					{forwardLine()}
					{forwardLine()}
				</Flex>
			</Stack>
	)
}


const forwardLine = () => {
	return ( 
		<ChakraBox
		w={'100%'}
		position={'relative'}
		left={0}
		as={motion.div}
		animate={{translateX:['-100%','0%']}}
		transition={{repeat: Infinity, 
					repeatType: 'loop', 
					duration:35,
					ease:'linear'
					}}>
					{lineOfBars()}
		</ChakraBox>
	)
}

const rgridOfLines = () => { 
	return ( 
		<Grid   
		
		justifyContent={'center'}
		alignItems='center'
		templateColumns='repeat(10, 1fr)' 
		gap={'15em'}
		>
			<GridItem>
				{rstripe()}
			</GridItem>
			<GridItem>
				{rstripe()}
			</GridItem>
			<GridItem>
				{rstripe()}
			</GridItem>
			<GridItem>
				{rstripe()}
			</GridItem>
			<GridItem>
				{rstripe()}
			</GridItem>
			<GridItem>
				{rstripe()}
			</GridItem>
			<GridItem>
				{rstripe()}
			</GridItem>
		</Grid>
	)
  }

const gridOfLines = () => { 
	return ( 
		<Grid   
		
		justifyContent={'center'}
		alignItems='center'
		templateColumns='repeat(10, 1fr)' 
		gap={'10em'}
		w={'3000px'}>
			<GridItem>
				{stripe()}
			</GridItem>
			<GridItem>
				{stripe()}
			</GridItem>
			<GridItem>
				{stripe()}
			</GridItem>
			<GridItem>
				{stripe()}
			</GridItem>
			<GridItem>
				{stripe()}
			</GridItem>
			<GridItem>
				{stripe()}
			</GridItem>
			<GridItem>
				{stripe()}
			</GridItem>
		</Grid>

	)
  }


  const stripe = () => { 
	return (
	<ChakraBox
	as={motion.div}
	borderRadius={'18px'}
	animate={{translateX:['-100%','100%']}}
	transition={{repeat: Infinity, 
				repeatType: 'loop', 
				duration:5,
				ease:'linear'
				}}
	h={'20px'}
	minW={'300px'}
	
	overflow={'hidden'}
	display={'flex'}
	bg='#e8edf3'>

	</ChakraBox>
	)
}

const rstripe = () => { 
	return (
	<ChakraBox
	as={motion.div}
	borderRadius={'18px'}
	animate={{translateX:['100%','-100%']}}
	transition={{repeat: Infinity, 
				repeatType: 'loop', 
				duration:5,
				ease:'linear'
				}}
	h={'20px'}
	minW={'300px'}
	
	overflow={'hidden'}
	display={'flex'}
	bg='#e8edf3'>

	</ChakraBox>
	)
}


// bg='#e8edf3'
export default Stripesv2