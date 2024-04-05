import { type ProductOrderByWithRelationInput } from "@/gql/graphql";

import { getAllProducts } from "@/api/products";
import { PRODUCTS_ON_PAGE } from "@/constants";
import { Pagination } from "@/ui/molecules/Pagination/Pagination";
import { ProductList } from "@/ui/molecules/List/ProductList";
import { SortButton } from "@/ui/atoms/SortButton";
import { PageTitle } from "@/ui/atoms/PageTitle";

type ProductsPageNumberProps = {
	params: {
		pageNumber: string;
	};
	searchParams: {
		sort_by?: "price" | "rating";
		sort_order?: "asc" | "desc";
	};
};

export default async function ProductsPageNumber({
	params,
	searchParams,
}: ProductsPageNumberProps) {
	const pageNumber = Number(params.pageNumber);
	const orderBy: ProductOrderByWithRelationInput = {
		price: searchParams.sort_by === "price" ? searchParams.sort_order : undefined,
		avgRating:
			searchParams.sort_by === "rating"
				? { sort: searchParams.sort_order || "asc", nulls: "last" }
				: undefined,
	};
	const {
		data: products,
		meta: { total: totalProducts },
	} = await getAllProducts({
		take: PRODUCTS_ON_PAGE,
		skip: (pageNumber - 1) * PRODUCTS_ON_PAGE,
		orderBy,
	});

	return (
		<>
			<header>
				<PageTitle>
					Products <small>({totalProducts})</small>
				</PageTitle>
			</header>
			<section className="flex flex-col items-end gap-2">
				<SortButton />
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
