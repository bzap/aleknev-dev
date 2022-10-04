import {
	Divider,
	Container,
	Stack,
	Flex,
	Box,
	Heading,
	Text,
	chakra,
	Button,
	Image,
	Icon,
	IconButton,
	createIcon,
	IconProps,
	useColorModeValue,
	Grid, 
	GridItem,
	VStack,
	AspectRatio,
	HStack,
	Center,
	List, 
	ListIcon,
	ListItem,
	shouldForwardProp
  } from '@chakra-ui/react';
import { SiReact, SiChakraui, SiJavascript, SiPython } from 'react-icons/si';
import { motion, useScroll, useTransform, isValidMotionProp } from "framer-motion";
import Parallax from './layouts/Parallax';
import { skillsContainer, subContainer, item, skillsItem, container } from './Variants/Variants';


const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const About = () => {
	//const { scrollYProgress } = useScroll() 
	//const y1 = useTransform(scrollYProgress, [0, 300], [0, 200]);
	//const y2 = useTransform(scrollYProgress, [0, 300], [0, -100]);
  
	return( 

	


	
	<Container 
		position={'relative'}
		maxW={'9xl'} 
		px={'10em'}
		w={'100%'} 
		id='0' 
		pt='10em'
		pb='40em'>
		<Flex
		direction={'column'}
		gap={'7em'}>
			<Flex
				pb={'5em'}
				gap={2}	
				direction='column'>
						<Text
						w={'30em'}
						fontSize={'1.5em'}
						color={'blackAlpha.600'}>
							This is sample text talking about my projects. That's just the way it goes sometimes. It is what it is.
						</Text>
			</Flex>
			<ChakraBox
			variants={container}
			initial={'hidden'}
			whileInView={'visible'}
			viewport={{once: true}}>
			
							<Heading
							as={'p'}
							
							writing-mode={'tb-rl'}
							sx={{ 'writing-mode': 'vertical-lr',transform:'scale(-1)'  }}
							fontSize={'7em'}> 
								---- About
							</Heading>
					
				<Grid
				templateColumns={'repeat(5, 1fr)'}
				templateRows={'repeat(2, 1fr)'}
				justifyContent={'center'}
				h='200px'
				gap={'4'}>


						<GridItem
						colSpan={2}
						rowSpan={1}
						bg='red.100'>
							<ChakraBox
							zIndex={1}
							variants={subContainer}>
									{backgroundInfo()}
							</ChakraBox>
						</GridItem>


						<GridItem
						bg='blue'
						colspan={2}
						rowSpan={1}>
						<Flex
						bg='blue'
							as={motion.div}
							whileHover={{ scale: 1.025 }}
							flex={1}
							position={'relative'}
>
							<Flex  
								overflow={'hidden'}>
							<Image
								borderRadius={'12px'}
								boxShadow={'md'}
								borderWidth={'5em'}


								src={'https://i.imgur.com/7R4gnAa.jpg'}/>
							</Flex>
						</Flex>
						</GridItem>




						<GridItem
						rowSpan={2}>
							<ChakraBox
							variants={subContainer}>

										{selfPortrait()}
							</ChakraBox>
						</GridItem>



				</Grid>



				
			</ChakraBox>



			<ChakraBox
			variants={skillsContainer}
			initial={'hidden'}
			whileInView={'visible'}
			viewport={{once: true}}>
				<Flex
				direction={'row'}
				gap={'6em'}
				justifyContent={'center'}>
					<Grid
						w={'40%'}
						templateColumns='repeat(2, 1fr)'
						gap={'3em'}>

						<ChakraBox
						variants={subContainer}>
							<Parallax
							offset={180}> 
								{pictureFrame('15%', '', '0%', '', 'https://i.imgur.com/7R4gnAa.jpg', 8, 'full', '20em')}
							</Parallax>
						</ChakraBox>
					</Grid> 
					<ChakraBox
					variants={subContainer}>
						<Parallax offset={120}>
							<Flex>
								{skillsInfo()}
							</Flex>
						</Parallax>
						</ChakraBox>
				</Flex>
			</ChakraBox>
		</Flex>
	</Container>
	
)}

const backgroundInfo = () => { 
	return ( 
		<Flex 
		as={motion.div}
		whileHover={{ scale: 1.025 }}
		justifyContent='center'>
			{placeholderText()}
		</Flex>
	)
}

const selfPortrait = () => { 
	return ( 
			<Flex
			flex={1}
			w={'25em'}>
					{pictureFrame('0%', '0%', '0%', '0%', 'https://i.imgur.com/7R4gnAa.jpg', 8, 'full', 'full')}
			</Flex>
	)
}

