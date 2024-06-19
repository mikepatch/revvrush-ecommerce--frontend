import { getAllProducts } from "@/api/products";
import { convertSlugToTitle } from "@/utils";
import { PRODUCTS_ON_PAGE } from "@/constants";
import { ProductListing } from "@/ui/organisms/ProductListing";

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
	return <ProductListing params={params} searchParams={searchParams} />;
}
