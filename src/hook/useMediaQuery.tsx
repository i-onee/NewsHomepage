import { useEffect, useState } from 'react';

const useMediaQuery = (query: string): boolean => {
	const [ match, setMatch ] = useState<boolean>(false);

	useEffect(() => {
		const media: MediaQueryList = window.matchMedia(query);
		if (media.matches !== match) setMatch(media.matches);

		const listen = () => setMatch(media.matches);
		window.addEventListener('resize', listen);

		return () => window.removeEventListener('resize', listen);
	}, [ match, query ]);

	return match;
};

export default useMediaQuery;