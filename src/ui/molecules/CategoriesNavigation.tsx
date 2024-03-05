import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { type NavItemType } from "@/ui/types";

export const CategoriesNavigation = ({
	categories,
	className,
}: {
	categories: NavItemType[];
	className: React.ComponentProps<"nav">["className"];
}) => {
	return (
		<nav className={`${className} sm:h-10`}>
			<ul className="flex h-full w-full flex-col justify-center bg-font-light px-4 text-font-dark sm:flex-row">
				{categories.map(({ id, href, label }) => (
					<li key={id} className="h-full">
						<ActiveLink
							href={href}
							className="flex h-full items-center border-brand-primary px-2 py-1 transition-all hover:border-b-2"
							activeClassName="border-b-2"
						>
							{label}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
