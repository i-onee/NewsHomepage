import { useState, useEffect } from 'react';

interface Posts {
	title?: string
	content?: string
	image?: string
	new?: boolean
}

const useFetch = (url: string) => {
	const [ data, setData ] = useState<Posts[] | null>(null);

	useEffect(() => {
		(async () => {
			const req = await fetch(url);
			const res = await req.json();
			setData(res);
		})();

	}, [ url ]);

	return data;
};

export default useFetch;