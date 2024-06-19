import { ProductListing } from "@/ui/organisms/ProductListing";

type ProductsPageNumberProps = {
	params: {
		pageNumber: string;
	};
	searchParams: {
		sort_by?: "price" | "rating";
		sort_order?: "asc" | "desc";
	};
};

export default function ProductsPageNumber({ params, searchParams }: ProductsPageNumberProps) {
	return <ProductListing params={params} searchParams={searchParams} />;
}
