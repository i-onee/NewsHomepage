import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import '@/styles/global.css'

const inter = Inter({ subsets: [ 'latin' ] });

const App = ({ Component, pageProps }: AppProps) => {
	return ( <Component {...pageProps}/> )
}

export default App