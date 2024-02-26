import { NavList } from "@/ui/molecules/NavList";
import { type NavItemType } from "@/ui/types";

export const CategoriesNavigation = ({ categories }: { categories: NavItemType[] }) => {
	return (
		<nav className="flex w-full">
			<NavList
				navItems={categories}
				className="flex w-full justify-center gap-4 bg-font-light py-2 text-font-dark"
			/>
		</nav>
	);
};
