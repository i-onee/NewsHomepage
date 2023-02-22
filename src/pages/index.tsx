import { useFetch, useMediaQuery } from '@hook';
import style from '@/styles/Main.module.css';
import { Fragment } from 'react';
import { Nav } from '@components';
import Image from 'next/image';
import Head from 'next/head';

const classList = (...value: string[]) => [ ...value ].join(' ');

const Home: React.FC = () => {
	const data = useFetch('https://ione-newshomepage.vercel.app/api/posts');
	const matches: boolean = useMediaQuery('(max-width: 768px)');

	const dataFilter = (v: boolean) => data?.filter(i => v === i.new);

	return (
		<Fragment>
			<Head>
				<title>News_Homepage</title>
				<link rel={'icon'} href={'/img/favicon-32x32.png'} />
				<meta name='description' content='news newshomepage ione ionenews ionenewshomepage'/>
			</Head>
			<Nav />
			<main className={style.container}>
				<section className={classList(style.area, style.area_1)}>
					<Image priority width={1200} height={340} alt={matches ? 'Web 3 mobile' : 'Web 3 desktop'} src={`/img/image-web-3-${matches ? 'mobile' : 'desktop'}.jpg`}/>
				</section>

				<section className={classList(style.area, style.area_2)}>
					<h1>new</h1>
					{
						dataFilter(true)?.map((i, k) => {
							return <Fragment key={k}>
								<article>
									<h2>{i.title}</h2>
									<p>{i.content}</p>
								</article>
								{k !== dataFilter(true)!.length - 1 && <hr />}
							</Fragment>;
						})
					}
				</section>

				<section className={classList(style.area, style.area_3)}>
					<h1>The Bright Future of Web 3.0?</h1>
				</section>

				<section className={classList(style.area, style.area_4)}>
					<p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
					<button>Read More</button>
				</section>

				<section className={classList(style.area, style.area_5)}>
					{
						dataFilter(false)?.map((i, k) => {
							return <article key={k}>
								<Image alt={'x'} src={`${i.image}`} width={110} height={135} />
								<aside>
									<h2>{`0${k + 1}`}</h2>
									<h3>{i.title}</h3>
									<p>{i.content}</p>
								</aside>
							</article>;
						})
					}
				</section>
			</main>
		</Fragment>
	);
};

export default Home;