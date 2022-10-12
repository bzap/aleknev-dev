
import { useMemo, useEffect, useState } from "react";
import { tabs } from '../../public/data/TabContent'
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

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const MobileTabs = () => {
    const [selectedTab, setSelectedTab] = useState(tabs[3])
    console.log('in use')
    return (
        <Flex
            pt={'1.5em'}
            pb={'1.5em'}
            justify={'flex-end'}>
            <Flex
                direction={'column'}
                gap={'2em'}>
                {tabs.map((item, idx) => (
                    <Link
                        key={idx}
                        activeClass="active"
                        to={idx.toString()}
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={2200}>
                        <Center
                            className={item === selectedTab ? 'selected' : ''}
                            onClick={() => {
                                setSelectedTab(item)
                            }}>
                            <ChakraBox
                                as={motion.div}
                                cursor={'pointer'}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.90}}>
                                <Center>
                                    <Text
                                        fontWeight={'700'}
                                        color='blackAlpha.800'>
                                        {item.label}
                                    </Text>
                                </Center>
                            </ChakraBox>

                        </Center>
                    </Link>
                ))}
            </Flex>
        </Flex>
    )
}

export default MobileTabs