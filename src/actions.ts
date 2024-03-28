"use server";

import { revalidateTag } from "next/cache";
import { executeGraphQL } from "@/api/graphqlApi";
import { CartItemRemoveFromCartDocument, CartUpdateItemDocument } from "@/gql/graphql";
import { addProductToCart, getOrCreateCart } from "@/api/cart";

export const changeItemQuantity = async (cartItemId: string, quantity: number) => {
	await executeGraphQL({
		query: CartUpdateItemDocument,
		variables: { cartItemId, data: { quantity } },
		next: {
			tags: ["cart"],
		},
	});
	revalidateTag("cart");
};

export const removeItemFromCart = async (cartItemId: string) => {
	await executeGraphQL({
		query: CartItemRemoveFromCartDocument,
		variables: { cartItemId },
		next: {
			tags: ["cart"],
		},
	});
	revalidateTag("cart");
};

export const addProductToCartAction = async (formData: FormData) => {
	"use server";

	const cart = await getOrCreateCart();
	const quantity = Number(formData.get("quantity"));
	const productId = formData.get("productId") as string;

	await addProductToCart(cart.data.id, productId, quantity);
	revalidateTag("cart");
};
