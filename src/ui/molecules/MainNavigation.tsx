import { NavList } from "@/ui/molecules/NavList";
import { type NavItemType } from "@/ui/types";

type NavigationProps = {
	navItems: NavItemType[];
};

export const MainNavigation = ({ navItems }: NavigationProps) => {
	return (
		<nav>
			<NavList navItems={navItems} className="flex gap-4 text-lg" />
		</nav>
	);
};
