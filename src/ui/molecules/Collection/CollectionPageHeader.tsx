import NextImage from "next/image";
import { type CollectionWithProductsFragment } from "@/gql/graphql";
import { Heading } from "@/ui/atoms/Heading";

type CollectionPageHeaderProps = {
	collection: CollectionWithProductsFragment;
};

export const CollectionPageHeader = ({ collection }: CollectionPageHeaderProps) => {
	return (
		<header className="flex flex-col gap-2 bg-brand-background-lighter pb-4">
			<figure className="relative">
				<NextImage
					width={1440}
					height={400}
					src={`/images/collections/${collection.slug}.png`}
					alt={collection.name}
					priority
				/>
				<Heading
					level={1}
					className="absolute inset-0 flex items-center justify-center bg-brand-background-dark bg-opacity-90 p-4 text-6xl text-font-light"
				>
					{collection.name}
				</Heading>
			</figure>
			<p className="p-4">{collection.description}</p>
		</header>
	);
};
