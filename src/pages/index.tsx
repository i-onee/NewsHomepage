import { useFetch, useMediaQuery } from '@hook';
import style from '@/styles/Main.module.css';
import { Inter } from '@next/font/google';
import { Nav } from '@components';
import { Fragment } from 'react';
import Image from 'next/image';
import Head from 'next/head';

const inter = Inter({ subsets: [ 'latin' ] });
const classList = (...value: string[]) => [ ...value ].join(' ');

const Home: React.FC = () => {
	const data = useFetch('http://localhost:3000/api/posts');
	const matches: boolean = useMediaQuery('(max-width: 768px)');

	return (
		<main className={inter.className}>
			<Head>
				<title>News</title>
				<link rel={'icon'} href={'/img/favicon-32x32.png'} />
			</Head>

			<Nav />
			<section className={style.container}>
				<section className={classList(style.area, style.area_1)}>
					<Image priority width={512} height={512} alt={'web-3.jpg'} src={`/img/image-web-3-${matches ? 'mobile' : 'desktop'}.jpg`}/>
				</section>

				<section className={classList(style.area, style.area_2)}>
					<h1>New</h1>
					{
						data?.filter(item => item.new).map((item, key) => {
							const itemLength = data?.filter(item => item.new).length;
							return (
								<Fragment key={key}>
									<article>
										<h2>{item.title}</h2>
										<p>{item.content}</p>
									</article>
									{ key !== itemLength - 1  && <hr/> }
								</Fragment>
							);
						})
					}
				</section>

				<section className={classList(style.area, style.area_3)}>
					<h1>The Bright Future of Web 3.0?</h1>
				</section>

				<section className={classList(style.area, style.area_4)}>
					<p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
					<button>READ MORE</button>
				</section>

				<section className={classList(style.area, style.area_5)}>
					{
						data?.filter(item => !item.new).map((item, key) => {
							return (
								<article key={key}>
									<Image priority width={512} height={512} alt={'web-3.jpg'} src={`${item.image}`} />
									<figure>
										<span>{`0${key + 1}`}</span>
										<h3>{item.title}</h3>
										<p>{item.content}</p>
									</figure>
								</article>
							);
						})
					}
				</section>
			</section>
		</main>
	);
};

export default Home;