import { type Metadata } from "next";
import NextImage from "next/image";

import { getCollectionBySlug } from "@/api/collections";
import { CollectionProductList } from "@/ui/molecules/List/CollectionProductList";
import { Heading } from "@/ui/atoms/Heading";

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
			<header className="flex flex-col gap-2 bg-brand-background-lighter pb-4">
				<figure className="relative">
					<NextImage
						width={1440}
						height={400}
						src={`/images/collections/${collectionSlug}.png`}
						alt={name}
					/>
					<Heading
						level={1}
						className="absolute inset-0 flex items-center justify-center bg-brand-background-dark bg-opacity-90 p-4 text-6xl text-font-light"
					>
						{name}
					</Heading>
				</figure>
				<p className="p-4">{description}</p>
			</header>
			{/* <hr className="border-brand-primary" /> */}
			<section>
				<CollectionProductList products={products} />
			</section>
		</>
	);
}
