import React, { useState } from 'react'
import { Center, Icon, Collapse, Link, IconButton, useDisclosure, chakra, shouldForwardProp, Divider, Heading, Flex, Stack, Container, Button, Text, Box, Spacer, ScaleFade, transition, useBreakpoint } from '@chakra-ui/react'
import AnimatedTabs from './Tabs/Tabs'
import { AnimatePresence, motion, isValidMotionProp } from "framer-motion";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import MobileTabs from './Tabs/MobileTabs';
import { background, navContainer } from '../styles/Variants'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import { SiGithub } from 'react-icons/si'

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Footer = () => {
    return (
        <Container>
            <Flex
                justifyContent={'center'}>
                <ChakraBox
                    pt={'15px'}
                    as={motion.div}
                    pb={'1.5em'}
                    backdropFilter='auto'
                    backdropBlur='8px'
                    maxW={{ base: '88%', sm: '90%', md: '80%', lg: '76%' }}
                    position='relative'
                    w={'100%'}
                    bottom={0}
                    zIndex={200}
                    borderRadius={'12px'}
                    justifyContent={'center'}>
                        <Flex
                            justifyContent={'center'}
                            direction={'row'}
                            alignItems={'center'}>
                                <Icon
                                    position={'relative'}
                                    alignItems={'center'}
                                    color={'blackAlpha.500'}
                                    as={BsFillLightningChargeFill} />
                                <Text
                                position={'relative'}
                                color={'blackAlpha.500'}
                                fontSize={16}>
                                    &nbsp;Designed and developed by Linas&nbsp;
                                </Text>
                                <Icon
                                    position={'relative'}
                                    alignItems={'center'}
                                    color={'blackAlpha.500'}
                                    as={BsFillLightningChargeFill} />
                        </Flex>
                        <Link 
                            style={{ 'textDecoration': 'none' }}
                            href={'https://github.com/bzap'}
                            isExternal>
                        <ChakraBox
                            as={motion.div}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.99 }}
                            cursor={'pointer'}>
                                <Flex
                                justifyContent={'center'}
                                direction={'row'}
                                alignItems={'center'}>
                                    <Text
                                    position={'relative'}
                                    color={'blackAlpha.500'}
                                    fontSize={16}>
                                        Site Repo&nbsp;
                                    </Text>
                                    <Icon
                                        position={'relative'}
                                        alignItems={'center'}
                                        color={'blackAlpha.500'}
                                        as={SiGithub} />
                                </Flex>
                        </ChakraBox>
                        </Link>
                </ChakraBox>
            </Flex>
        </Container>
    )
}

export default Footer