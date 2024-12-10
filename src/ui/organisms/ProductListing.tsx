import { notFound } from "next/navigation";
import { Suspense } from "react";
import { type ProductOrderByWithRelationInput } from "@/gql/graphql";
import { PRODUCTS_ON_PAGE } from "@/constants";
import { getAllProducts } from "@/api/products";
import { ProductList } from "@/ui/molecules/List/ProductList";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { convertSlugToTitle } from "@/utils";
import { SortButton } from "@/ui/atoms/SortButton";
import { ProductListSkeleton } from "@/ui/skeletons/ProductListSkeleton";
import { Pagination } from "@/ui/molecules/Pagination/Pagination";

type ProductListingProps = {
	params: {
		pageNumber?: string;
		categorySlug?: string;
	};
	searchParams: {
		sort_by?: "price" | "rating";
		sort_order?: "asc" | "desc";
	};
};

export const ProductListing = async ({ params, searchParams }: ProductListingProps) => {
	const resolvedParams = await params;
	const resolvedSearchParams = await searchParams;
	const pageNumber = Number(resolvedParams.pageNumber);
	const orderBy: ProductOrderByWithRelationInput = {
		price: resolvedSearchParams?.sort_by === "price" ? resolvedSearchParams.sort_order : undefined,
		avgRating:
			resolvedSearchParams?.sort_by === "rating"
				? { sort: resolvedSearchParams.sort_order || "asc", nulls: "last" }
				: undefined,
	};
	const {
		data: products,
		meta: { total: totalProducts },
	} = await getAllProducts({
		take: PRODUCTS_ON_PAGE,
		skip: (pageNumber ? pageNumber - 1 : 0) * PRODUCTS_ON_PAGE,
		where: {
			category: {
				is: {
					slug: {
						equals: resolvedParams.categorySlug,
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
				<PageTitle>
					{convertSlugToTitle(resolvedParams.categorySlug || "products")}{" "}
					<small>({totalProducts})</small>
				</PageTitle>
			</header>
			<section className="flex flex-col gap-4">
				<SortButton />
				<Suspense fallback={<ProductListSkeleton itemsCount={PRODUCTS_ON_PAGE} />}>
					<ProductList products={products} />
				</Suspense>
			</section>
			<footer>
				<Pagination
					pageNumber={pageNumber}
					totalItems={totalProducts}
					limit={PRODUCTS_ON_PAGE}
					categorySlug={
						resolvedParams.categorySlug ? `categories/${resolvedParams.categorySlug}` : "products"
					}
				/>
			</footer>
		</>
	);
};
