import style from '@/styles/Nav.module.css';
import { useMediaQuery } from '@hook';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const menuLink: string[] = [ 'Home', 'New', 'Popular', 'Trending', 'Categories' ];
 
const Nav: React.FC = () => {
	const matches: boolean = useMediaQuery('(max-width: 768px)');
	const [ toggle, setToggle ] = useState<boolean>(false);

	return (
		<nav className={[ style.nav, toggle ? style.en : style.cn ].join(' ')}>
			<div className={style.container}>
				<Link href={'/'}>
					<Image priority className={style.logo} alt={'logo'} src={'/svg/logo.svg'} width={512} height={512} />
				</Link>
				{
					matches && <button className={style.menu_toggler} onClick={() => setToggle(!toggle)}>
						<Image
							priority
							src={`/svg/${toggle ? 'icon-menu-close' : 'icon-menu'}.svg`}
							alt={`${toggle ? 'close menu' : 'open menu'}`}
							width={toggle ? 32 : 40}
							height={toggle ? 32 : 20}
						/>
					</button>
				}
				<aside className={[ style.menu, toggle ? style.em : style.cm ].join(' ')}>
					<ul>
						{
							menuLink.map((title, key) => <Link key={key} href={'/'} >{title}</Link>)
						}
					</ul>
				</aside>
			</div>
		</nav>
	);
};

export default Nav;