import { type Metadata } from "next";

import { getCollectionBySlug } from "@/api/collections";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { CollectionProductList } from "@/ui/organisms/CollectionProductList";

type SingleCollectionPageProps = {
	params: { collectionSlug: string };
};

export const generateMetadata = async ({
	params,
}: SingleCollectionPageProps): Promise<Metadata> => {
	const {
		collection: { name },
	} = await getCollectionBySlug(params.collectionSlug);

	return {
		title: name,
	};
};

export default async function SingleCollectionPage({ params }: SingleCollectionPageProps) {
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
