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
				direction='column'>
					<Flex
					direction='row'
					
					justifyContent={'space-between'}>
						<Flex
						borderLeftWidth={'9px'}
						borderColor={'blackAlpha.800'}
						position='absolute'
						top={'12em'}
						w={'1em'}
						h={'9em'}>
						</Flex>
						<Flex
						pl={'3em'}
						pb={'5em'}
						gap={2}
						direction='column'>
								<Heading
								fontSize={'7em'}> 
									Projects
								</Heading>
								<Text
								w={'30em'}
								fontWeight={600}
								fontSize={'1.4em'}
								color={'blackAlpha.600'}>
									This is sample text talking about my projects. That's just the way it goes sometimes. It is what it is.
								</Text>
						</Flex>
						<Spacer/>
						<Flex
						minW={'10px'}
						position={'relative'}
						justifyContent={'flex-end'}	
>

						<Flex
						                        transform={'rotate(90deg)'}
												transformOrigin={'left top'}
						direction={'column'}>
							<Flex
							direction={'row'}
							position={'relative'}
							top={'4%'}
							alignItems={'flex-start'}>
								<Heading
								fontSize={20}
								fontWeight={900}>
									&larr;
								</Heading>
								<Spacer/>
							</Flex>
							<Center>
									<Heading
									fontSize={60}
									fontWeight={900}
									pb={4}>
										02&thinsp;
									</Heading>
									<Heading
									color={'blackAlpha.500'}
									fontWeight={900}>
										_&thinsp;03
									</Heading>
							</Center>
							<Flex
							direction={'row'}
							position={'relative'}
							bottom={'8%'}
							alignItems={'flex-end'}>
								<Spacer/>
								<Heading
								fontSize={20}
								fontWeight={900}>
									&rarr;
								</Heading>
							</Flex>


							
						</Flex>

						</Flex>
					</Flex>




				<Flex
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


		</Container> 
	)

const verticalItem = (top) => { 
		return ( 
			<ChakraBox
				variants={projectSubContainer}>
					<Flex
					position={'relative'}
					top={top}
					direction={'column'}>
						<Heading
						fontSize={50}>
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
						bg='whiteAlpha.600' 
						boxShadow={'md'} 
						borderRadius={'12px'} >
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
								<ChakraBox
								as={motion.div}
								initial={{x:'90%'}}
								animate={{x:'0'}}
								transition={{
										type: 'tween',
										ease: 'easeInOut',
										repeat: Infinity,
										repeatType: 'reverse',
										duration: 2,
									}}>
										<Text
												position={'relative'}
												top={-3}
												zIndex={8}
												fontSize={'2em'}
												fontWeight={'bold'}>
														&#x2192;&#x2192;     
										</Text>
								</ChakraBox>
						</Flex>
				</GridItem>
		)
}

//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>



export default Projects

