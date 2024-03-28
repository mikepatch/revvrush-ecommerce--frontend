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
