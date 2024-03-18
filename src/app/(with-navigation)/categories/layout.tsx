import { getAllCategories } from "@/api/products";

export const generateStaticParams = async () => {
	const { productCategories } = await getAllCategories();

	return productCategories.data.map((category) => ({
		categorySlug: category.slug,
	}));
};

type ProductsLayoutProps = {
	children: React.ReactNode;
};

export default async function CategoriesLayout({ children }: ProductsLayoutProps) {
	return (
		<div className="mx-auto text-font-dark">
			{/* <aside className="col-span-3 h-fit rounded-sm bg-brand-background-lighter px-8 py-6 shadow-sm">
				<h2 className="mb-4 text-xl font-semibold">Recommended products</h2>
				<ul></ul>
			</aside> */}
			<section className="flex flex-grow flex-col gap-4 px-8 py-4">{children}</section>
		</div>
	);
}
