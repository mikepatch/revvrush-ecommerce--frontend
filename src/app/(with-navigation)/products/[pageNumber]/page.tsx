import { getAllProducts } from "@/api/products";
import { PRODUCTS_ON_PAGE } from "@/constants";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/molecules/ProductList";

type ProductsPageNumberProps = {
	params: {
		pageNumber: string;
	};
};

export default async function ProductsPageNumber({ params }: ProductsPageNumberProps) {
	const pageNumber = Number(params.pageNumber);
	const {
		products: {
			data,
			meta: { total: totalProducts },
		},
	} = await getAllProducts({ take: PRODUCTS_ON_PAGE, skip: (pageNumber - 1) * PRODUCTS_ON_PAGE });

	return (
		<section className="flex flex-grow flex-col gap-4 px-8 py-4">
			<header>
				<PageTitle title="Products" />
			</header>
			<section>
				<ProductList products={data} />
			</section>
			<footer>
				<Pagination
					pageNumber={pageNumber}
					totalItems={totalProducts}
					limit={PRODUCTS_ON_PAGE}
					categorySlug={"products"}
				/>
			</footer>
		</section>
	);
}
