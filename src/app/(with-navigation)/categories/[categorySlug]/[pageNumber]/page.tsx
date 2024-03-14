import { notFound } from "next/navigation";
import { ProductList } from "@/ui/molecules/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { getAllProducts, getProductsByCategorySlug } from "@/api/products";
import { convertSlugToTitle } from "@/utils";
import { PRODUCTS_ON_PAGE } from "@/constants";

type PageNumberPageProps = {
	params: {
		pageNumber: string;
		categorySlug: string;
	};
};

export async function generateStaticParams() {
	const {
		products: {
			meta: { total: totalProducts },
		},
	} = await getAllProducts();

	const totalPages = Math.ceil(totalProducts / PRODUCTS_ON_PAGE);

	return Array.from({ length: totalPages }, (_, i) => ({ pageNumber: (i + 1).toString() }));
}

export default async function CategoryPageNumberPage({ params }: PageNumberPageProps) {
	const { categorySlug } = params;
	const pageNumber = Number(params.pageNumber);

	const { productsByCategorySlug } = await getProductsByCategorySlug({
		slug: categorySlug,
		take: PRODUCTS_ON_PAGE,
		skip: (pageNumber - 1) * PRODUCTS_ON_PAGE,
	});
	const {
		data: products,
		meta: { total: totalProducts },
	} = productsByCategorySlug;

	if (products.length === 0) {
		throw notFound();
	}

	return (
		<>
			<header>
				<PageTitle title={convertSlugToTitle(categorySlug)} />
			</header>
			<section>
				<ProductList products={products} />
			</section>
			<footer>
				<Pagination
					pageNumber={pageNumber}
					totalItems={totalProducts}
					limit={PRODUCTS_ON_PAGE}
					categorySlug={categorySlug}
				/>
			</footer>
		</>
	);
}
