import Link from "next/link";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductCardTitle } from "@/ui/atoms/ProductCardTitle";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductCardHeaderProps = {
	product: ProductListItemFragment;
};

export const ProductCardHeader = ({ product }: ProductCardHeaderProps) => {
	return (
		<header className="group flex grow flex-col border-b border-slate-300 pb-2">
			<Link href={`/product/${product.id}`}>
				<div className="relative">
					{/* {product.stock === 0 && (
					<div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-80">
						<p className="text-xl font-bold">Out of stock</p>
					</div>
				)} */}
					{product.images && product.images[0] && (
						<ProductImage src={product.images[0]} alt={product.name} resizeOnHover />
					)}
				</div>
				<ProductCardTitle title={product.name} />
			</Link>
		</header>
	);
};
