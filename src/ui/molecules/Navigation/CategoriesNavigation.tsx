import clsx from "clsx";

import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { type NavItemType } from "@/types";

type CategoriesNavigationProps = {
	categories: NavItemType[];
	isVisible: boolean;
};

export const CategoriesNavigation = ({ categories, isVisible }: CategoriesNavigationProps) => {
	return (
		<nav
			className={clsx(
				"absolute left-0 top-full z-50 transition-all sm:static sm:h-10 sm:w-full",
				isVisible ? "translate-x-0" : "-translate-x-full sm:translate-x-0",
			)}
		>
			<ul className="flex h-full w-full flex-col justify-center gap-4 bg-brand-background-lighter px-4 py-4 text-font-dark sm:flex-row sm:py-0">
				<li>
					<ActiveLink
						href="/"
						className="flex h-full items-center border-b-2 border-transparent py-1 transition-colors hover:border-brand-primary sm:px-2"
						activeClassName="!border-brand-primary"
					>
						Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						href="/products"
						className="flex h-full items-center border-b-2 border-transparent py-1 transition-colors hover:border-brand-primary sm:px-2"
						activeClassName="!border-brand-primary"
					>
						All
					</ActiveLink>
				</li>
				{categories.map(({ id, href, label }) => (
					<li key={id} className="h-full">
						<ActiveLink
							href={href}
							className="flex h-full items-center border-b-2 border-transparent py-1 transition-colors hover:border-brand-primary sm:px-2"
							activeClassName="!border-brand-primary"
							ariaLabel={label}
						>
							{label}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
