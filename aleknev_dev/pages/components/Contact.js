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



const Contact = () => ( 
	<Container
	id='2'
	maxW={'7xl'}
	direction={'column'}
	flex={1}
	px='7em'
	pt={{ base: 20, md: '30em' }}
	pb={{ base: 20, md: '40em' }}>
		<Heading>
            temp contact component

        </Heading>
	</Container>

  );

export default Contact