import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { type NavItemType } from "@/types";

export const CategoriesNavigation = ({
	categories,
	className,
}: {
	categories: NavItemType[];
	className: React.ComponentProps<"nav">["className"];
}) => {
	categories.sort((a, b) => {
		if (a.label === "All") return -1;
		if (b.label === "All") return 1;
		return 0;
	});

	return (
		<nav className={`${className} sm:h-10`}>
			<ul className="flex h-full w-full flex-col justify-center bg-font-light px-4 py-4 text-font-dark sm:flex-row sm:py-0">
				<li>
					<ActiveLink
						href="/"
						className="flex h-full items-center border-brand-primary py-1 transition-all hover:border-b-2 sm:px-2"
						activeClassName="border-b-2"
					>
						Home
					</ActiveLink>
				</li>
				{categories.map(({ id, href, label }) => (
					<li key={id} className="h-full">
						<ActiveLink
							href={href}
							className="flex h-full items-center border-brand-primary py-1 transition-all hover:border-b-2 sm:px-2"
							activeClassName="border-b-2"
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
