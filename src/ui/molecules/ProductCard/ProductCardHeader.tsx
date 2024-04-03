import Link from "next/link";
import { type ProductListItemFragment } from "@/gql/graphql";

import { ProductImage } from "@/ui/atoms/ProductImage";
import { ProductCardTitle } from "@/ui/atoms/ProductCardTitle";
// import { StarRating } from "@/ui/molecules/StarRating";

type ProductCardHeaderProps = {
	product: ProductListItemFragment;
};

export const ProductCardHeader = ({ product }: ProductCardHeaderProps) => {
	return (
		<header className="group flex grow flex-col border-b border-slate-300 pb-2">
			<Link href={`/product/${product.id}`} className="flex flex-col">
				<div className="relative">
					{/* {product.stock === 0 && (
					<div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-80">
						<p className="text-xl font-bold">Out of stock</p>
					</div>
				)} */}
					{product.images && product.images[0] && (
						<ProductImage
							src={product.images[0]}
							alt={`Picture of product ${product.name}`}
							resizeOnHover
						/>
					)}
				</div>
				<div className="flex flex-col px-4">
					<ProductCardTitle title={product.name} />
					<p data-testid="product-rating">{product.avgRating || 0}</p>
					{/* <StarRating
						rating={Math.floor(product.avgRating || 0)}
						label={`${product.avgRating || ""} (${product.reviews?.length})`}
					/> */}
				</div>
			</Link>
		</header>
	);
};
