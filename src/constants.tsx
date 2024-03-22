import { type Route } from "next";

import { type NavItemType } from "@/types";

export const PRODUCTS_ON_PAGE = 4;

export const FOOTER_LEGAL_NAV_ITEMS: NavItemType[] = [
	{ id: "privacy-policy", href: "/static/privacy-policy" as Route, label: "Privacy Policy" },
	{
		id: "terms-of-service",
		href: "/static/terms-of-service" as Route,
		label: "Terms of Service",
	},
];
