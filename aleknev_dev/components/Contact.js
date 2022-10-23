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
					containerStyle: {
						color: 'black'
					},
					variant: 'subtle',
					description: "Thanks for reaching out!",
					status: 'success',
					duration: 3000,
					isClosable: true,
				})	
		}
	}, [state.submitting])
	return (
		<Box
			position={'relative'}
			maxW={'100%'}
			px={{ base: '6.5%', sm: '5%', md: '10%', lg: '10%' }}
			w={'100%'}
			id='2'
			pt={{ base: '7em', sm: '10em', md: '10em', lg: '10em' }}
			pb={{ base: '7em', sm: '10em', md: '16em', lg: '16em' }}>
			<Flex
			
				direction={'column'}
				gap={{ base: '2em', sm: '4em', md: '7em', lg: '10em' }}>
				<ChakraBox
					as={motion.div}
					variants={about}
					initial={'hidden'}
					whileInView={'visible'}
					viewport={{ once: false, amount: 0.5 }}>
					<Title
						title={'Contact.'}
						desc={'Reach out! Whether you want to get in touch for work, collaborations, or even just to chat.'}
						page={'03'} />
				</ChakraBox>
				<Flex
					p={{base: '2em', sm: '2.5em', md: '4em', lg: '3em'}}
					w={'100%'}
					position={'relative'}
					bg={'whiteAlpha.600'}
					boxShadow={'md'}
					borderRadius={'22px'}
					h={'100%'}>
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
										direction={{base:'column', sm: 'column', md: 'row', lg: 'row'}}
										gap={'3em'}>
										<Flex
											h={'100%'}
											w={'100%'}
											direction={'column'}>
											<FormLabel
												requiredIndicator
												fontSize={{ base: 22, sm: 23, md: 28, lg: 28 }}>
												EMAIL
											</FormLabel>
											<Input
												fontSize={17}
												color={'blackAlpha.800'}
												focusBorderColor={'blackAlpha.700'}
												w={'100%'}
												size={'lg'}
												id='email'
												type='email'
												name='email'/>
											<FormLabel
												requiredIndicator
												pt={4}
												fontSize={{ base: 22, sm: 23, md: 28, lg: 28 }}>
												NAME
											</FormLabel>
											<Input
												fontSize={17}
												color={'blackAlpha.800'}
												focusBorderColor={'blackAlpha.700'}
												name='name'
												size={'lg'}
												id='name'/>
										</Flex>
										<Flex
											direction={'column'}
											h={'container'}
											w={'100%'}>
											<FormLabel
												requiredIndicator
												fontSize={{ base: 22, sm: 23, md: 28, lg: 28 }}>
												YOUR MESSAGE
											</FormLabel>
											<Textarea
												color={'blackAlpha.800'}
												h={'100%'}
												focusBorderColor={'blackAlpha.700'}
												name='message'
												resize={'none'}
												id='message' />
										</Flex>
									</Flex>
								</FormControl>
								<Button
									w={'100%'}
									mt={4}
									colorScheme={'blackAlpha'}
									borderRadius={'12px'}
									borderWidth={'1px'}
									borderColor={'gray.500'}
									textColor={'white'}
									bg={'blackAlpha.800'}
									disabled={state.submitting}
									type='submit'>
									SUBMIT
								</Button>
							</Flex>
						</form>
				</Flex>
			</Flex>
		</Box>
	)
}

export default Contact