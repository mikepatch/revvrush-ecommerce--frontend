import { Heading } from "@/ui/atoms/Heading";
import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductList } from "@/ui/molecules/ProductList";

type CollectionProductListProps = {
	products: ProductListItemFragment[];
	title?: string;
};

export const CollectionProductList = ({ products, title }: CollectionProductListProps) => {
	return (
		<section>
			{title && <Heading level={2}>{title}</Heading>}
			<section className="p-4">
				<ProductList products={products} />
			</section>
		</section>
	);
};
