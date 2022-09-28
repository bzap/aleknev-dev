import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Box, Center } from '@chakra-ui/react'
import Layout from './components/layouts/main'
import Hero from './components/Hero'
import Header from './components/Header'
import Projects from './components/Projects/Projects'
import About from './components/About'
import AnimatedTabs from './components/Tabs/Tabs'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState } from 'react'

const Home = () => { 


  const [aboutView, setAboutView] = useState(false)
  const [projView, setProjView] = useState(false)
  const [heroView, setHeroView] = useState(true)
  const [homeView, setHomeView] = useState(false)

  useScrollPosition(({ prevPos, currPos }) => {
    const isShowAbout = -currPos.y >= 1171 && -currPos.y < 3100
    const isShowProj = -currPos.y >= 3100 
    const isShowHero = -currPos.y <  1170 
    const isShowHome = -currPos.y >  1171 

    if (isShowAbout !== aboutView) setAboutView(isShowAbout)
    if (isShowProj !== projView) setProjView(isShowProj)
    if (isShowHero !== heroView) setHeroView(isShowHero)
    if (isShowHome !== homeView) setHomeView(isShowHome)
  }, [aboutView, projView,, heroView, homeView])

  return ( 
    <Layout>
        <Header pos={{aboutView, projView, heroView, homeView}}/>
        <Hero/>
        <About/>
        <Projects/>
    </Layout>

  )
}

export default Home
