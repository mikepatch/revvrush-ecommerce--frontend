import Link from "next/link";
import NextImage from "next/image";

import { type CollectionsGetListQuery } from "@/gql/graphql";

type CollectionListProps = {
	collections: CollectionsGetListQuery["collections"];
};

export const CollectionList = ({ collections }: CollectionListProps) => (
	<div>
		<ul className="flex justify-center gap-4">
			{collections.map((collection) => (
				<li key={collection.id} className="rounded-sm bg-brand-background-dark">
					<Link href={`/collections/${collection.slug}`}>
						<article>
							<h2 className="px-2 py-1 text-font-light">{collection.name}</h2>
							<NextImage
								src={collection.coverImage}
								width={300}
								height={200}
								alt=""
								className="rounded-sm"
							/>
						</article>
					</Link>
				</li>
			))}
		</ul>
	</div>
);
