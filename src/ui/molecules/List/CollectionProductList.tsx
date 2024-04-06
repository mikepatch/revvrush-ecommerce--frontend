import { Heading } from "@/ui/atoms/Heading";
import { type ProductListItemFragment } from "@/gql/graphql";
import { ProductList } from "@/ui/molecules/List/ProductList";

type CollectionProductListProps = {
	products: ProductListItemFragment[];
	title?: string;
};

export const CollectionProductList = ({ products, title }: CollectionProductListProps) => {
	return (
		<section>
			<header>{title && <Heading level={2}>{title}</Heading>}</header>
			<section className="p-4">
				<ProductList products={products} />
			</section>
		</section>
	);
};
