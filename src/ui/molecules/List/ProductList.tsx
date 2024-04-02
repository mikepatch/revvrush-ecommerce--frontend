import { ProductCard } from "@/ui/molecules/ProductCard/ProductCard";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductListProps = {
	products: ProductListItemFragment[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			className="grid w-full grid-cols-1 justify-center justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<li key={product.id} className="w-full">
					<ProductCard product={product} />
				</li>
			))}
		</ul>
	);
};
