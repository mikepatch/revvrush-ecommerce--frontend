import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { type NavItemType } from "@/types";

type CategoriesNavigationProps = {
	categories: NavItemType[];
	className: React.ComponentProps<"nav">["className"];
};

export const CategoriesNavigation = ({
	categories,
	className,
}: CategoriesNavigationProps) => {
	return (
		<nav className={`${className} sm:h-10`}>
			<ul className="flex h-full w-full flex-col justify-center bg-font-light px-4 py-4 text-font-dark sm:flex-row sm:py-0">
				<li>
					<ActiveLink
						href="/"
						className="flex h-full items-center border-b-2 py-1 transition-all hover:border-brand-primary sm:px-2"
						activeClassName="border-brand-primary"
					>
						Home
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						href="/products"
						className="flex h-full items-center border-b-2 py-1 transition-all hover:border-brand-primary sm:px-2"
						activeClassName="border-brand-primary"
					>
						All
					</ActiveLink>
				</li>
				{categories.map(({ id, href, label }) => (
					<li key={id} className="h-full">
						<ActiveLink
							href={href}
							className="flex h-full items-center border-b-2 py-1 transition-all hover:border-brand-primary sm:px-2"
							activeClassName="border-brand-primary"
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
