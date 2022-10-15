import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Box, Center } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Projects from '../components/Projects/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Stripes from '../components/Stripes'
import AnimatedTabs from '../components/Tabs/Tabs'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState, useEffect } from 'react'
import { tabs } from "../public/data/TabContent"
import { AnimatePresence, motion, useScroll, isValidMotionProp } from 'framer-motion'
import LoadingWrapper from '../components/LoadingWrapper'
import {
  chakra,
  shouldForwardProp

} from '@chakra-ui/react';

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const Home = () => {
  const [aboutView, setAboutView] = useState(false)
  const [projView, setProjView] = useState(false)
  const [heroView, setHeroView] = useState(true)
  const [homeView, setHomeView] = useState(true)
  const [contactView, setContactView] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const { scrollY } = useScroll() 

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const isShowAbout = latest >= 1171 && latest < 3100
      const isShowProj = latest >= 3100 && latest < 5150
      const isShowHero = latest <  1170 
      const isShowHome = latest >  1171 
      const isShowContact = latest >= 5150
      
      if (isShowAbout !== aboutView) setAboutView(isShowAbout)
      if (isShowProj !== projView) setProjView(isShowProj)
      if (isShowHero !== heroView) setHeroView(isShowHero)
      if (isShowHome !== homeView) setHomeView(isShowHome)
      if (isShowContact !== contactView) setContactView(isShowContact)
    })
  }, [aboutView, projView, heroView, homeView, contactView])
  

  return ( 
    <Layout>
      <AnimatePresence mode='wait'>
        {isLoading && (
            <ChakraBox
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}>
                <LoadingWrapper/>
            </ChakraBox>
        )}
      </AnimatePresence>
        <Header pos={{views: {aboutView, setAboutView, projView, 
                           setProjView, setContactView, heroView, homeView, contactView}}}/>
        <Hero loading={{states: {isLoading, setLoading}}}/>
        <About/>
        <Projects/>
        <Contact/>
    </Layout>

  )
}


export default Home
