
import { useEffect, useState } from "react";
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



// need to fix if pressing the home button 
// it goes into not pressed bc of the refresh
//use the didScroll state??? 
//if did scroll then change it  
// if pressed and label == the view then stop 
const AnimatedTabs = ({pos}) => {
	
	// allows it to hover buttons on scroll as well as when pressed
	const [selectedTab, setSelectedTab] = useState(tabs[3])
	const [pressed, setPressed] = useState(false)


	const [currItem, setCurrItem] = useState(tabs[3])

	useEffect(() => {
		if (currItem != undefined){
			if (currItem.label == 'About' && pos.views.aboutView){
				console.log('matched a')
				setSelectedTab(tabs[0])
				setPressed(false)
			}
			else if (currItem.label == 'Projects' && pos.views.projView){
				console.log('matched p')
				setSelectedTab(tabs[1])
				setPressed(false)
			}
			else if (currItem.label == 'Contact' && pos.views.contactView){
				console.log('matched c')
				setSelectedTab(tabs[2])
				setPressed(false)
			}
		}
		if (!pressed){
			if (pos.views.aboutView) {
				setSelectedTab(tabs[0])
			}
			
			if (pos.views.projView) {
				setSelectedTab(tabs[1])
			}
			 
			if (pos.views.contactView) {
				setSelectedTab(tabs[2])
			} 
		}
		

		console.log(selectedTab, 'set tab')
		console.log('---------')
	},[pos.views])
	return (
				<Stack
				direction={'row'}
				justify={'flex-end'}> 
					<Flex
					gap={6}>
						{tabs.map((item, idx) => (
								<Link 
								key={idx} 
								activeClass="active" 
								to={idx.toString()} 
								spy={true} 
								smooth={true} 
								offset={0} 
								duration={2000}>
									<Center
										className={item === selectedTab ? 'selected' : ''}
										onClick={() => 
													{setSelectedTab(item)
													setPressed(true)
													setCurrItem(item)
													console.log(idx)}}>
										{item === selectedTab ? (
										<Button
											borderRadius='15'
											variant='ghost'
											zIndex={2}
											size={'md'}
											>
											{item.label}
										</Button>
										) : (
											<Button
											variant='ghost'
											borderRadius='15'
											size={'md'}
											zIndex={2}>
												{item.label}
											</Button>
										)}
										<AnimatePresence mode='wait'>
										{item === selectedTab && !pos.views.heroView ? (
												<ChakraBox
												as={motion.div}
												zIndex={1}
												layout
												key='overlayBox'
												position={'absolute'}
												layoutId={'outline'}
												initial={{opacity:0}}
												animate={{opacity:1}}
												exit={{opacity:0}}	
												
														
												bg='gray.100'
												h={'2.5em'}
												w={'9%'}
												borderRadius='15'
												boxShadow={'lg'}/>
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