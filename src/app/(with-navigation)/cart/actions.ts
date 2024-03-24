"use server";

import { revalidateTag } from "next/cache";
import { executeGraphQL } from "@/api/graphqlApi";
import { CartItemRemoveFromCartDocument, CartUpdateItemDocument } from "@/gql/graphql";

export const changeItemQuantity = (cartItemId: string, quantity: number) => {
	revalidateTag("cart");

	return executeGraphQL({
		query: CartUpdateItemDocument,
		variables: { cartItemId, data: { quantity } },
		next: {
			tags: ["cart"],
		},
	});
};

export const removeItemFromCart = (cartItemId: string) => {
	revalidateTag("cart");

	return executeGraphQL({
		query: CartItemRemoveFromCartDocument,
		variables: { cartItemId },
		next: {
			tags: ["cart"],
		},
	});
};
