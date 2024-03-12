import { type Route } from "next";

export type NavItemType = {
	id: string;
	href: Route;
	label: string;
	icon?: React.ReactNode;
};
