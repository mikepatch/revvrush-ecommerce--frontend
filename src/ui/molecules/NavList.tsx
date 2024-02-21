import { NavItem } from "@/ui/molecules/NavItem";
import { type NavItemType } from "@/ui/types";

type NavigationProps = {
	navItems: NavItemType[];
	className?: string;
};

export const NavList = ({ navItems, className }: NavigationProps) => {
	return (
		<ul className={className}>
			{navItems.map((navItem) => (
				<NavItem key={navItem.id} navItem={navItem} />
			))}
		</ul>
	);
};
