import { getAllCollections } from "@/api/collections";
import NotFound from "@/app/(with-navigation)/product/[productId]/not-found";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { CollectionList } from "@/ui/molecules/List/CollectionList";

export default async function CollectionsPage() {
	const collections = await getAllCollections();

	if (!collections) {
		throw NotFound();
	}

	return (
		<>
			<header>
				<PageTitle>Collections</PageTitle>
			</header>
			<section>
				<CollectionList collections={collections} />
			</section>
		</>
	);
}
