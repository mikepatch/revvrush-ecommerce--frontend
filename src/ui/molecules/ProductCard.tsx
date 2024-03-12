import { ProductCardHeader } from "@/ui/molecules/ProductCardHeader";
import { ProductCardBody } from "@/ui/molecules/ProductCardBody";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductCardProps = {
	product: ProductListItemFragment;
};

export const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<article className="flex h-full w-full flex-col gap-4 overflow-hidden rounded-sm bg-brand-background-lighter text-font-dark shadow-sm">
			<ProductCardHeader product={product} />
			<ProductCardBody product={product} />
		</article>
	);
};
