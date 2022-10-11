import React, { useState } from 'react'
import { Center, Icon, IconButton, chakra, shouldForwardProp, Divider, Heading, Flex, Stack, Container, Button, Text, Box, Spacer, ScaleFade, transition } from '@chakra-ui/react'
import { Link } from "react-scroll/modules"
import AnimatedTabs from './Tabs/Tabs'
import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { SiGit, SiGithub } from 'react-icons/si';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const Header = ({pos}) => {
	const [isShown, setIsShown] = useState(true)
	return (
	<Container>
		<Flex
			display={'flex'} 
			justifyContent={'center'} 
			pt={'2'}>
			<ChakraBox 	
				as={motion.div}
				initial={{opacity:0}}
				animate={{
					opacity: [0, 1],
					scale: [0, 1.06, 1]
				}}
				transition={{
					type:'spring',
					duration: 1.2,
					bounce: 0.1,
					ease: "easeInOut",
					delay: 0.2,
				}}
				backdropFilter='auto' 
				backdropBlur='8px'
				maxW={{sm: '90%', md:'80%', lg:'80%'}}
				position='fixed' 
				w={'100%'}
				zIndex={200} 
				
				boxShadow={'md'}
				borderRadius={'12px'}
				bg='whiteAlpha.600'
				justifyContent={'center'}
				>
				<Box
					p={8}
					py={'12px'}>
					<Flex
						align={'center'}
						justifyContent={'space-between'}
						direction={{ base: 'column', md: 'row' }}>
						<Link 
							to={'home'} 
							spy={true} 
							smooth={true} 
							offset={0} 
							duration={2500}>                   
						<Heading
							cursor={'pointer'}
							as={motion.div}
							fontWeight={600}
							variants={'container'}
							initial="hidden"
							animate={!isShown ? 'show' : ''}
							onHoverStart={() => setIsShown(false)}
							onHoverEnd={() => setIsShown(true)}
							fontSize={{ base: '4xl', sm: '4xl', lg: '1xl' }}>   
								{scrollBehaviour()}
						</Heading> 
						</Link>
						<Spacer/>
						<AnimatedTabs pos={pos} />
					</Flex>
				</Box>
			</ChakraBox>
		</Flex>
	</Container>	
	)
}

const scrollBehaviour = () => { 
	// if scroll distance gap/speed is big don't change these titles 
	// if gap > 150, then don't apply the title changes, else do? 
	return (
	<Flex
		align={'flex-start'}>
		<ChakraBox
		as={motion.div}
		whileHover={{scale:1.1}}
		whileTap={{scale:0.98}}>
			<Text
			fontSize={30}
			color={'blackAlpha.800'}
			fontWeight='700'>
				&lt;li&gt;
			</Text>
		</ChakraBox>
	</Flex>
	)
}
	
const container = {
	show: {
	  opacity: 1,
	  transition: {
		staggerChildren: 0.1,
		delayChildren: 2,
	  }
	}
  }
  
const fadeInItem = {
	hidden: { opacity: 0 },
	show: { opacity: 1 }
  }

const fadeOutItem = { 
	hidden: { opacity: 1 },
	show: { opacity: 0, scale: 0.9 },
  }

  
const scaleOutItem = {
	hidden: { opcaity: 1 },	
	show: { scale: 0}
}



//<Divider orientation='horizontal' borderRadius={'2em'} border='1px' dropShadow={'lg'}/>
export default Header