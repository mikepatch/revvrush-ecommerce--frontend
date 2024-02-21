"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import clsx from "clsx";

type ActiveLinkProps = {
	children: React.ReactNode;
	href: Route;
	className?: string;
	activeClassName?: string;
	target?: "_self" | "_blank";
	ariaLabel?: string;
};

export const ActiveLink = ({
	children,
	href,
	className = "",
	activeClassName = "",
	target = "_self",
	ariaLabel = "",
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive =
		pathname === href ||
		(pathname.startsWith("/products") && href === "/products") ||
		(pathname.startsWith("/product") && href === "/products");
	console.log(`Pathname: ${pathname}, href: ${href}, isActive: ${isActive}`);
	return (
		<Link
			aria-current={isActive ? "page" : undefined}
			href={href}
			className={clsx(className, isActive && activeClassName)}
			target={target}
			aria-label={ariaLabel}
		>
			{children}
		</Link>
	);
};
