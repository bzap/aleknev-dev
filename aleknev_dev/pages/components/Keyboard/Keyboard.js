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
    <Canvas 
    shadows 
    dpr={[1, 2]} 
    camera={{ fov: 40}}>
      <Suspense fallback={null}>
        <Stage preset="rembrandt" intensity={1}  environment="city">
        false
          <Model />
        false
        </Stage>
      </Suspense>
      <OrbitControls 
      makeDefault 
      autoRotate
      enableZoom={false}
       />
    </Canvas>
    )
}


const Model = () => {
    const gltf = useLoader(GLTFLoader, "scene.gltf");
    return (
        <primitive object={gltf.scene} scale={1} />
    )
  }

export default Keyboard