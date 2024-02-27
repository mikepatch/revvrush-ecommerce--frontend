import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductCardTitle } from "@/ui/atoms/ProductCardTitle";

type ProductCardHeaderProps = {
	product: {
		stock: number;
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
			<div className="relative">
				{product.stock === 0 && (
					<div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-80">
						<p className="text-xl font-bold">Out of stock</p>
					</div>
				)}
				<ProductImage src={product.coverImage.src} alt={product.coverImage.alt} resizeOnHover />
			</div>
			<ProductCardTitle title={product.name} />
		</header>
	);
};
