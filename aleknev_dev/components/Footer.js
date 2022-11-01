import React, { useState } from 'react'
import { Center, Image, Icon, Collapse, Link, IconButton, useDisclosure, chakra, shouldForwardProp, Divider, Heading, Flex, Stack, Container, Button, Text, Box, Spacer, ScaleFade, transition, useBreakpoint } from '@chakra-ui/react'
import AnimatedTabs from './Tabs/Tabs'
import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import MobileTabs from './Tabs/MobileTabs';
import { background, navContainer } from '../styles/Variants'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { FaGithubAlt } from 'react-icons/fa'

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Footer = () => {
    return (
        <Container
            w={'100%'}
            h={'100%'}
            p={0}
            position={'relative'}
            zIndex={50}
            maxW={'100%'}>
            <Flex

                w={'100%'}
                justifyContent={'center'}>
                <ChakraBox
                    pt={'15px'}
                    as={motion.div}
                    pb={'1em'}
                    backdropFilter='auto'
                    backdropBlur='8px'
                    position='relative'
                    bottom={0}
                    borderRadius={'12px'}
                    justifyContent={'center'}>
                        <Flex
                            justifyContent={'center'}
                            direction={'row'}
                            alignItems={'center'}>
                                <Icon
                                    position={'relative'}
                                    alignItems={'center'}
                                    color={'blackAlpha.400'}
                                    as={BsFillLightningChargeFill} />
                                <Text
                                position={'relative'}
                                color={'blackAlpha.400'}
                                fontSize={16}>
                                    &nbsp;Designed and developed by Linas&nbsp;
                                </Text>
                                <Icon
                                    position={'relative'}
                                    alignItems={'center'}
                                    color={'blackAlpha.400'}
                                    as={BsFillLightningChargeFill} />
                        </Flex>
                        <Link 
                            style={{ 'textDecoration': 'none' }}
                            href={'https://github.com/bzap'}
                            isExternal>
                            <ChakraBox
                                position={'relative'}
                                as={motion.div}
                                h={'container'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.99 }}>
                                    <Flex
                                    position={'relative'}
                                    w={'auto'}
                                    justifyContent={'center'}
                                    direction={'row'}
                                    alignItems={'center'}>
                                        <Icon
                                            position={'relative'}
                                            alignItems={'center'}
                                            color={'blackAlpha.400'}
                                            as={FaGithubAlt} />
                                        <Text
                                        position={'relative'}
                                        color={'blackAlpha.400'}
                                        fontSize={16}>
                                            &nbsp;Site Repo&nbsp;
                                        </Text>
                                        <Icon
                                            position={'relative'}
                                            alignItems={'center'}
                                            color={'blackAlpha.400'}
                                            as={FaGithubAlt} />
                                    </Flex>
                            </ChakraBox>
                        </Link>
                </ChakraBox>

            </Flex>
        </Container>
    )
}

export default Footer