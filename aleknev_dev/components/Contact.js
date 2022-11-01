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
	Spacer,
	GridItem,
	Center,
	Icon,
	Input,
	IconButton,
	createIcon,
	IconProps,
	useColorModeValue,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Textarea,
	chakra,
	shouldForwardProp,
	useToast,
	FormHelperText,
	border,
} from '@chakra-ui/react';
import Title from './Title'
import { useState, useEffect } from 'react'
import { useForm, ValidationError } from "@formspree/react"
import { isValidMotionProp, motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { about, gradient, gradient2, currentSkills, background, title, itemIcon, itemText, itemTitle, aboutItem, titleContainer, projectSubContainer, projectContainer } from '../styles/Variants'



const ChakraBox = chakra(motion.div, {
	shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});


const Contact = () => {
	const [state, handleSubmit] = useForm('xlevlwkn');
	const toast = useToast() 
	useEffect(() => {
		if (state.succeeded && !toast.isActive('good')) {
				toast({
					id: 'good',
					title: 'Submitted.',
					variant: 'subtle',
					description: "Thanks for reaching out!",
					status: 'success',
					duration: 3000,
					isClosable: true,
				})	
		}
	}, [state.submitting])
	return (

		<ChakraBox
			as={motion.div}
			variants={aboutItem}
			initial={'hidden'}
			whileInView={'visible'}
			position={'relative'}
			zIndex={50}
			viewport={{once: false}}
			maxW={'100%'}
			px={{ base: '6.5%', sm: '5%', md: '10%', lg: '12%' }}
			w={'100%'}
			id='2'
			pt={{ base: '4em', sm: '6em', md: '6em', lg: '6em' }}
			pb={{ base: '5em', sm: '5em', md: '7em', lg: '9%' }}>
			<Flex
				direction={'column'}
				gap={{ base: '2em', sm: '2em', md: '3em', lg: '5em' }}>
				<Flex
					position={'relative'}
					justifyContent={{ base: 'center', sm: 'center', md: 'center', lg: 'start' }}>
						<ChakraBox
							as={motion.div}
							variants={about}
							initial={'hidden'}
							whileInView={'visible'}
							viewport={{ once: false, amount: 0.8 }}>
							<Title
								title={'Contact Me!'}/>
						</ChakraBox>
				</Flex>
				
				<Flex
					backdropFilter='auto'
					backdropBlur='5px'
					p={{base: '2em', sm: '2.5em', md: '4em', lg: '3em'}}
					w={'100%'}
					position={'relative'}
					zIndex={5}
					bg={'whiteAlpha.600'}
					boxShadow={'md'}
					direction={'column'}
					borderRadius={'22px'}
					h={'100%'}
					gap={'5em'}>
						<form
							style={{ flex: 1, width: "100%" }}
							onSubmit={handleSubmit}>
							<Flex

								gap={{ base: '2em', sm: '2.5em', md: '4em', lg: '4em' }}
								direction={'column'}>
								<FormControl
									isRequired>
									<Flex
										h={'100%'}
										w={'100%'}
										direction={{base:'column', sm: 'column', md: 'column', lg: 'row'}}
										gap={'3em'}>
										<Flex
											h={'100%'}
											w={'100%'}
											direction={'column'}>
											
											<FormLabel
												requiredIndicator>
													<Heading
													pb={2}
													color={'blackAlpha.800'}
													fontSize={{ base: 22, sm: 23, md: 25, lg: 25 }}>
														EMAIL	
													</Heading>										
											</FormLabel>
											<ChakraBox
											as={motion.div}
											whileHover={{ scale: 1.01 }}>
												<Input
													fontSize={{ base: 13, sm: 13.5, md: 14, lg: 14 }}
													borderRadius={'12px'}
													color={'blackAlpha.800'}
													bg={'whiteAlpha.800'}
													borderColor={'blackAlpha.600'}
													boxShadow={'md'}
													border={'none'}
													borderWidth={'0px'}
													_hover={{ border: 'none' }}
													focusBorderColor={'null'}
													w={'100%'}
													size={'lg'}
													id='email'
													type='email'
													name='email'/>
											</ChakraBox>
											<FormLabel
												pt={9}
												requiredIndicator>
												<Heading
													pb={2}
													color={'blackAlpha.800'}
													fontSize={{ base: 22, sm: 23, md: 25, lg: 25 }}>
													NAME
												</Heading>
											</FormLabel>
											<ChakraBox
												as={motion.div}
												whileHover={{ scale: 1.01 }}>
											<Input
												fontSize={{ base: 13, sm: 13.5, md: 14, lg: 14 }}
												borderRadius={'12px'}
												color={'blackAlpha.800'}
												bg={'whiteAlpha.800'}
												boxShadow={'md'}
												border={'none'}
												borderWidth={'0px'}
												_hover={{ border: 'none' }}
												focusBorderColor={'null'}
												name='name'
												size={'lg'}
												id='name'/>
											</ChakraBox>
										</Flex>
										<Flex
											direction={'column'}
											h={'container'}
											w={'100%'}>
											<FormLabel
												requiredIndicator>
												<Heading
													pb={2}
													color={'blackAlpha.800'}
													fontSize={{ base: 22, sm: 23, md: 25, lg: 25 }}>
													YOUR MESSAGE
												</Heading>
											</FormLabel>
											<ChakraBox
												h={'100%'}
												as={motion.div}
												whileHover={{ scale: 1.01 }}>
											<Textarea
												p={4}
												h={'100%'}
												fontSize={{ base: 13, sm: 13.5, md: 14, lg: 14 }}
												borderRadius={'14px'}
												color={'blackAlpha.800'}
												bg={'whiteAlpha.800'}
												boxShadow={'md'}
												border={'none'}
												borderWidth={'0px'}
												_hover={{ border: 'none' }}
												focusBorderColor={'null'}
												name='message'
												resize={'none'}
												id='message' />
											</ChakraBox>
										</Flex>
									</Flex>
								</FormControl>
								<ChakraBox
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.99}}
									boxShadow={'md'}
									bg={'whiteAlpha.800'}
									py={1.5}
									h={'100%'}
									borderRadius={'14px'}
									position={'relative'}
									alignItems={'center'}>
										<Button
											position={'relative'}
											w={'100%'}
											maxH={'full'}
											borderRadius={'12px'}
											variant={'none'}
											textColor={'blackAlpha.800'}
											disabled={state.submitting}
											type='submit'>
												<Heading
													color={'blackAlpha.800'}
													fontSize={{ base: 14, sm: 15, md: 15, lg: 16 }}>
														SUBMIT
												</Heading>
										</Button>
							</ChakraBox>
							</Flex>
						</form>
				</Flex>
				<Flex
					zIndex={0}
					position={'absolute'}
					w={'100%'}
					left={'15%'}
					top={{ sm: '0em', md: '-20em', lg: '10em' }}>
					<Center>
						<Image
							h={{ base: '0em', sm: '0', md: '0em', lg: '0em', xl: '50em' }}
							w={{ base: '0em', sm: '0', md: '0em', lg: '0em', xl: '90em' }}
							src={'footerbl.webp'} />
					</Center>
				</Flex>
			</Flex>
		</ChakraBox>
	)
}

export default Contact