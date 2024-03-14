import Link from "next/link";
import { getAllCollections } from "@/api/collections";

type CollectionsLayoutProps = {
	children: React.ReactNode;
};

export default async function CollectionsLayout({ children }: CollectionsLayoutProps) {
	const { collections } = await getAllCollections();

	return (
		<div className="mx-auto w-full max-w-7xl grid-cols-12 gap-x-8 text-font-dark lg:grid">
			<aside className="col-span-3 h-fit rounded-sm bg-brand-background-lighter px-8 py-6 shadow-sm">
				<h2 className="mb-4 text-xl font-semibold">Collections</h2>
				<ul>
					{collections.map((collection) => (
						<li key={collection.id}>
							<Link href={`/collections/${collection.slug}`}>{collection.name}</Link>
						</li>
					))}
				</ul>
			</aside>
			<section className="col-span-9 flex flex-grow flex-col gap-4 px-8 py-4">{children}</section>
		</div>
	);
}
