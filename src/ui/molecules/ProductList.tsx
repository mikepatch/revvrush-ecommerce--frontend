import Link from "next/link";

import { ProductCard } from "@/ui/molecules/ProductCard";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListProps = {
	products: ProductListItemFragment[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			className="grid grid-cols-1 justify-center justify-items-center gap-4 sm:grid-cols-3 xl:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<li key={product.id} className="group w-full max-w-[350px]">
					<Link href={`/product/${product.id}`}>
						<ProductCard product={product} />
					</Link>
				</li>
			))}
		</ul>
	);
};
