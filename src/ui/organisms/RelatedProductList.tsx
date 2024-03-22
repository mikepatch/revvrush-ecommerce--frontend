import Link from "next/link";

import { type ProductListItemFragment } from "@/gql/graphql";
import { Heading } from "@/ui/atoms/Heading";
import { ProductCard } from "@/ui/molecules/ProductCard";

type RelatedProductListProps = {
	products: ProductListItemFragment[];
	title?: string;
};

export const RelatedProductList = ({ products, title }: RelatedProductListProps) => {
	return (
		<section data-testid="related-products">
			{title && <Heading level={2}>{title}</Heading>}
			<section className="p-4">
				<ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
					{products.map((product) => (
						<li key={product.id} className="group w-full max-w-[350px]">
							<Link href={`/product/${product.id}`}>
								<ProductCard product={product} />
							</Link>
						</li>
					))}
				</ul>
			</section>
		</section>
	);
};
