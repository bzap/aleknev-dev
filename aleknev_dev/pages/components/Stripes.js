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


const Stripes = () => ( 
	<Container
	transform={'rotate(145deg)'}
	maxW={'container'}
	margin='auto' 
	minH='100vh' 
	position={'fixed'}
	zIndex={0}>
		<Grid direction={'column'} gap={'15em'}>
		{gridOfLines()}          
		{rgridOfLines()}  
		{gridOfLines()}   
		{rgridOfLines()}
		{gridOfLines()}  
		{rgridOfLines()} 
		{gridOfLines()} 
		{rgridOfLines()} 
		{gridOfLines()} 
		</Grid>   
	
	</Container>

  );
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
				repeatType: 'reverse', 
				duration:5,
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
				repeatType: 'reverse', 
				duration:5,
				delay:0.5
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
export default Stripes