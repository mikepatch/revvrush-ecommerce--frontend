import { getProductReviews } from "@/api/products";
import { Heading } from "@/ui/atoms/Heading";
import { ReviewForm } from "@/ui/molecules/ProductDetails/ReviewForm";
import { StarRating } from "@/ui/molecules/StarRating";

type ProductRatingProps = {
	productId: string;
};

export const ProductReviews = async ({ productId }: ProductRatingProps) => {
	const reviews = await getProductReviews(productId);

	const {
		data: reviewsData,
		meta: { total: totalReviews, avgRating },
	} = reviews;

	if (!reviews) {
		return null;
	}

	return (
		<div className="flex flex-col gap-4">
			<header>
				<Heading level={2}>
					Reviews <small>({totalReviews})</small>
				</Heading>
			</header>
			<div className="flex justify-between bg-brand-background-lighter">
				<section className="flex w-full flex-col gap-6 rounded-sm border-r p-6">
					<header className="flex flex-col items-center border-b pb-4">
						<Heading level={3}>{avgRating}/5</Heading>
						<StarRating
							rating={Math.floor(avgRating)}
							variant="big"
							label={`(${totalReviews} reviews)`}
						/>
					</header>
					<ul className="flex flex-col gap-4">
						{reviewsData.map(
							(review) =>
								review && (
									<li key={review.id} className="border-b p-2">
										<article className="flex flex-col gap-2">
											<header className="flex flex-col">
												<StarRating rating={review.rating} variant="small" />
												<Heading level={4}>{review.headline}</Heading>
											</header>
											{review.content && <p>{review.content}</p>}
											<footer className="flex items-center gap-2">
												<p className="text-sm italic">{review.name}</p>
												<time className="text-xs text-gray-500">
													{new Date(review.createdAt as string).toLocaleString()}
												</time>
											</footer>
										</article>
									</li>
								),
						)}
					</ul>
				</section>
				<section className="sticky right-0 top-1/3 flex h-fit basis-1/3 flex-col gap-4 rounded-sm bg-brand-background-lighter p-6">
					<header>
						<Heading level={4}>Rate product or write a review</Heading>
					</header>
					<ReviewForm productId={productId} />
				</section>
			</div>
		</div>
	);
};
