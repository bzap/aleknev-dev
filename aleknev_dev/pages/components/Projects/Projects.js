import {
		Container,
		Stack,
		Flex,
		Box,
		Heading,
		Text,
		Button,
		Image,
		Spacer,
		Icon,
		IconButton,
		createIcon,
		IconProps,
		useColorModeValue,
		Grid, 
		GridItem,
		Center,
		ScaleFade,
		transition, chakra, 
		shouldForwardProp
	} from '@chakra-ui/react';
import Preview from './Preview'
import { motion, isValidMotionProp } from "framer-motion";
import Parallax from '../layouts/Parallax';
import { SiGithub  } from 'react-icons/si';
import { projectContainer, projectSubContainer, skillsContainer, item, skillsItem, projecteem } from '../Variants/Variants'
import Head from 'next/head';


const ChakraBox = chakra(motion.div, {
		shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
	});

	const cardVariants = {
		offscreen: {
			y: 0
		},
		onscreen: {
			y: 0,
		
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8
			}
		}
	};


const Projects = () => ( 
		<Container 
	
				position={'relative'}
				maxW={'9xl'}
				id='1' 
				px={'10em'}
				py={'10em'}
				pb={'20em'}>	
		<Flex
			position={'absolute'}
			zIndex={0}
			w={'100%'}
			top={'-15%'}>
			<Image
				filter={'grayscale(40%)'}
				fit='cover'
				h={'100%'}
				w={'100%'}
				src={'projblob1.png'} />
		</Flex>	
				<Flex
				direction='column'>
					<Flex
					direction='row'
					pb={'5em'}>
						<Flex
						pl={'2em'}
						gap={2}
						justifyContent={'space-between'}
						direction='column'>
								<Heading
								fontSize={'7em'}> 
									Projects.
								</Heading>
								<Text
								w={'30em'}
								fontWeight={600}
								fontSize={'1.4em'}
								color={'blackAlpha.700'}>
									"fear != fate", a simple but meaningful mantra that I try to live by.
								</Text>
						</Flex>
						<Spacer/>
						{pageIndicator()}
					</Flex>




				<Flex
				position={'relative'}
				zIndex={10}
				direction='column'
				gap={'10em'}>
					<ChakraBox
					variants={projectContainer}
					initial={'hidden'}
					whileInView={'visible'}
					viewport={{once: false}}>	
					<Flex 
					direction={'row'}
					justifyContent={'space-between'}>
							{verticalItem('0em')}
							{verticalItem('5em')}
							{verticalItem('10em')}
					</Flex>
					</ChakraBox>
					<ChakraBox
					variants={projectContainer}
					initial={'hidden'}
					whileInView={'visible'}
					viewport={{once: true}}>	
					<Grid templateColumns='repeat(3	, 1fr)' gap={'10em'}>
							{verticalItem('0em')}
							{verticalItem('5em')}
					</Grid>
					</ChakraBox>
						{gitButton()}
				</Flex>

				</Flex>

		<Flex
			position={'absolute'}
			zIndex={0}
			w={'100%'}
			top={'45%'}
			left={'-20%'}>
			<Image
				filter={'grayscale(40%)'}
				fit='cover'
				h={'50%'}
				w={'100%'}
				src={'centerproj.png'} />
		</Flex>	
		</Container> 
	)
	const pageIndicator = () => { 
		return ( 
			<Flex
			w={'100%'}
			position={'relative'}
			direction="row"
			justifyContent={'flex-end'}	>
				<Flex
				w={'13em'}
				transform={'rotate(90deg)'}
				transformOrigin={'top left'}
				left={'100%'}
				justifyContent={'flex-end'}
				position={'absolute'}
				direction={'column'}>
					<Flex
					direction={'row'}
					position={'relative'}
					top={'1.5em'}
					left={'1rem'}
					alignItems={'flex-start'}>
						<Heading
						fontSize={25}
						fontWeight={900}>
							&larr;
						</Heading>
						<Spacer/>
					</Flex>
					<Center>
							<Heading
							fontSize={'4.5em'}
							fontWeight={900}
							pb={8}>
								02&thinsp;
							</Heading>
							<Heading
							color={'blackAlpha.700'}
							fontWeight={900}>
								_&thinsp;03
							</Heading>
					</Center>
					<Flex
					direction={'row'}
					position={'relative'}
					bottom={'3em'}
					right={'1rem'}
					alignItems={'flex-end'}>
						<Spacer/>
						<Heading
						fontSize={25}
						color={'blackAlpha.700'}
						fontWeight={900}>
							&rarr;
						</Heading>
					</Flex>	
				</Flex>
		</Flex>	
		)
	}



const verticalItem = (top) => { 
		return ( 
			<ChakraBox
				variants={projectSubContainer}>
					<Flex
					position={'relative'}
					top={top}
					direction={'column'}>
						<Heading
						fontWeight={800}
						fontSize={45}>
							01
						</Heading>
						<Heading
						position={'relative'}
						top={-7}
						pl={1}>
							&#x5f;
						</Heading>
					</Flex>

				<GridItem 
						as={motion.div}
						whileHover={{ scale: 1.025 }}
						viewport={{once:true, amount:0.8}}
						flex={1}
						position={'relative'}
						h={'30.5em'}
						justifyContent={'flex-start'}
						w={'24em'} 
						top={top}
						bg={'whiteAlpha.600'}
						backdropFilter='auto'
						backdropBlur='5px'
						boxShadow={'md'} 
						borderRadius={'22px'} >
						<Preview/>
				</GridItem>     
				</ChakraBox> 
		)
}

const gitButton = () => { 
		return ( 
				<GridItem 
						flex={1}
						justifyContent={'center'}
						position={'relative'}
						w='full' 
						pl={'3em'}
						top={'10em'}>
						<Flex
						direction={'column'}>
								<Flex
								direction={'row'}>
									<Flex
									as={motion.div}
									pt={'2em'}
									direction={'column'}
									alignItems={'flex-end'}>
										<Text
										fontSize={26}
										fontWeight={'bold'}>
											MORE&#160;&#160;&#160;&#160;
										</Text> 
										<Text
										fontSize={26}
										fontWeight={'bold'}>
											CODE&#160;&#160;
										</Text>
										<Text
										fontSize={26}
										fontWeight={'bold'}>
											HERE
										</Text>
									</Flex>  
									
									<ChakraBox
									cursor={'pointer'}
									as={motion.div}
									whileHover={{scale:1.1}}
									whileTap={{scale:0.9}}>
										<Icon 
										as={SiGithub} 
										h={'6em'}
										w={'6em'}/>
									</ChakraBox>               
								</Flex>
						</Flex>
				</GridItem>
		)
}

//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>



export default Projects

