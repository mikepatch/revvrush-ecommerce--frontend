import { getAllProducts } from "@/api/products";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { ProductList } from "@/ui/molecules/ProductList";
import { CollectionsBanner } from "@/ui/organisms/CollectionsBannerCarousel";
import { getAllCollections } from "@/api/collections";

export default async function HomePage() {
	const { products } = await getAllProducts({ take: 4 });
	const { collections } = await getAllCollections();

	return (
		<section className="mt-4 flex flex-col gap-4">
			<CollectionsBanner collections={collections} />
			<PageTitle title="RevvRush" />
			<ProductList products={products.data} />
		</section>
	);
}
