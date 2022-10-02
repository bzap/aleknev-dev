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
import { motion, isValidMotionProp, useTransform, useMotionValue } from "framer-motion";
import {aboutBar, projBar, heroBar, contactBar, aboutBG, projBG, contactBG, heroBG } from './Variants/Variants'


const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });


const Stripesv2 = ({pos}) => {
	return ( 
		<ChakraBox
		maxW={'container'}
		w={'100vw'}
		h={'100vh'}
		left={0}
		variants={pos.heroView ? heroBG : pos.aboutView ? aboutBG : pos.projView ? projBG : contactBG}
		animate={'active'}
		top={0}
		transition={{duration:2}}
		bg={'#edf2f8'}
		position={'fixed'}
		overflow={'hidden'}>
			<Center>
				{entireGrid(pos)}
			</Center>
		</ChakraBox>

	)
}

const bar = (barKey, pos) => { 
	return ( 
		<ChakraBox>
		{pos.aboutView && 
		(
			<ChakraBox	
			variants={aboutBar}	
			key={barKey}
			animate={'active'}
			h={'20px'}
			w={'20em'}
			borderRadius={'18px'}
			bg='#e8edf3'/>
		)}
		{pos.heroView && 
		(
			<ChakraBox	
			variants={heroBar}	
			key={barKey}
			animate={'active'}
			h={'20px'}
			w={'20em'}
			borderRadius={'18px'}
			bg='#e8edf3'/>
		)}
		{pos.projView && 
		(
			<ChakraBox	
			variants={projBar}	
			key={barKey}
			animate={'active'}
			h={'20px'}
			w={'20em'}
			borderRadius={'18px'}
			bg='#e8edf3'/>
		)}
		{pos.contactView && 
		(
			<ChakraBox	
			variants={contactBar}	
			key={barKey}
			animate={'active'}
			h={'20px'}
			w={'20em'}
			borderRadius={'18px'}
			bg='#e8edf3'/>
		)}
		</ChakraBox>
		
	) 
}

const entireGrid = (pos) => { 
	return ( 
		<Grid
		transform={'rotate(145deg)'}
		gap={'15em'}
		templateRows='repeat(auto-fill, 1fr)'>
			{reverseGrid(pos)}
			{forwardGrid(pos)}
			{reverseGrid(pos)}
			{forwardGrid(pos)}
			{reverseGrid(pos)}
			{forwardGrid(pos)}
			{reverseGrid(pos)}
			{forwardGrid(pos)}
			{reverseGrid(pos)}
			{forwardGrid(pos)}
			{reverseGrid(pos)}
			{forwardGrid(pos)}
			{reverseGrid(pos)}
			{forwardGrid(pos)}
			{reverseGrid(pos)}
			{forwardGrid(pos)}
			{reverseGrid(pos)}
			{forwardGrid(pos)}
		</Grid>
	)

}


const reverseGrid = (pos) => { 
	return ( 
			<Stack>
				<Flex
				width={'200%'}
				overflow={'hidden'}
				left={0}>
					{reverseLine(pos)}
					{reverseLine(pos)}
				</Flex>
			</Stack>
	)
}

const reverseLine = (pos) => {
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
						{lineOfBars(pos)}
		</ChakraBox>
	)
}

const lineOfBars = (pos) => { 
	return (
		<Flex 
		justify={'space-around'}>
			{[...Array(10)].map((item, idx) => (
				bar(idx, pos)
			))}
		</Flex> 
	)
}

const forwardGrid = (pos) => { 
	return ( 
			<Stack>
				<Flex
				width={'200%'}
				overflow={'hidden'}
				left={0}>
					{forwardLine(pos)}
					{forwardLine(pos)}
				</Flex>
			</Stack>
	)
}


const forwardLine = (pos) => {
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
					{lineOfBars(pos)}
		</ChakraBox>
	)
}






export default Stripesv2