
import { useMemo, useEffect, useState } from "react";
import { tabs } from "./TabContent"
import {
	Container,
	Stack,
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
	chakra,
	shouldForwardProp
  } from '@chakra-ui/react';
import { isValidMotionProp, motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Link } from "react-scroll/modules"

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });



// need to fix if pressing the home button, make it fade out 
const AnimatedTabs = ({pos}) => {
	
	// allows it to hover buttons on scroll as well as when pressed
	const [selectedTab, setSelectedTab] = useState(tabs[3])
	const [pressed, setPressed] = useState(false)
	const [currItem, setCurrItem] = useState(tabs[3])

	useMemo(() => {
		if (currItem != undefined){
			if (currItem.label == 'About' && pos.views.aboutView){
				setSelectedTab(tabs[0])
				setPressed(false)
			}
			else if (currItem.label == 'Projects' && pos.views.projView){
				setSelectedTab(tabs[1])
				setPressed(false)
			}
			else if (currItem.label == 'Contact' && pos.views.contactView){
				setSelectedTab(tabs[2])
				setPressed(false)
			}
		}
		if (!pressed){
			if (pos.views.aboutView) {
				setSelectedTab(tabs[0])
			}
			else if (pos.views.projView) {
				setSelectedTab(tabs[1])
			} 
			else if (pos.views.contactView) {
				setSelectedTab(tabs[2])
			} 
		}
	},[pos.views])
	return (
				<Stack
				direction={'row'}
				justify={'flex-end'}> 
					<Flex
					gap={'5em'}>
						{tabs.map((item, idx) => (
								<Link 
								key={idx} 
								activeClass="active" 
								to={idx.toString()} 
								spy={true} 
								smooth={true} 
								offset={0} 
								duration={2200}>
									<Center
										className={item === selectedTab ? 'selected' : ''}
										onClick={() => 
													{setSelectedTab(item)
													setPressed(true)
													// use an onclick approach where it changes to white on press
													setCurrItem(item)}}>

										
										{item === selectedTab ? (
											<Center>
												<ChakraBox
												as={motion.div}
												initial={{color:'black'}}
												animate={{color:'white'}}
												transition={{
														delay: 1
													}}>
												
												<Text 
												position={'relative'}
												zIndex={1}
												fontWeight={'600'}
												color={'black'}>
													{item.label}
												</Text>
												</ChakraBox>

											</Center>
										) : (
											<Center>
												<Text
												fontWeight={'600'}
												color='black'>
													{item.label}
												</Text>	
											</Center>
										)}
										<AnimatePresence mode='wait'>
										{item === selectedTab && !pos.views.heroView ? (
												<ChakraBox
												as={motion.div}
												zIndex={0}
												layout
												key='overlayBox'
												position={'absolute'}
												layoutId={'outline'}
												initial={{opacity:0}}
												animate={{opacity:1}}
												exit={{opacity:0}}	
												bg='blackAlpha.800'
												h={'2.5em'}
												w={'6%'}
												borderRadius='15'
												borderWidth={'1px'}
												borderColor={'gray.500'}
												boxShadow={'lg'}>
												</ChakraBox>
												) : (
													null
												)}
										</AnimatePresence>
									
									</Center>
								</Link>
							))}
						</Flex>
					</Stack>
	)
}

export default AnimatedTabs