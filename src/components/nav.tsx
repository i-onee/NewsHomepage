import style from '@/styles/Nav.module.css';
import { useMediaQuery } from '@hook';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const menuLink: string[] = [ 'Home', 'New', 'Popular', 'Trending', 'Categories' ];
const classList = (...value: string[]) => [ ...value ].join(' ');

const Nav: React.FC = () => {
	const matches: boolean = useMediaQuery('(max-width: 768px)');
	const [ toggle, setToggle ] = useState<boolean>(false);

	return (
		<nav className={classList(style.nav, toggle ? style.en : style.cn)}>
			<div className={style.container}>
				<Link href={'/'}>
					<Image priority className={style.logo} alt={'logo'} src={'/svg/logo.svg'} width={512} height={512} />
				</Link>
				{
					matches
						&&
					<button className={classList(style.menu_t, toggle ? style.menu_t_e : style.menu_t_c)} onClick={() => setToggle(!toggle)}>
						<Image priority src={`/svg/${toggle ? 'icon-menu-close' : 'icon-menu'}.svg`} alt={`${toggle ? 'close menu' : 'open menu'}`} width={toggle ? 32 : 40} height={toggle ? 32 : 20}/>
					</button>
				}
				<aside className={classList(style.menu, toggle ? style.em : style.cm)}>
					<ul>
						{ menuLink.map((title, key) => <Link key={key} href={'/'} >{title}</Link>)}
					</ul>
				</aside>
			</div>
		</nav>
	);
};

export default Nav;