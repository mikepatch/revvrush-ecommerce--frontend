import { type CartWithMetadataFragment } from "@/gql/graphql";
import { type CartTableDataType } from "@/types";

export const formatPrice = (amount: number): string => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 2,
	}).format(amount);
};

export const convertSlugToTitle = (slug: string): string => {
	return slug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
};

export const calculateAverageRating = (reviews: { rating: number }[]): number => {
	return Math.round(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length);
};

export const formatCartDataToTableData = (
	cartData: CartWithMetadataFragment,
): CartTableDataType => {
	return {
		headers: ["Product", "Quantity", "Price", "Total"],
		rows: cartData.data.items.map(({ id, quantity, product }) => {
			return {
				productId: product.id,
				cartItemId: id,
				name: product.name,
				image: (product.images[0] as string) || "",
				quantity: quantity,
				price: product.price,
				total: quantity * product.price,
			};
		}),
		footer: {
			totalPrice: cartData.meta.totalPrice,
		},
	};
};

export const getTotalReviewsLabel = (totalReviews: number): string => {
	return totalReviews === 1 ? `${totalReviews} review` : `${totalReviews} reviews`;
};
