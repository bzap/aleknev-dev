import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Box, Center } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Projects from '../components/Projects/Projects'
import About from '../components/About'
import Contact from '../components/Contact'
import Stripes from '../components/Stripes'
import AnimatedTabs from '../components/Tabs/Tabs'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState, useEffect, useRef } from 'react'
import { tabs } from "../public/data/TabContent"
import { AnimatePresence, motion, useScroll, isValidMotionProp, useInView } from 'framer-motion'
import LoadingWrapper from '../components/LoadingWrapper'
import disableScroll from 'disable-scroll';

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
  const [contactView, setContactView] = useState(false)
  const [isLoading, setLoading] = useState(true)

  const aboutRef = useRef(null)
  const isShowAbout = useInView(aboutRef)

  const contactRef = useRef(null)
  const isShowContact = useInView(contactRef)

  const projRef = useRef(null)
  const isShowProj = useInView(projRef)

  const heroRef = useRef(null)
  const isShowHero = useInView(heroRef)





  useEffect(() => {
    
    if (isShowHero && !isLoading){ 
      disableScroll.off()
    }
  
    if (!isShowAbout && !isShowProj && !isShowContact && !isShowHero ) {
      disableScroll.on()
    }

    if (isShowHero){ 
      setHeroView(true)
      setAboutView(false)
    }

    if (isShowAbout) {
      setAboutView(isShowAbout)
      setProjView(false)
      setHeroView(false)
      }

    if (isShowProj) {
      setAboutView(false)
      setProjView(isShowProj)
      setContactView(false)
      /*
      console.log('---------')
      console.log(aboutView, 'about')
      console.log(projView, 'proj')
      console.log(contactView, 'contact')
      console.log('---------') */
    }
    if (isShowContact) {
      setProjView(false)
      setContactView(isShowContact)
      /*
      console.log('---------')
      console.log(aboutView, 'about')
      console.log(projView, 'proj')
      console.log(contactView, 'contact')
      console.log('---------') */
    }



  }, [isShowAbout, isShowProj, isShowContact, isShowHero])




  return ( 
    <Layout
     >
      <AnimatePresence 
      
      mode='wait'>
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
                           setProjView, setContactView, heroView, contactView}}}/>
        <Hero loading={{states: {isLoading, setLoading}}} ref={heroRef}/>
        <About ref={aboutRef}/>
        <Projects ref={projRef}/>
        <Contact ref={contactRef}/>
        <Footer/>
    </Layout>

  )
}


export default Home
