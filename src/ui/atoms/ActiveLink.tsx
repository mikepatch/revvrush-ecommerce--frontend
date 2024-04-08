"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { type Route } from "next";
import clsx from "clsx";

type ActiveLinkProps = {
	children: React.ReactNode;
	href: Route;
	className?: string;
	disabled?: boolean;
	activeClassName?: string;
	target?: "_self" | "_blank";
	ariaLabel?: string;
	searchParams?: string | null;
};

export const ActiveLink = ({
	children,
	href,
	className = "",
	disabled = false,
	activeClassName = "",
	target = "_self",
	ariaLabel = "",
	searchParams,
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const { categorySlug, pageNumber } = useParams();
	const isActive =
		pathname === href ||
		pathname === `${href}/${categorySlug as string}/${pageNumber as string}` ||
		(pathname.includes(href) && href !== "/");

	return (
		<Link
			aria-current={isActive ? "page" : undefined}
			href={`${href}${searchParams || ""}` as Route}
			className={clsx(className, isActive && activeClassName)}
			target={target}
			aria-label={ariaLabel}
			aria-disabled={disabled}
		>
			{children}
		</Link>
	);
};
