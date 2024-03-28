import { getAllProducts } from "@/api/products";
import { PRODUCTS_ON_PAGE } from "@/constants";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { Pagination } from "@/ui/molecules/Pagination/Pagination";
import { ProductList } from "@/ui/molecules/List/ProductList";

type ProductsPageNumberProps = {
	params: {
		pageNumber: string;
	};
};

export default async function ProductsPageNumber({ params }: ProductsPageNumberProps) {
	const pageNumber = Number(params.pageNumber);
	const {
		data: products,
		meta: { total: totalProducts },
	} = await getAllProducts({ take: PRODUCTS_ON_PAGE, skip: (pageNumber - 1) * PRODUCTS_ON_PAGE });

	return (
		<>
			<header>
				<PageTitle title="Products" />
			</header>
			<section>
				<ProductList products={products} />
			</section>
			<footer>
				<Pagination
					pageNumber={pageNumber}
					totalItems={totalProducts}
					limit={PRODUCTS_ON_PAGE}
					categorySlug={"products"}
				/>
			</footer>
		</>
	);
}
