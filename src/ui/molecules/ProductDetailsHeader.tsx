import {  ShoppingCart } from "lucide-react";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { formatPrice } from "@/utils";
import { type ProductListItemFragment } from "@/gql/graphql";

type ProductsDetailsHeaderProps = {
	product: ProductListItemFragment;
};

export const ProductsDetailsHeader = ({ product }: ProductsDetailsHeaderProps) => {
	return (
		<header className="flex flex-col justify-between gap-6 md:flex-row">
			<div className="min-w-1/2 group bg-white">
				{product.images && product.images[0] && (
					<ProductImage
						src={product.images[0]}
						alt={product.name}
						width={640}
						height={640}
						resizeOnHover
					/>
				)}
			</div>
			<section className="flex grow flex-col justify-between">
				<div className="flex w-full flex-col">
					<h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
					<small className="text-xs text-gray-500">ID: {product.id}</small>
				</div>
				{/* {product.stock > 0 ? (
					<div className="flex gap-2">
						<CheckCheck color="green" />
						In stock
					</div>
				) : (
					<div className="flex gap-2">
						<X color="red" />
						Out of stock
					</div>
				)} */}
				<div className="flex flex-wrap items-center justify-between rounded-sm p-4">
					<p className=" text-2xl font-semibold">{formatPrice(product.price)}</p>
					<button
						aria-label="Add to cart"
						className="group rounded-sm bg-brand-primary px-4 py-3 text-font-light shadow-sm transition-all hover:brightness-105"
					>
						<div className="flex items-center gap-2">
							<ShoppingCart size={24} />
							Add to cart
						</div>
					</button>
				</div>
			</section>
		</header>
	);
};
