import {
    Divider,
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    chakra,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue,
    Grid, 
    GridItem,
    VStack,
    AspectRatio,
    HStack,
    Center,
    List, 
    ListIcon,
    ListItem,
    Spacer,
    shouldForwardProp
  } from '@chakra-ui/react';
import { SiReact, SiChakraui, SiJavascript, SiPython } from 'react-icons/si';
import { motion, useScroll, useTransform, isValidMotionProp } from "framer-motion";
import Parallax from './layouts/Parallax';
import { skillsContainer, subContainer, item, skillsItem, container } from './Variants/Variants';
import Head from 'next/head';
import { redirect } from 'next/dist/server/api-utils';


const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const About = () => {
    //const { scrollYProgress } = useScroll() 
    //const y1 = useTransform(scrollYProgress, [0, 300], [0, 200]);
    //const y2 = useTransform(scrollYProgress, [0, 300], [0, -100]);
  
    return( 

    


    
    <Container 
        position={'relative'}
        maxW={'9xl'} 
        px={'10em'}
        w={'100%'} 
        id='0' 
        pt='10em'
        pb='40em'>
        <Flex
        direction={'column'}
        gap={'10em'}>


			





					<Flex
					direction='row'
					bg='blue.100'
					borderColor={'blackAlpha.800'}
					borderLeftWidth={'9px'}>
						<Flex
						pl={'2em'}
						gap={2}
						justifyContent={'space-between'}
						direction='column'>
								<Heading
								fontSize={'7em'}> 
									About Me.
								</Heading>
								<Text
								w={'30em'}
								fontWeight={600}
								fontSize={'1.4em'}
								color={'blackAlpha.600'}>
									"fear != fate", a simple but meaningful mantra that I try to live by.
								</Text>
						</Flex>
						<Spacer/>
						{pageIndicator()}
					</Flex>
					<Flex
								position={'relative'}
								w={'100%'}
								justifyContent={'center'}
								direction={'column'}
								gap={'5em'}>
									<Flex
									direction={'row'}
									w={'100%'}
									gap={'7em'}
									position={'relative'}
									justifyContent={'center'}>						
										<Flex
											w={'20em'}
											h={'10em'}
											position={'relative'}
											direction={'column'}
											textAlign={'end'}>
												<Heading
												fontWeight={900}
												fontSize={45}>
													BACKGROUND
												</Heading>
												<Heading
												fontWeight={900}
												position={'relative'}
												textAlign={'end'}
												top={-7}>
													&#x5f;
												</Heading>
										</Flex>
										<Flex
										minW={'55em'}
										w={'55em'}
										bg={'whiteAlpha.600'}
										boxShadow={'md'}
										borderRadius={'20px'}>         
												<Flex
												w={'100%'}
													zIndex={1}
													variants={subContainer}>
														{backgroundInfo()}
														<Flex
														p={10}
														minW={'20em'}
														w={'40%'}>                            
															<Image
																fit='cover'
																borderRadius={'12px'}
																borderColor={'white'}
																borderWidth={'8px'}
																boxShadow={'md'}
																h={'100%'}
																w={'35em'}
																src={'https://i.imgur.com/7R4gnAa.jpg'}/>
														</Flex>
												</Flex>
										</Flex>
									</Flex>
									<Flex
									direction={'row'}
									w={'100%'}
									gap={'7em'}
									position={'relative'}
									justifyContent={'center'}>						
										<Flex
											w={'20em'}
											h={'10em'}
											position={'relative'}
											direction={'column'}
											textAlign={'end'}>
												<Heading
												fontWeight={900}
												fontSize={45}>
													SKILLS
												</Heading>
												<Heading
												fontWeight={900}
												position={'relative'}
												textAlign={'end'}
												top={-7}>
													&#x5f;
												</Heading>
										</Flex>
										<Flex
										minW={'55em'}
										w={'55em'}
										bg={'whiteAlpha.600'}
										boxShadow={'md'}
										borderRadius={'20px'}>         
												<Flex
												w={'100%'}
													zIndex={1}
													variants={subContainer}>
														{skillsInfo()}
												</Flex>
										</Flex>
									</Flex>

								</Flex>
                        </Flex>
        
    </Container>
    
)}



const pageIndicator = () => { 
	return ( 
		<Flex
		w={'100%'}
		bg={'red.100'}
		minW={'10px'}
		position={'relative'}
		direction="row"
		justifyContent={'flex-end'}	>
			<Flex
			w={'13em'}
			bg='gray.200'
			transform={'rotate(90deg)'}
			transformOrigin={'top left'}
			left={'100%'}
			justifyContent={'flex-end'}
			position={'absolute'}
			direction={'column'}>
				<Flex
				direction={'row'}
				position={'relative'}
				top={'1.5em'}
				left={'1rem'}
				alignItems={'flex-start'}>
					<Heading
					fontSize={25}
					fontWeight={900}>
						&larr;
					</Heading>
					<Spacer/>
				</Flex>
				<Center>
						<Heading
						fontSize={'4.5em'}
						fontWeight={900}
						pb={8}>
							02&thinsp;
						</Heading>
						<Heading
						color={'blackAlpha.500'}
						fontWeight={900}>
							_&thinsp;03
						</Heading>
				</Center>
				<Flex
				direction={'row'}
				position={'relative'}
				bottom={'3em'}
				right={'1rem'}
				alignItems={'flex-end'}>
					<Spacer/>
					<Heading
					fontSize={25}
					fontWeight={900}>
						&rarr;
					</Heading>
				</Flex>	
			</Flex>
	</Flex>

		
	)
}