const skillsInfo = () => { 
	return (
		<GridItem 
			as={motion.div}
			whileHover={{ scale: 1.025 }}
			colSpan={2}
			h={'35em'}
			position='relative'
			flex={1}
			w='25em' 
			bg='white' 
			boxShadow={'lg'} 
			borderRadius={'25px'} >
			{skillText()}
		</GridItem>
	)
}

//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>


const placeholderText = () => { 
	return (
		<Flex
		direction={'column'}>
			<ChakraBox
			variants={item}>
			<Text
				variants={item}
				pt={'5'}
				as={'p'}
				fontSize={15}
				fontWeight={'500'}>
				I'm a recent Computer Science graduate from <b>McMaster University</b> with a BaSc. degree. <br/><br/> 
				My initial interest in web development came around 2017 when I had my first real introduction to making a website using nothing more than HTML, CSS, and JS. Soon after that I fiddled with IOS and Android app development. Cross platform programming presented a challenge and so naturally soon after that I picked up React Native development.   
				<br/><br/>
				When I'm not developing something I'm always in the pursuit of some of the best dan-dan noodles in the area (Szechuan Noodle Bowl anyone?), or on the quest for an endgame mechanical keyboard. The latter of which by now I can say is a paradox. Something about the style of my apps and why I ended up using rounded corners and dropshadows for a long time. 
				<br/><br/>
				Currently I'm <b>looking for new opportunities</b> as a developer!
			</Text>
			</ChakraBox>
		</Flex>

	)
}

const skillText = () => { 
	return ( 
			<Flex
			p={'10'}
			direction={'column'}>
				<ChakraBox
				variants={item}>
				<Heading>
					<Text
						pb='2'
						fontSize={30}
						fontWeight={'bold'}> 
						SKILLS
					</Text>
				</Heading>
				<Divider orientation={'horizontal'}/>
				</ChakraBox>
				<ChakraBox
				variants={item}>
				<Text
					fontSize={15}
					pt={'5'}
					pb={'8'}
					as={'p'}
					fontWeight={'500'}>
					I love that the field is ever evolving, and I find it fun to familiarize myself with new things on an ongoing basis! That said, here's a list of things I've used the most over time:  
				</Text>
				</ChakraBox>
				<ChakraBox
				variants={skillsItem}>
				<Grid
				templateColumns='repeat(3, 1fr)'
				gap={3}>
					{skillList(4)}
					{skillList(4)}
					{skillList(4)}
				</Grid > 
				</ChakraBox>       
			</Flex>
		

	)
}

const skillList = (items) => { 
	// get from mdx here
	const name = 'React'
	const ic = SiReact

	// temp icons for test 
	const name2 = 'Python'
	const name3 = 'JS'
	const name4 = 'Chakra'
	const ic2 = SiPython
	const ic3 = SiJavascript
	const ic4 = SiChakraui

	return( 
		<List spacing={4}>
		{skillItem(name, ic)}
		{skillItem(name2, ic2)}
		{skillItem(name3, ic3)}
		{skillItem(name4, ic4)}
		{skillItem(name4, ic4)}
		{/* You can also use custom icons from react-icons */}
	</List>        
	)
}

const skillItem = (name, ic) => { 
	return(
		<ListItem>
			<Flex
			flex={1}
			alignItems='center'
			direction={'row'}>
				<ListIcon as={ic} color='black.500' />
				<Text
					fontSize={15}
					fontWeight={'bold'}>
					&thinsp;{name}
				</Text>
			</Flex>
		</ListItem>
	)
}

const pictureFrame = (top, left, bottom, right, url, ind, w, h) => {
	return (
			<Flex
				as={motion.div}
				whileHover={{ scale: 1.025 }}
				flex={1}
				position={'relative'}>
				<Flex  
					overflow={'hidden'}
					h={'50em'}>
				<Image
					borderRadius={'12px'}
					boxShadow={'md'}
					borderWidth={'5em'}
					zIndex={ind}
					w={w}
					h={h}
					position={'absolute'}
					top={top}
					left={left}
					bottom={bottom}
					right={right}
					fit={'cover'}
					align={'center'}
					src={url}/>
				</Flex>
			</Flex>
	)
	
}




//{stackedImage('45%', '30%', 'https://staticg.sportskeeda.com/editor/2022/02/af653-16442505538786-1920.jpg', 7, '11em', '11em')}
//{stackedImage('79%', '60%', 'https://i.imgur.com/P9IVqkS.jpeg', 8, '7em', '7em')}


export default About

