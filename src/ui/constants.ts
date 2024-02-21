import { type Route } from "next";
import { type NavItemType } from "@/ui/types";

export const FOOTER_LEGAL_NAV_ITEMS: NavItemType[] = [
	{ id: "privacy-policy", href: "/static/privacy-policy" as Route, label: "Privacy Policy" },
	{
		id: "terms-of-service",
		href: "/static/terms-of-service" as Route,
		label: "Terms of Service",
	},
];

export const MAIN_NAV_ITEMS: NavItemType[] = [
	{ id: "home", href: "/", label: "Home" },
	{ id: "products", href: "/products", label: "All" },
];
