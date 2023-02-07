// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type models = {
	title?: string,
	content?: string,
	image?: string,
	new?: boolean
}

const data: models[] = [
	{
		title: 'Reviving Retro PCs',
		content: 'What happens when old PCs are given modern upgrades?',
		image: '/img/image-retro-pcs.jpg',
		new: false
	},
	{
		title: 'Top 10 Laptops of 2022',
		content: 'Our best picks for various needs and budgets.',
		image: '/img/image-top-laptops.jpg',
		new: false
	},
	{
		title: 'The Growth of Gaming',
		content: 'How the pandemic has sparked fresh opportunities.',
		image: '/img/image-gaming-growth.jpg',
		new: false
	},
	{
		title: 'Hydrogen VS Electric Cars',
		content: 'Will hydrogen-fueled cars ever catch up to EVs?',
		new: true
	},
	{
		title: 'The Downsides of AI Artistry',
		content: 'What are the possible adverse effects of on-demand AI image generation?',
		new: true
	},
	{
		title: 'Is VC Funding Drying Up?',
		content: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
		new: true
	}
];

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	res.status(200)
		.json(data);
};

export default handler;