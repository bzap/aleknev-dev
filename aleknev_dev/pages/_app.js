import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from './components/layouts/main'
import Fonts from './components/Fonts/Fonts'
import theme from './components/Fonts/theme'


function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
        <Component {...pageProps} key={router.route} /> 
    </ChakraProvider>
  ) 
}

export default MyApp