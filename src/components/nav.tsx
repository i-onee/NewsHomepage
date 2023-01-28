import styles from '@/styles/Nav.module.css'
import {useState} from 'react'
import { useMediaQuery } from '@hook'
import Image from 'next/image'
import Link from 'next/link'

interface Link {
	link: string;
	title: string;
}

const menu: Link[] = [
	{link: '', title: 'Home'},
	{link: '', title: 'New'},
	{link: '', title: 'Populer'},
	{link: '', title: 'Trending'},
	{link: '', title: 'Categories'}
]


const Nav: React.FC = () => {
	const matches: boolean = useMediaQuery('(max-width: 768px)')

	return (
		<nav>
			
		</nav>
	)
}

export default Nav

