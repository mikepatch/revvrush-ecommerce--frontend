import { type Route } from "next";

export type NavItemType = {
	id: string;
	href: Route;
	label: string;
	icon?: React.ReactNode;
};

export type CartItemType = {
	productId: string;
	cartItemId: string;
	name: string;
	image: string;
	quantity: number;
	price: number;
	total: number;
};

export type CartTableDataType = {
	headers: string[];
	rows: CartItemType[];
	footer: { totalPrice: number };
};

export type BannerSliderItemType = {
	img: string;
	name: string;
	href: Route;
};
