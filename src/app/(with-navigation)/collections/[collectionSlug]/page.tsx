import { type Metadata } from "next";

import { getCollectionBySlug } from "@/api/collections";
import { CollectionProductList } from "@/ui/molecules/List/CollectionProductList";
import { CollectionPageHeader } from "@/ui/molecules/Collection/CollectionPageHeader";

type ParamsType = {
	collectionSlug: string;
};

export const generateMetadata = async ({ params }: { params: ParamsType }): Promise<Metadata> => {
	const { name } = await getCollectionBySlug(params.collectionSlug);

	return {
		title: name,
	};
};

type SingleCollectionPageProps = {
	params: ParamsType;
};

export default async function SingleCollectionPage({ params }: SingleCollectionPageProps) {
	const { collectionSlug } = params;
	const collection = await getCollectionBySlug(collectionSlug);

	return (
		<>
			<CollectionPageHeader collection={collection} />
			<section>
				<CollectionProductList products={collection.products} />
			</section>
		</>
	);
}
