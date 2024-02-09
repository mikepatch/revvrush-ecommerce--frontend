import { ProductCardHeader } from "@/ui/molecules/ProductCardHeader";
import { ProductCardBody } from "@/ui/molecules/ProductCardBody";
import { type ProductItemType } from "@/ui/types";

type ProductCardProps = {
	product: ProductItemType;
};

export const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<>
			<ProductCardHeader product={product} />
			<ProductCardBody product={product} />
		</>
	);
};
