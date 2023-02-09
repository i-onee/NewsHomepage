import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import { useEffect } from 'react';
import '@/styles/global.css';

const inter = Inter({ subsets: [ 'latin' ] });

const App = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		const __next = document.querySelector('#__next');

		__next?.classList.add(`${inter.className}`);
	}, []);

	return <Component {...pageProps} />;
};

export default App;