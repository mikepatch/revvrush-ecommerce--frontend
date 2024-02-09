import { ProductCardImage } from "@/ui/atoms/ProductCardImage";
import { ProductCardTitle } from "@/ui/atoms/ProductCardTitle";

type ProductCardHeaderProps = {
	product: {
		coverImage: {
			src: string;
			alt: string;
		};
		name: string;
	};
};

export const ProductCardHeader = ({ product }: ProductCardHeaderProps) => {
	return (
		<header className="flex grow flex-col border-b border-slate-300 pb-2">
			<ProductCardImage src={product.coverImage.src} alt={product.coverImage.alt} />
			<ProductCardTitle title={product.name} />
		</header>
	);
};
