import { getAllCategories } from "@/api/products";
import { Header } from "@/ui/organisms/Header";
import { type NavItemType } from "@/types";

type LayoutWithNavigationProps = {
	children: React.ReactNode;
};

export default async function LayoutWithNavigation({ children }: LayoutWithNavigationProps) {
	const { data: productCategories } = await getAllCategories();
	const categoriesItems = productCategories.map((category) => ({
		id: category.id,
		href: `/categories/${category.slug}`,
		label: category.name,
	})) as NavItemType[];

	return (
		<>
			<Header categories={categoriesItems} />
			<main className="mx-auto max-w-[1440px] px-8 py-6">{children}</main>
		</>
	);
}
