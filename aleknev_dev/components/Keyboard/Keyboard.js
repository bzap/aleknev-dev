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
    Center,
	IconProps,
	useColorModeValue,
  } from '@chakra-ui/react';
import Head from 'next/head';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Environment, Stage, OrbitControls } from "@react-three/drei";

const Keyboard = ({props}) => {
    return (
    <Flex
    w={'100%'}>
        <Flex
        position={'relative'}
        zIndex={10}
        w={'100%'}>
          <Canvas
            shadows
            dpr={[1, 2]}
            camera={props !== undefined && ({ fov: props.newFov })}>
            <Suspense fallback={null}>
              <Stage preset="rembrandt" intensity={1} environment="city">
                {props !== undefined && (
                  <Model innerLoading={props} />
                )}
              </Stage>
            </Suspense>
            <OrbitControls
              makeDefault
              autoRotate
              enableZoom={false}
            />
          </Canvas>
        </Flex>
        <Flex
        position={'absolute'}
        w={'100%'}
        h={'100%'}
        top={{ sm: '25%', md: '15%', lg: '0%', xl: '0%', '2xl': '-20%' }}
        left={{sm: '0%', md: '0%', lg: '40%', xl: '50%', '2xl': '45%'}}>
          <Image
            filter={'grayscale(20%)'}
            fit='cover'
            h={{ sm: '35em', md: '50em', lg: '50em', xl: '50em', '2xl': '70em' }}
            w={{ sm: '35em', md: '50em', lg: '50em', xl: '50em', '2xl': '70em' }}
            src={'heroblur2.png'} />
        </Flex>
    </Flex>
    )
}

const Model = (innerLoading) => {
    const loadingStates = innerLoading.innerLoading.outerLoading.states 
    const gltf = useLoader(GLTFLoader, "scene.gltf");
    loadingStates.setLoading(false)
    return (
        <primitive object={gltf.scene} scale={1} />
    )
  }

export default Keyboard