import React, { useState } from 'react'
import { Center, Icon, Collapse, IconButton, useDisclosure, chakra, shouldForwardProp, Divider, Heading, Flex, Stack, Container, Button, Text, Box, Spacer, ScaleFade, transition, useBreakpoint } from '@chakra-ui/react'
import { Link } from "react-scroll/modules"
import AnimatedTabs from './Tabs/Tabs'
import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { SiGit, SiGithub } from 'react-icons/si';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import MobileTabs from './Tabs/MobileTabs';
import { background, navContainer } from '../styles/Variants'

const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Header = ({ pos }) => {
	const { isOpen, onToggle } = useDisclosure();
	const [isShown, setIsShown] = useState(true)
	return (
		<Container>
			<Flex
				justifyContent={'center'}
				pt={'2'}>
				<ChakraBox
					as={motion.div}
					initial={'hidden'}
					variants={navContainer}
					whileInView={'visible'}
					backdropFilter='auto'
					backdropBlur='8px'
					maxW={{ base: '88%', sm: '90%', md: '80%', lg: '76%' }}
					position='fixed'
					w={'100%'}
					zIndex={200}
					boxShadow={'md'}
					borderRadius={'12px'}
					bg='whiteAlpha.600'
					justifyContent={'center'}>
					<Box
						display={{ base: 'none', sm: 'none', md: 'inline', lg: 'inline' }}>
						{desktopContent(pos, isShown, setIsShown)}
					</Box>
					<Box
						display={{ base: 'inline', sm: 'inline', md: 'none', lg: 'none' }}>
						{mobileContent(isOpen, onToggle)}
					</Box>
				</ChakraBox>
			</Flex>
		</Container>
	)
}

const desktopContent = (pos, isShown, setIsShown) => { 
	return ( 
		<Flex	
			px={8}
			py={3}
			align={'center'}
			justifyContent={'space-between'}
			direction={'row'}>
			<Link
				to={'home'}
				spy={true}
				smooth={true}
				offset={0}
				duration={2500}>
				<Center
					cursor={'pointer'}
					as={motion.div}
					variants={'container'}
					initial="hidden">
					{logoHeader(30)}
				</Center>
			</Link>
			<Spacer />
			<AnimatedTabs pos={pos} />
		</Flex>
	)
}

const mobileContent = (isOpen, onToggle) => {
	return (
		<Box
			px={4}
			py={'6px'}>
			<Flex
				align={'center'}
				justifyContent={'space-between'}
				direction={'row'}>
					{logoHeader(25)}
					<Spacer />
					<Flex>
						<IconButton
							onClick={onToggle}
							icon={
								isOpen ?
								<CloseIcon
									w={3}
									h={3} /> :
										<HamburgerIcon
											w={5}
											h={5} />
								}
								variant={'ghost'}
								aria-label={'Toggle Navigation'}/>
					</Flex>
			</Flex>
			<Collapse
				in={isOpen}
				animateOpacity>
					<MobileTabs />
			</Collapse>
		</Box>
	)
}

const logoHeader = (size) => {
	return (
			<ChakraBox
				as={motion.div}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.98 }}>
				<Text
					fontSize={23}
					color={'blackAlpha.800'}>
					&lt;&thinsp;linas&thinsp;&gt;
				</Text>
			</ChakraBox>
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
	show: { scale: 0 }
}



//<Divider orientation='horizontal' borderRadius={'2em'} border='1px' dropShadow={'lg'}/>
export default Header