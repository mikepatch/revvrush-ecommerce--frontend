import { getAllCollections } from "@/api/collections";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { CollectionList } from "@/ui/organisms/CollectionList";

export default async function CollectionsPage() {
	const { collections } = await getAllCollections();

	return (
		<>
			<header>
				<PageTitle title="Collections" />
			</header>
			<section>
				<CollectionList collections={collections} />
			</section>
		</>
	);
}
