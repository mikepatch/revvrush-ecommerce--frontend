import { ProductCardHeader } from "@/ui/molecules/ProductCardHeader";
import { ProductCardBody } from "@/ui/molecules/ProductCardBody";
import { type ProductItemType } from "@/ui/types";

type ProductCardProps = {
	product: ProductItemType;
};

export const ProductCard = ({ product }: ProductCardProps) => {
	return (
		<article className="flex h-full w-full flex-col gap-4 overflow-hidden rounded-md bg-slate-200 text-font-dark drop-shadow-md">
			<ProductCardHeader product={product} />
			<ProductCardBody product={product} />
		</article>
	);
};
