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
import { BoxGeometry, Mesh, MeshStandardMaterial } from 'three';

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
      <Flex
        h={'100%'}
        w={{ base: '100%', sm: '100%', md: '100%', lg: '100%', xl: '65%', '2xl': '65%'}}
        justifyContent={'center'}
        alignItems={'center'}>
        <ChakraBox
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
                        intensity={3}
                        environment="park">
                        {props !== undefined && (
                        <Bounds 
                          fit 
                          clip 
                          observe 
                          margin={bp == 'xl' ? 0.40
                                  : bp == '2xl' ? 0.55
                                  : 1}>
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
            top={{ sm: '25%', md: '15%', lg: '0%', xl: '0%', '2xl': '5%' }}
            left={{ sm: '0%', md: '0%', lg: '0%', xl: '60%', '2xl': '65%' }}>
            <Image
              fit='cover'
              h={{ base: '0em', sm: '0em', md: '0em', lg: '0em', xl: '40em', '2xl': '40em' }}
              w={{ base: '0em', sm: '0em', md: '0em', lg: '0em', xl: '40em', '2xl': '40em' }}
              src={'/gradients/hero.png'} />
          </ChakraBox>
          </ChakraBox>
      </Flex>
    )
}

const Model = (innerLoading) => {
    const loadingStates = innerLoading.innerLoading.outerLoading.states 
    const gltf = useLoader(GLTFLoader, "/model/keyboard15.glb");
    loadingStates.setLoading(false)
    return (
      <mesh>
        <primitive object={gltf.scene} scale={1} />
      </mesh>
    )
  }

export default Keyboard