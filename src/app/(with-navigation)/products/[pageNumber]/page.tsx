import { ProductListing } from "@/ui/organisms/ProductListing";

type ProductsPageNumberProps = {
	params: Promise<{
		pageNumber: string;
	}>;
	searchParams: Promise<{
		sort_by?: "price" | "rating";
		sort_order?: "asc" | "desc";
	}>;
};

export default async function ProductsPageNumber({
	params,
	searchParams,
}: ProductsPageNumberProps) {
	const resolvedParams = await params;
	const resolvedSearchParams = await searchParams;

	return <ProductListing params={resolvedParams} searchParams={resolvedSearchParams} />;
}
