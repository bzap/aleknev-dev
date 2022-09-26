
import { useState } from "react";
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



const AnimatedTabs = () => {
	const [selectedTab, setSelectedTab] = useState(tabs[0])
	return (
				<Stack
				direction={'row'}
				justify={'flex-end'}
				as={AnimateSharedLayout}>
					<Flex
					gap={6}
						>
						{tabs.map((item, idx) => (
								<Center
									key={idx}
									className={item === selectedTab ? 'selected' : ''}
									onClick={() => setSelectedTab(item)}>
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
									{item === selectedTab ? (
											<Box
											zIndex={1}
											position={'absolute'}
											layoutId={'outline'}
											as={motion.div}
											bg='gray.100'
											h={'2.5em'}
											w={'6em'}
											borderRadius='15'
											boxShadow={'lg'}/>
											) : (null)}
								</Center>
							))}
						</Flex>
					</Stack>



	)


}

export default AnimatedTabs