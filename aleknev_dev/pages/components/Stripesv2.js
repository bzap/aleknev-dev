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
import { motion, isValidMotionProp } from "framer-motion";


const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


const Stripesv2 = () => ( 
	<Center
	maxW={'container'}
	w={'100vw'}
	h={'100vh'}
	left={0}
	position={'fixed'}
	overflow={'hidden'}>
		<Grid
		transform={'rotate(145deg)'}
		gap={'15em'}
		templateRows='repeat(auto-fill, 1fr)'>
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
	</Center>
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
					ease:'linear'
					}}>
						{lineOfBars()}
		</ChakraBox>
	)
}

const lineOfBars = () => { 
	return (
		<Flex 
		justify={'space-around'}
		>
			{[...Array(10)].map((item, idx) => (
				bar()
			))}
		</Flex> 
	)
}

const forwardGrid = () => { 
	return ( 
			<Stack>
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
		w={'50%'}
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

// bg='#e8edf3'
export default Stripesv2