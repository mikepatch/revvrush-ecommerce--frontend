import { getAllCategories } from "@/api/products";
import { type NavItemType } from "@/types";
import { HeaderBottomNavbar } from "@/ui/molecules/Navigation/HeaderBottomNavbar";
import { HeaderTopNavbar } from "@/ui/molecules/Navigation/HeaderTopNavbar";

export const Header = async () => {
	const { data: productCategories } = await getAllCategories();
	const categoriesItems = productCategories.map((category) => ({
		id: category.id,
		href: `/categories/${category.slug}`,
		label: category.name,
	})) as NavItemType[];

	return (
		<header className="sticky left-0 right-0 top-0 z-20 flex h-header-height flex-col items-center justify-between bg-brand-background-dark bg-gradient-to-b from-[#2d2d2d] text-font-light shadow-md">
			<HeaderTopNavbar />
			<HeaderBottomNavbar categories={categoriesItems} />
		</header>
	);
};
