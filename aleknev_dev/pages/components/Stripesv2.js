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
	h={'100vh'}
	position={'relative'}
	zIndex={200}
	pt={'15em'}
	bg='red'
	overflow={'hidden'}
	p={16}>
		<ChakraBox>
		<Grid
		templateRows='repeat(2, 1fr)'
		gap={'10em'}>
			<GridItem>
			<Flex
			w={'200%'}
			left={0}>
			{reverseLine()}
			{reverseLine()}
			</Flex>
			</GridItem>

			<GridItem>
			<Flex
			w={'200%'}
			left={0}>
			{reverseLine()}
			{reverseLine()}
			</Flex>
			</GridItem>


		</Grid>

		</ChakraBox>
	</Container>

  );

const bar = () => { 
	return ( 
		<Box
		h={'20px'}
		w={'25em'}
		borderRadius={'18px'}
		bg='#e8edf3'/>
	) 
}

const backgroundGrid = () => { 
	return ( 
		<Grid
		templateRows='repeat(5, 1fr)'
		gap={'5em'}>
			<GridItem>
			<Flex
			w={'200%'}
			left={0}>
			{reverseLine()}
			{reverseLine()}
			</Flex>
			</GridItem>

			<GridItem>
			<Flex
			w={'200%'}
			left={0}>
			{reverseLine()}
			{reverseLine()}
			</Flex>
			</GridItem>
			<GridItem>
			<Flex
			w={'200%'}
			left={0}>
			{reverseLine()}
			{reverseLine()}
			</Flex>
			</GridItem>


		</Grid>
	)


}

const forwardLine = () => {
	return ( 
		<ChakraBox
		w={'200%'}
		position={'relative'}
		left={0}
		as={motion.div}
		animate={{translateX:['-100%','0']}}
		transition={{repeat: Infinity, 
					repeatType: 'loop', 
					duration:2,
					ease:'linear'
					}}>
					{lineOfBars()}

		</ChakraBox>
	)
}

const reverseLine = () => {
	return ( 
		<ChakraBox
		w={'200%'}
		position={'relative'}
		left={0}
		as={motion.div}
		animate={{translateX:['0%','-100%']}}
		transition={{repeat: Infinity, 
					repeatType: 'loop', 
					duration:15,
					ease:'linear'
					}}>
					{lineOfBars()}
		</ChakraBox>
	)
}


const lineOfBars = () => { 
	return (
		<Flex 
		pt={'10em'}
		justify={'space-around'}>
				{[...Array(5)].map((item, idx) => (
						bar()
				))}
		</Flex> 
	)
}


const rgridOfLines = () => { 
	return ( 
		<Grid   
		
		justifyContent={'center'}
		alignItems='center'
		templateColumns='repeat(10, 1fr)' 
		gap={'15em'}
		w={'3000px'}>
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