const backgroundInfo = () => { 
    return ( 
        <Flex 
        as={motion.div}
        whileHover={{ scale: 1.025 }}
        direction={'row'}
        gap={10}
        w={'70%'}
        justifyContent='center'>
    
            {placeholderText()}

        </Flex>
    )
}


const selfPortrait = () => { 
    return ( 
            <Flex
            flex={1}
            w={'30em'}>
                    {pictureFrame('0%', '0%', '0%', '0%', 'https://i.imgur.com/7R4gnAa.jpg', 8, 'full', 'full')}
            </Flex>
    )
}

const skillsInfo = () => { 
    return (
        <Flex
		gap={'3em'}
		direction={'row'}>
			<Flex
            as={motion.div}
            whileHover={{ scale: 1.025 }}
            colSpan={2}
            position='relative'
            flex={1}>
           		{skillText()}
				<Flex
				p={10}
				w={'100%'}>
					<Center>
						<ChakraBox
						variants={skillsItem}>
							<Flex
							direction={'row'}
							gap={10}>
								{skillList(4)}
								{skillList(4)}
								{skillList(4)}
								{skillList(4)}
							</Flex> 
						</ChakraBox>   
					</Center> 
				</Flex> 
        	</Flex>

		</Flex>
    )
}

//<Heading as={'u'}>
//  A few projects&nbsp;&nbsp;&nbsp;&nbsp;
//</Heading>


const placeholderText = () => { 
    return (
        <Flex
        p={'3em'}
        direction={'column'}>
            <ChakraBox
            variants={item}>
            <Text
                variants={item}
                as={'p'}
                fontSize={15}
                fontWeight={'600'}>
                I'm a recent Computer Science graduate from <b>McMaster University</b> with a BaSc. degree. <br/><br/> 
                My initial interest in web development came around 2017 when I had my first real introduction to making a website using nothing more than HTML, CSS, and JS. Soon after that I fiddled with IOS and Android app development. Cross platform programming presented a challenge and so naturally soon after that I picked up React Native development.   
                When I'm not developing something I'm always in the pursuit of some of the best dan-dan noodles in the area (Szechuan Noodle Bowl anyone?), or on the quest for an endgame mechanical keyboard. The latter of which by now I can say is a paradox. Something about the style of my apps and why I ended up using rounded corners and dropshadows for a long time. 
                Currently I'm <b>looking for new opportunities</b> as a developer!
            </Text>
            </ChakraBox>
        </Flex>

    )
}

const skillText = () => { 
    return ( 
            <Flex
            py={10}
			pl={10}
			pr={'1em'}
            direction={'column'}>
                <ChakraBox
                variants={item}>
                </ChakraBox>
                <ChakraBox
                variants={item}>
                <Text
                    fontSize={15}
                    as={'p'}
                    fontWeight={'600'}>
                    Filler text filler text, this is my strength, filler text. I love that the field is ever evolving, and I find it fun to familiarize myself with new things on an ongoing basis! That said, here's a list of things I've used the most over time:  
                </Text>
                </ChakraBox>

            </Flex>
    )
}

const skillList = (items) => { 
    // get from mdx here
    const name = 'React'
    const ic = SiReact

    // temp icons for test 
    const name2 = 'Python'
    const name3 = 'JS'
    const name4 = 'Chakra'
    const ic2 = SiPython
    const ic3 = SiJavascript
    const ic4 = SiChakraui

    return( 
        <List spacing={8}>
        {skillItem(name, ic)}
        {skillItem(name2, ic2)}
        {skillItem(name3, ic3)}
        {skillItem(name4, ic4)}
    	</List>        
    )
}

const skillItem = (name, ic) => { 
    return(
        <ListItem>
            <Flex
			w={'105%'}
			alignItems={'center'}
            direction={'row'}>
                <ListIcon as={ic} color='black.500'/>
                <Text
					textAlign={'center'}
                    fontSize={15}
                    fontWeight={'bold'}>
                    &thinsp;{name}
                </Text>
            </Flex>
        </ListItem>
    )
}

const pictureFrame = (top, left, bottom, right, url, ind, w, h) => {
    return (
            <Flex
                as={motion.div}
                whileHover={{ scale: 1.025 }}
                flex={1}
                position={'relative'}>
                <Flex  
                    overflow={'hidden'}
                    h={'30em'}>
                <Image
                    filter={'grayscale(70%)'}
                    borderRadius={'12px'}
                    boxShadow={'md'}
                    borderWidth={'5em'}
                    zIndex={ind}
                    w={w}
                    h={h}
                    position={'absolute'}
                    top={top}
                    left={left}
                    bottom={bottom}
                    right={right}
                    fit={'cover'}
                    align={'center'}
                    src={url}/>
                </Flex>
            </Flex>
    )
    
}




//{stackedImage('45%', '30%', 'https://staticg.sportskeeda.com/editor/2022/02/af653-16442505538786-1920.jpg', 7, '11em', '11em')}
//{stackedImage('79%', '60%', 'https://i.imgur.com/P9IVqkS.jpeg', 8, '7em', '7em')}


export default About


