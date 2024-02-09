import { ProductCard } from "@/ui/molecules/ProductCard";
import { type ProductItemType } from "@/ui/types";

type ProductListProps = {
	products: ProductItemType[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			className="grid grid-cols-1 justify-center justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<li
					key={product.id}
					className="group flex h-full w-full max-w-[400px] flex-col gap-4 overflow-hidden rounded-md bg-slate-200 text-font-dark drop-shadow-md"
				>
					<ProductCard product={product} />
				</li>
			))}
		</ul>
	);
};
