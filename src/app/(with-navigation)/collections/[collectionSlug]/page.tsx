import { getCollectionBySlug } from "@/api/collections";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { CollectionProductList } from "@/ui/organisms/CollectionProductList";

type CollectionPageParams = {
	params: { collectionSlug: string };
};

export default async function CollectionPage({ params }: CollectionPageParams) {
	const { collectionSlug } = params;
	const {
		collection: { name, description, products },
	} = await getCollectionBySlug(collectionSlug);

	return (
		<>
			<header className="flex flex-col gap-2 pb-4">
				<PageTitle title={name} />
				<p>{description}</p>
			</header>
			<hr className="border-brand-primary" />
			<section className="p-4">
				<CollectionProductList products={products} />
			</section>
		</>
	);
}
