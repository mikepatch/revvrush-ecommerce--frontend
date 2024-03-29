import { formatPrice } from "@/utils";

type ProductCardPriceProps = {
	price: number;
};

export const ProductCardPrice = ({ price }: ProductCardPriceProps) => {
	return (
		<p className="text-xl font-semibold" data-testid="product-price">
			{formatPrice(price)}
		</p>
	);
};
