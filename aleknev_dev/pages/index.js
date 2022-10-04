import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Box, Center } from '@chakra-ui/react'
import Layout from './components/layouts/main'
import Hero from './components/Hero'
import Header from './components/Header'
import Projects from './components/Projects/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Stripes from './components/Stripes'
import AnimatedTabs from './components/Tabs/Tabs'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState, useEffect } from 'react'
import { tabs } from "./components/Tabs/TabContent"
import { motion, useScroll } from 'framer-motion'
import Stripesv2 from './components/Stripesv2'


 

const Home = () => { 


  const [aboutView, setAboutView] = useState(false)
  const [projView, setProjView] = useState(false)
  const [heroView, setHeroView] = useState(true)
  const [homeView, setHomeView] = useState(true)
  const [contactView, setContactView] = useState(false)

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
        
        <Header pos={{views:{aboutView, setAboutView, projView, 
                           setProjView, setContactView, heroView, homeView, contactView}}}/>
        
        <Hero />
        <About/>
        <Projects/>
        <Contact/>
        
    </Layout>

  )
}

export default Home
