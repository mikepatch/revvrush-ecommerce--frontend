import { ProductList } from "@/ui/molecules/ProductList";
import { getProductByQuery } from "@/api/products";

type SearchPageProps = {
	searchParams?: { query?: string };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const query = searchParams?.query || "";
	const {
		productsByQuery: { data, meta },
	} = await getProductByQuery(query);

	return (
		<div>
			<h1>
				Found {meta.total} {meta.total !== 1 ? "items" : "item"} for phrase: &quot;{query}&quot;.
			</h1>
			<ProductList products={data} />
		</div>
	);
}
