import { notFound } from "next/navigation";
import { type ProductOrderByWithRelationInput } from "@/gql/graphql";

import { ProductList } from "@/ui/molecules/List/ProductList";
import { Pagination } from "@/ui/molecules/Pagination/Pagination";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { getAllProducts } from "@/api/products";
import { convertSlugToTitle } from "@/utils";
import { PRODUCTS_ON_PAGE } from "@/constants";
import { SortButton } from "@/ui/atoms/SortButton";

type PageNumberPageProps = {
	params: {
		pageNumber: string;
		categorySlug: string;
	};
	searchParams: {
		sort_by?: "price" | "rating";
		sort_order?: "asc" | "desc";
	};
};

export const generateStaticParams = async () => {
	const {
		meta: { total: totalProducts },
	} = await getAllProducts();

	const totalPages = Math.ceil(totalProducts / PRODUCTS_ON_PAGE);

	return Array.from({ length: totalPages }, (_, i) => ({ pageNumber: (i + 1).toString() }));
};

export const generateMetadata = async ({ params }: PageNumberPageProps) => {
	const { categorySlug } = params;

	return {
		title: convertSlugToTitle(categorySlug),
	};
};

export default async function CategoryPageNumberPage({
	params,
	searchParams,
}: PageNumberPageProps) {
	const { categorySlug } = params;
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
		where: {
			category: {
				is: {
					slug: {
						equals: categorySlug,
					},
				},
			},
		},
		orderBy,
	});

	if (products.length === 0) {
		throw notFound();
	}

	return (
		<>
			<header>
				<PageTitle title={convertSlugToTitle(categorySlug)} />
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
					categorySlug={`categories/${categorySlug}`}
				/>
			</footer>
		</>
	);
}
