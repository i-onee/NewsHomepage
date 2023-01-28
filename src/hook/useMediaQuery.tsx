import { useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
	const getMatch = (query: string): boolean => {
		if (typeof window !== 'undefined')
		return window.matchMedia(query).matches
		return false;
	}

	const [ match, setMatch ] = useState<boolean>(getMatch(query))

	const handleChange = () => setMatch(getMatch(query))

	useEffect(() => {
		const matchMedia = window.matchMedia(query)

		handleChange();
		matchMedia.addEventListener('change', handleChange)

		return () => {
			matchMedia.removeEventListener('change', handleChange)
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ query ])
	return match
}

export default useMediaQuery