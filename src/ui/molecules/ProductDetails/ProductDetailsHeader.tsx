import { type ProductWithDescriptionFragment } from "@/gql/graphql";

import { formatPrice } from "@/utils";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { ProductDetailsImage } from "@/ui/atoms/ProductDetailsImage";
import { addProductToCartAction } from "@/app/actions";
import { Heading } from "@/ui/atoms/Heading";
import { StarRating } from "@/ui/molecules/StarRating";

type ProductsDetailsHeaderProps = {
	product: ProductWithDescriptionFragment;
};

export const ProductDetailsHeader = ({ product }: ProductsDetailsHeaderProps) => {
	const {
		data: productData,
		meta: { totalReviews },
	} = product;

	return (
		<header className="flex flex-col justify-between gap-6 sm:flex-row">
			<div className="min-w-1/2 group bg-white">
				{productData.images && productData.images[0] && (
					<ProductDetailsImage
						src={productData.images[0]}
						alt={productData.name}
						width={300}
						height={300}
						resizeOnHover
					/>
				)}
			</div>
			<section className="flex grow flex-col justify-between">
				<div className="flex w-full flex-col gap-2 border-b">
					<Heading level={1}>{productData.name}</Heading>
					<div>
						<div className="flex gap-2">
							<StarRating
								rating={Math.floor(productData.avgRating || 0)}
								variant="small"
								label={`(${totalReviews} reviews)`}
							/>{" "}
						</div>
						<small className="text-font-gray" aria-disabled>
							ID: {productData.id}
						</small>
					</div>
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
					<p className=" text-2xl font-semibold">{formatPrice(productData.price)}</p>
					<form action={addProductToCartAction} className="flex">
						{/* <div className="flex items-center">
							<button type="button" className="rounded-l bg-gray-200 px-2 py-1">
								-
							</button>
							<input
								type="number"
								name="quantity"
								defaultValue="1"
								className="w-16 bg-gray-200 px-2 py-1 text-center"
							/>
							<button type="button" className="rounded-r bg-gray-200 px-2 py-1">
								+
							</button>
						</div> */}
						<input
							type="number"
							name="quantity"
							defaultValue="1"
							className="w-12 px-2 py-2"
							aria-label="Set quantity"
						/>
						<input type="hidden" name="productId" value={productData.id} aria-hidden />
						<AddToCartButton variant="both" data-testid="add-to-cart-button" />
					</form>
				</div>
			</section>
		</header>
	);
};
