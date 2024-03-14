import Link from "next/link";
import { ProductCard } from "@/ui/molecules/ProductCard";
import { Heading } from "@/ui/atoms/Heading";
import { type ProductListItemFragment } from "@/gql/graphql";

type CollectionProductListProps = {
	products: ProductListItemFragment[];
	title?: string;
};

export const CollectionProductList = ({ products, title }: CollectionProductListProps) => {
	return (
		<section>
			{title && <Heading level={2}>{title}</Heading>}
			<section className="p-4">
				<ul className="grid grid-cols-1 justify-center justify-items-center gap-4 sm:grid-cols-4">
					{products.map((product) => (
						<li key={product.id} className="group w-full max-w-[400px]">
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
