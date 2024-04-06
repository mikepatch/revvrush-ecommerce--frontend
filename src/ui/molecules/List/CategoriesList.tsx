import NextImage from "next/image";
import Link from "next/link";

import { type ProductCategoriesListFragment } from "@/gql/graphql";
import { Heading } from "@/ui/atoms/Heading";

type CategoriesListProps = {
	categories: ProductCategoriesListFragment;
	title?: string;
};

export const CategoriesList = ({ categories, title }: CategoriesListProps) => {
	return (
		<section className="flex flex-col gap-4">
			<header>{title && <Heading level={2}>{title}</Heading>}</header>
			<ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
				{categories.data.map((category) => (
					<li key={category.id}>
						<Link
							href={`/categories/${category.slug}`}
							className="group block rounded-sm border bg-brand-background-lighter p-2 shadow-sm transition-all hover:shadow-md"
						>
							<NextImage
								width={300}
								height={300}
								src={`/images/categories/${category.slug}.png`}
								alt={`${category.name} category icon`}
								className="object-cover transition-transform group-hover:scale-105"
							/>
							<span className="flex w-full justify-center text-sm  sm:text-lg">
								{category.name}
							</span>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};
