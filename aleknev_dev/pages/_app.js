import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '../styles/styles.css';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

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
				<Head>
					<title>Aleknev</title>
				</Head>
				<Component {...pageProps} key={router.route} />
				<Analytics />
			</ChakraProvider>
		</>
	)
}

export default MyApp