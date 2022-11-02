import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'

import { extendTheme } from '@chakra-ui/react'
import { Global } from '@emotion/react'

import '../styles/styles.css'
const theme = extendTheme({
  fonts: {
    heading: `'sfheavy'`,
    body: `'sfbold'`,
  },
})

function MyApp({ Component, pageProps, router }) {
  return (
    <>

    <ChakraProvider 
    theme={theme}>
        <Component {...pageProps} key={router.route} /> 
    </ChakraProvider>
    </>
  ) 
}

export default MyApp