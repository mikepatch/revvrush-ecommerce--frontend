import { type CartWithMetadataFragment } from "@/gql/graphql";

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

export const sumItemsQuantityInCart = (
	items: CartWithMetadataFragment["data"]["items"],
): number => {
	return (
		items.reduce((acc, item) => {
			if (item) {
				return acc + item.quantity;
			}
			return acc;
		}, 0) ?? 0
	);
};
