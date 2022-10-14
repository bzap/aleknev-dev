import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/Fonts/Fonts'

import { extendTheme } from '@chakra-ui/react'
import { Global } from '@emotion/react'

import "@fontsource/fira-mono"
import "@fontsource/fjalla-one"
import "@fontsource/fanwood-text"
import "@fontsource/source-sans-pro"
import "@fontsource/azeret-mono"
//import '../styles/styles.css'
const theme = extendTheme({
  fonts: {
    heading: `'SF Mono', ''sf_monomedium''`,
    body: `'SF Mono', 'sf_monomedium'`,
  },
})

function MyApp({ Component, pageProps, router }) {
  return (
    <>

    <ChakraProvider theme={theme}>
        <Component {...pageProps} key={router.route} /> 
    </ChakraProvider>
    </>
  ) 
}

export default MyApp