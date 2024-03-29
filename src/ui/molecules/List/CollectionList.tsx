import Link from "next/link";
import NextImage from "next/image";

import { type CollectionsGetListQuery } from "@/gql/graphql";

type CollectionListProps = {
	collections: CollectionsGetListQuery["collections"];
};

export const CollectionList = ({ collections }: CollectionListProps) => (
	<ul className="flex h-[105px] justify-center gap-4 overflow-hidden">
		{collections.map((collection) => (
			<li key={collection.id} className="h-full rounded-sm bg-brand-background-dark">
				<Link href={`/collections/${collection.slug}`} className="h-full">
					<article>
						<h2 className="px-2 py-1 text-font-light">{collection.name}</h2>
						<NextImage
							src={collection.coverImage}
							width={300}
							height={200}
							alt={`Picture of ${collection.name} collection`}
							className="h-full rounded-sm"
						/>
					</article>
				</Link>
			</li>
		))}
	</ul>
);
