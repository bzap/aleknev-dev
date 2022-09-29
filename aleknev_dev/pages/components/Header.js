import React, { useState } from 'react'
import { Center, chakra, shouldForwardProp, Divider, Heading, Flex, Stack, Container, Button, Text, Box, Spacer, ScaleFade, transition } from '@chakra-ui/react'
import { Link } from "react-scroll/modules"
import AnimatedTabs from './Tabs/Tabs'
import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const Header = ({pos}) => {
	const [isShown, setIsShown] = useState(true)
	return (
	<Container>
		<Container 
			display={'flex'} 
			justifyContent={'center'} 
			pt={'5'}
			>
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
				justifyContent={'center'} 
				maxW={'6xl'} 
				position='fixed' 
				zIndex={200} 
				width={'100%'}
				boxShadow={'lg'}
				borderRadius={'20px'}
				bg='white'
				>
				<Box
					p={4}
					py={{ base: '1em', md: '1em' }}>
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
							lineHeight={1.1}
							fontWeight={600}
							variants={'container'}
							initial="hidden"
							animate={!isShown ? 'show' : ''}
							onHoverStart={() => setIsShown(false)}
							onHoverEnd={() => setIsShown(true)}
							fontSize={{ base: '4xl', sm: '4xl', lg: '1xl' }}>   
								{scrollBehaviour(pos)}
						</Heading> 
						</Link>
						<AnimatedTabs pos={pos} />
					</Flex>
				</Box>
			</ChakraBox>
		</Container>
	</Container>	
	)
}

const scrollBehaviour = (pos) => { 
	// if scroll distance gap/speed is big don't change these titles 
	// if gap > 150, then don't apply the title changes, else do? 
	return (
	<Flex
		align={'flex-start'}>
		<ChakraBox
		as={motion.div}
		variants={fadeOutItem}>
			{pos.views.aboutView && (
			<ChakraBox
			as={motion.div}
			animate={{scale:[1, 1.01, 1], opacity:[0.6,1]}}
			transition={{
				type:'spring',
				duration: 0.2
			}}
			fontWeight={'bold'}
			fontSize={'1em'}>
				&thinsp;MORE ON MYSELF
			</ChakraBox>)}
			{pos.views.projView && (
			<ChakraBox
			as={motion.div}
			animate={{scale:[1, 1.01, 1], opacity:[0.6,1]}}
			transition={{
				type:'spring',
				duration: 0.2
			}}
			fontWeight={'bold'}
			fontSize={'1em'}>
				&thinsp;THINGS I'VE MADE
			</ChakraBox>)}
			{pos.views.contactView && (
			<ChakraBox
			as={motion.div}
			animate={{scale:[1, 1.01, 1], opacity:[0.6,1]}}
			transition={{
				type:'spring',
				duration: 0.2
			}}
			fontWeight={'bold'}
			fontSize={'1em'}>
				&thinsp;REACH OUT TO ME
			</ChakraBox>)}
		</ChakraBox>
		{pos.views.homeView  && (
		<ChakraBox
		as={motion.div}
		variants={fadeInItem}
		whileTap={{scale:0.9}}
		position={'absolute'}>								
			<Text>
				&thinsp;&lt;home&gt;
			</Text>
		</ChakraBox> )}
		{pos.views.heroView && (
		<ChakraBox
		as={motion.div}
		animate={{scale:[1,1.01, 1], opacity:[0.6,1]}}
		transition={{
			type:'spring',
			duration: 0.2
		}}
		whileHover={{scaleX:1.1, scaleY:1.1}}
		whileTap={{scale:0.98}}>
			<Text>
				&thinsp;&lt;aleknev&gt;
			</Text>
		</ChakraBox>)}
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