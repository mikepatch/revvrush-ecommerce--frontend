import { MAIN_NAV_ITEMS } from "@/constants";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const MainNavigation = () => {
	return (
		<nav className="h-full">
			<ul className="flex h-full items-center">
				{MAIN_NAV_ITEMS.map(({ id, href, label, icon }) => (
					<li key={id} className="h-full">
						<ActiveLink
							href={href}
							className="flex h-full flex-col items-center justify-center border-brand-primary px-2 py-1 transition-all hover:border-b-4"
							activeClassName="border-b-4"
						>
							<div>{icon && icon}</div>
							<span className="text-xs">{label}</span>
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
