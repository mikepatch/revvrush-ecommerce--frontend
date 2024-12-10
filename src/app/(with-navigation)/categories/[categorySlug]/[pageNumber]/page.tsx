import { type Metadata } from "next";
import { getAllProducts } from "@/api/products";
import { convertSlugToTitle } from "@/utils";
import { PRODUCTS_ON_PAGE } from "@/constants";
import { ProductListing } from "@/ui/organisms/ProductListing";

type CategoryParams = {
	pageNumber: string;
	categorySlug: string;
};

type SearchParams = {
	sort_by?: "price" | "rating";
	sort_order?: "asc" | "desc";
};

type PageNumberPageProps = {
	params: Promise<CategoryParams>;
	searchParams: Promise<SearchParams>;
};

export const generateStaticParams = async () => {
	const {
		meta: { total: totalProducts },
	} = await getAllProducts();

	const totalPages = Math.ceil(totalProducts / PRODUCTS_ON_PAGE);

	return Array.from({ length: totalPages }, (_, i) => ({ pageNumber: (i + 1).toString() }));
};

export async function generateMetadata({ params }: PageNumberPageProps): Promise<Metadata> {
	const resolvedParams = await params;
	return {
		title: convertSlugToTitle(resolvedParams.categorySlug),
	};
}

export default async function CategoryPageNumberPage({
	params,
	searchParams,
}: PageNumberPageProps) {
	const resolvedParams = await params;
	const resolvedSearchParams = await searchParams;
	return <ProductListing params={resolvedParams} searchParams={resolvedSearchParams} />;
}
