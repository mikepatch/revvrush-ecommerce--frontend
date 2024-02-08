export type ProductItemType = {
	id: string;
	category: string;
	name: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
	};
	bulletPoints?: {
		label: string;
		value: string;
		id: string;
	}[];
	suitableFor?: string[];
};
