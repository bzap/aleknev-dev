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
  chakra,
	IconButton,
	createIcon,
	IconProps,
	useColorModeValue,
  shouldForwardProp,
  useBreakpoint,
  } from '@chakra-ui/react';
import Head from 'next/head';
import { useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef, useEffect, useState } from "react"
import { Bounds, Environment, Stage, OrbitControls, PerspectiveCamera, Center } from "@react-three/drei";
import { AnimatePresence, motion, useScroll, isValidMotionProp } from 'framer-motion'
import { heroKeyboard, heroGradient, keyboardContainer } from '../../styles/Variants';
import * as THREE from 'three';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});



const Keyboard = ({props}) => {
   const bp = useBreakpoint() 
   /*
    const [fov, setFov] = useState(false)
    useEffect(() => {
      const interval = setInterval(() => set((state) => !state), 1000)
      return () => clearInterval(interval)
    }, []) */
    let fov = 20
    if (bp == 'base'){ 
      fov = 60
    }
    else if (bp == 'sm'){ 
      fov = 50
    }
    else if (bp == 'md'){ 
      fov = 45
    }
    else if (bp == 'lg'){ 
      fov = 35
    }
    else if (bp == 'xl'){ 
      fov = 55
    }
    else if (bp == '2xl'){ 
      fov = 45
    } 
    return (
      <ChakraBox
      bg={'green.100'}
        w={'100%'}
        h={'100%'}
        as={motion.div}
        variants={keyboardContainer}> 
      <ChakraBox
          w={'100%'}
          h={'100%'}
        as={motion.div}
        variants={heroKeyboard}> 	
        <Flex
        position={'relative'}
        zIndex={10}
        h={'100%'}
        w={'100%'}>
          <Canvas
              dpr={[1, 2]}>

            <Suspense fallback={null}>
                  {props !== undefined && (
                    
                    <Stage
                      preset="rembrandt"
                      intensity={1}
                      environment="city">
                      {props !== undefined && (
                      <Bounds 
                        fit 
                        clip 
                        observe 
                        margin={bp == 'xl' ? 0.75
                                : bp == '2xl' ? 0.8 
                                : 1.1}>
                          <Model innerLoading={props} />
                      </Bounds>
                      )}
                    </Stage>  
                    
                  )}
            </Suspense>
            <OrbitControls
              target={[0,0,0]}
              autoRotate
              makeDefault
              enableZoom={false}/> 
          </Canvas>
        </Flex>

      </ChakraBox>

      <ChakraBox
          w={'100%'}
          variants={heroGradient}
          as={motion.div}
          position={'absolute'}
          h={'100%'}
          top={{ sm: '25%', md: '15%', lg: '0%', xl: '0%', '2xl': '0%' }}
          left={{ sm: '0%', md: '0%', lg: '0%', xl: '50%', '2xl': '55%' }}>
          <Image
            fit='cover'
            h={{ base: '0em', sm: '0em', md: '0em', lg: '0em', xl: '50em', '2xl': '50em' }}
            w={{ base: '0em', sm: '0em', md: '0em', lg: '0em', xl: '50em', '2xl': '50em' }}
            src={'hero.webp'} />
        </ChakraBox>

        </ChakraBox>
    )
}



const Model = (innerLoading) => {
    const loadingStates = innerLoading.innerLoading.outerLoading.states 
    const gltf = useLoader(GLTFLoader, "/model/keyboard11.gltf");
    loadingStates.setLoading(false)
    return (
      <primitive object={gltf.scene} scale={1} />
    )
  }

export default Keyboard