import { type ProductWithDescriptionFragment } from "@/gql/graphql";

import { formatPrice, getTotalReviewsLabel } from "@/utils";
import { ProductDetailsImage } from "@/ui/atoms/ProductDetailsImage";
import { Heading } from "@/ui/atoms/Heading";
import { StarRating } from "@/ui/molecules/StarRating";
import { AddToCartForm } from "@/ui/molecules/ProductDetails/AddToCartForm";

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
			<div className="group flex aspect-square basis-1/3 items-center justify-center overflow-hidden bg-white p-4">
				{productData.images && productData.images[0] && (
					<ProductDetailsImage
						src={productData.images[0]}
						alt={productData.name}
						width={400}
						height={400}
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
								label={`(${getTotalReviewsLabel(totalReviews)})`}
							/>
						</div>
						<small className="text-font-gray" aria-disabled>
							ID: {productData.id}
						</small>
					</div>
				</div>
				<div className="flex flex-col items-end gap-4 rounded-sm p-4">
					<p className=" text-2xl font-semibold">{formatPrice(productData.price)}</p>
					<AddToCartForm productData={productData} />
				</div>
			</section>
		</header>
	);
};
