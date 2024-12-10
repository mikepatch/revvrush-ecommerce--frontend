import { ProductList } from "@/ui/molecules/List/ProductList";
import { getProductsByQuery } from "@/api/products";

type SearchPageProps = {
	searchParams?: Promise<{ query?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const resolvedSearchparams = await searchParams;
	const query = resolvedSearchparams?.query || "";
	const { data, meta } = await getProductsByQuery(query);

	return (
		<section className="flex flex-col gap-4">
			<h2>
				Found {meta.total} {meta.total !== 1 ? "items" : "item"} for phrase:{" "}
				<strong>&quot;{query}&quot;</strong>.
			</h2>
			<ProductList products={data} />
		</section>
	);
}
