import { type Metadata } from "next";

import { getCollectionBySlug } from "@/api/collections";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { CollectionProductList } from "@/ui/molecules/List/CollectionProductList";

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
	const { name, description, products } = await getCollectionBySlug(collectionSlug);

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
