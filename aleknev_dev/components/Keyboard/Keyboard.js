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
    Center,
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
import { Environment, Stage, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { AnimatePresence, motion, useScroll, isValidMotionProp } from 'framer-motion'
import { heroKeyboard } from '../../styles/Variants';

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
    let fov = 100
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
      fov = 45
    }
    else if (bp == 'xl'){ 
      fov = 55
    }
    else if (bp == '2xl'){ 
      fov = 45
    }

    return (
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
            dpr={[1, 2]}
            >
            <PerspectiveCamera 
            position={[0, 0, 1]} 
            fov={fov} 
            onUpdate={self => self.updateProjectionMatrix()}
            makeDefault={true} />
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
              enableRotate={bp == 'base' || bp == 'sm' ? false : true} 
            />
          </Canvas>
        </Flex>
        <Flex
          position={'absolute'}
          w={'100%'}
          h={'100%'}
          top={{ sm: '25%', md: '15%', lg: '0%', xl: '0%', '2xl': '-20%' }}
          left={{ sm: '0%', md: '0%', lg: '0%', xl: '50%', '2xl': '45%' }}>
          <Image
            fit='cover'
            h={{ sm: '35em', md: '50em', lg: '50em', xl: '50em', '2xl': '70em' }}
            w={{ sm: '35em', md: '50em', lg: '50em', xl: '50em', '2xl': '70em' }}
            src={'hero.webp'} />
        </Flex>
      </ChakraBox>
    )
}

/*
const Camera = (props) => {
  const ref = useRef();
  const set = useThree((state) => state.set);
  useEffect(() => void set({ camera: ref.current }), []);
  useFrame(() => ref.current.updateMatrixWorld());
  return <perspectiveCamera ref={ref} {...props} />;
};

*/

const Model = (innerLoading) => {
    const loadingStates = innerLoading.innerLoading.outerLoading.states 
    const gltf = useLoader(GLTFLoader, "scene.gltf");
    loadingStates.setLoading(false)
//    const { viewport } = useThree()
    return (
      <primitive object={gltf.scene} scale={1} />
    )
  }

export default Keyboard