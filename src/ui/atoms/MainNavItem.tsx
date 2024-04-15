import { type Route } from "next";

import clsx from "clsx";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type MainNavItemProps = {
	href: Route;
	ariaLabel: string;
	children: React.ReactNode;
	disabled?: boolean;
};

export const MainNavItem = ({ href, ariaLabel, children, disabled }: MainNavItemProps) => {
	return (
		<li className="h-full">
			<ActiveLink
				href={href}
				className={clsx(
					"relative flex h-full flex-col items-center justify-center gap-px border-b-4 border-transparent px-2 py-1 transition-all hover:border-brand-primary",
					disabled && "pointer-events-none opacity-50",
				)}
				activeClassName="!border-brand-primary"
				ariaLabel={ariaLabel}
			>
				{children}
			</ActiveLink>
		</li>
	);
};
