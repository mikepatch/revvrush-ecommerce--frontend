import { formatPrice } from "@/utils";

type ProductCardPriceProps = {
	price: number;
};

export const ProductCardPrice = ({ price }: ProductCardPriceProps) => {
	return <p className="text-xl font-semibold">{formatPrice(price)}</p>;
};
