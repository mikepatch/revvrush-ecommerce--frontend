import { ProductCardPrice } from "@/ui/atoms/ProductCardPrice";
// import { ProductCardBulletPointList } from "@/ui/molecules/ProductCardBulletPointList";

type ProductCardBodyProps = {
	product: {
		bulletPoints?: {
			id: string;
			label: string;
			value: string;
		}[];
		suitableFor?: string[];
		category: string;
		price: number;
	};
};

export const ProductCardBody = ({ product }: ProductCardBodyProps) => {
	return (
		<article className="flex flex-wrap gap-4 px-4 pb-4">
			{/* <ProductCardBulletPointList product={product} /> */}
			<ProductCardPrice price={product.price} />
		</article>
	);
};
