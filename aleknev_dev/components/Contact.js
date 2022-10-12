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
			px={{ sm: '5%', md: '10%', lg: '10%' }}
			w={'100%'}
			id='0'
			pt='10em'
			pb='16em'>


			<Flex
				direction={'column'}
				gap={'8em'}>
				<Title
					title={'Contact.'}
					desc={'Reach out! Whether you want to get in touch for work, collaborations, or even just to chat.'}
					page={'03'} />
				<Flex
					p={10}
					bg={'whiteAlpha.600'}
					boxShadow={'md'}
					borderRadius={'22px'}
					h={'100%'}>
						<form
							style={{ flex: 1, width: "100%" }}
							onSubmit={handleSubmit}>
							<Flex
								gap={'1em'}
								direction={'column'}>
								<FormControl
									isRequired>
									<Flex
										h={'100%'}
										w={'100%'}
										direction={'row'}
										gap={'2em'}>
										<Flex
											h={'100%'}
											w={'100%'}
											direction={'column'}>
											<FormLabel
												requiredIndicator
												fontSize={30}
												fontWeight={900}>
												EMAIL
											</FormLabel>
											<Input
												fontSize={17}
												fontWeight={600}
												color={'blackAlpha.800'}
												focusBorderColor={'blackAlpha.700'}
												w={'100%'}
												size={'lg'}
												id='email'
												type='email'
												name='email'
												placeholder='Email' />
											<FormLabel
												requiredIndicator
												pt={4}
												fontSize={30}
												fontWeight={900}>
												NAME
											</FormLabel>
											<Input
												fontSize={17}
												fontWeight={600}
												color={'blackAlpha.800'}
												focusBorderColor={'blackAlpha.700'}
												name='name'
												size={'lg'}
												id='name'
												placeholder='Name' />
										</Flex>
										<Flex
											direction={'column'}
											h={'container'}
											w={'100%'}>
											<FormLabel
												requiredIndicator
												fontSize={30}
												fontWeight={900}>
												YOUR MESSAGE
											</FormLabel>
											<Textarea
												fontWeight={600}
												color={'blackAlpha.800'}
												h={'100%'}
												focusBorderColor={'blackAlpha.700'}
												name='message'
												placeholder='Your message'
												resize={'none'}
												id='message' />
										</Flex>
									</Flex>
								</FormControl>

								<Button
									w={'100%'}
									mt={4}
									colorScheme={'blackAlpha'}
									variant={'ghost'}
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