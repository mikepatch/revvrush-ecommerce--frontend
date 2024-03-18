import Link from "next/link";
import { getAllCollections } from "@/api/collections";

export default async function CollectionsPage() {
	const { collections } = await getAllCollections();

	return (
		<div>
			<ul>
				{collections.map((collection) => (
					<li key={collection.id}>
						<Link href={`/collections/${collection.slug}`}>{collection.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
