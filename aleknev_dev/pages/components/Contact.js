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
	useColorModeValue,
  } from '@chakra-ui/react';
import Title from './Title'



const Contact = () => ( 
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
		gap={'2em'}>
			<Title
				title={'Contact.'}
				desc={'Reach out! Whether you want to get in touch for work or collaborations, or even just for a chat.'}
				page={'03'} />

			<Flex
			bg={'whiteAlpha.600'}
			boxShadow={'md'}
			borderRadius={'22px'}
			h={'20em'}>
				lol
			</Flex>
		</Flex>

	</Box>

  );

export default Contact