import { type Route } from "next";

import { ActiveLink } from "@/ui/atoms/ActiveLink";

type MainNavItemProps = {
	href: Route;
	ariaLabel: string;
	children: React.ReactNode;
};

export const MainNavItem = ({ href, ariaLabel, children }: MainNavItemProps) => {
	return (
		<li className="h-full">
			<ActiveLink
				href={href}
				className="relative flex h-full flex-col items-center justify-center gap-px border-b-4 border-transparent px-2 py-1 transition-all hover:border-brand-primary"
				activeClassName="!border-brand-primary"
				ariaLabel={ariaLabel}
			>
				{children}
			</ActiveLink>
		</li>
	);
};
