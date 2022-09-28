
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


const AnimatedTabs = ({pos}) => {
	return (
				<Stack
				direction={'row'}
				justify={'flex-end'}
				as={AnimateSharedLayout}> 
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
								duration={500}>
									<Center
										className={item === pos.tabs.selectedTab ? 'selected' : ''}
										onClick={() => 
													{pos.tabs.setSelectedTab(item)
													console.log(idx)}}>
										{item === pos.tabs.selectedTab ? (
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
										{item === pos.tabs.selectedTab ? (
												<Box
												zIndex={1}
												position={'absolute'}
												layoutId={'outline'}
												as={motion.div}
												bg='gray.100'
												h={'2.5em'}
												w={'9%'}
												borderRadius='15'
												boxShadow={'lg'}/>
												) : (null)}
									</Center>
								</Link>
							))}
						</Flex>
					</Stack>
	)
}

export default AnimatedTabs