import React, { useState } from 'react'
import { chakra, shouldForwardProp, Divider, Heading, Flex, Stack, Container, Button, Text, Box, Spacer, ScaleFade } from '@chakra-ui/react'
import { Link } from "react-scroll/modules"
import AnimatedTabs from './Tabs/Tabs'
import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const Header = () => {
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
							activeClass="active" 
							to={'1'} 
							spy={true} 
							smooth={true} 
							offset={0} 
							duration={500}>                   
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
							<ChakraBox
								position={'relative'}>
								<ChakraBox
								as={motion.div}
								variants={fadeOutItem}>
									<Text>
										&thinsp;&lt;aleknev&gt;
									</Text>
								</ChakraBox>
								<ChakraBox
								as={motion.div}
								variants={fadeInItem}
								whileTap={{scale:0.9}}
								position={'absolute'}
								top={0}>			
									<Text>
										&thinsp;&lt;home&gt;
									</Text>
								</ChakraBox> 
							</ChakraBox>
						</Heading> 
						</Link>
						<AnimatedTabs/>
					</Flex>
				</Box>
			</ChakraBox>
		</Container>

		
	</Container>	

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
	show: { opacity: 0, scale: 0.9 }
  }
//<Divider orientation='horizontal' borderRadius={'2em'} border='1px' dropShadow={'lg'}/>
export default Header