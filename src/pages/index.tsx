import { Inter } from '@next/font/google'
import { Nav } from '@components'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
	return (
		<>
			<Head>
				<title>News Homepage</title>
				<link rel="icon" href="/img/favicon-32x32.png" />
			</Head>

			<header>
				<Nav/>
			</header>
		</>
	);
}

export default Home;