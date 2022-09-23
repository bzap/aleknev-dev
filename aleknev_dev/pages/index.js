import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Box, Center } from '@chakra-ui/react'
import Layout from './components/layouts/main'
import Hero from './components/Hero'
import Header from './components/Header'
import Projects from './components/Projects/Projects'

const Home = () => { 
  return ( 
    <Layout>
        <Header/>
        <Hero/>
        <Projects/>
    </Layout>

  )
}



export default Home
