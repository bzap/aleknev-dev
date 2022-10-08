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

const Keyboard = () => {
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
            camera={{ fov: 50 }}>
            <Suspense fallback={null}>
              <Stage preset="rembrandt" intensity={1} environment="city">
                <Model/>
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
        maxW={'full'}
        w={'100%'}>
          <Image
            filter={'grayscale(20%)'}
            fit='cover'
            h={'100%'}
            w={'100%'}
            src={'heroblur2.png'} />
        </Flex>
    </Flex>
    )
}


const Model = () => {
    const gltf = useLoader(GLTFLoader, "scene.gltf");
    return (
        <primitive object={gltf.scene} scale={1} />
    )
  }

export default Keyboard