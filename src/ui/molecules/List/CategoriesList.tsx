import NextImage from "next/image";
import Link from "next/link";

import { type ProductCategoriesListFragment } from "@/gql/graphql";

type CategoriesListProps = {
	categories: ProductCategoriesListFragment;
};

export const CategoriesList = ({ categories }: CategoriesListProps) => {
	return (
		<ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
			{categories.data.map((category) => (
				<li key={category.id}>
					<Link
						href={`/categories/${category.slug}`}
						className="group block rounded-sm bg-brand-background-lighter p-2 shadow-sm transition-all hover:shadow-md"
					>
						<NextImage
							width={300}
							height={300}
							src={`/images/categories/${category.slug}.png`}
							alt={category.name}
							className="object-cover transition-transform group-hover:scale-105"
						/>
						<span className="flex w-full justify-center text-sm  sm:text-lg">{category.name}</span>
					</Link>
				</li>
			))}
		</ul>
	);
};
