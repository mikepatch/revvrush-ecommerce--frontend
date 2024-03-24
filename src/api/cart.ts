import { cookies } from "next/headers";
import { executeGraphQL } from "@/api/graphqlApi";
import { getProductById } from "@/api/products";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	CartUpdateItemDocument,
	type CartWithMetadataFragment,
} from "@/gql/graphql";

export const getCartById = async (cartId: string) => {
	const { cartById } = await executeGraphQL({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		next: {
			tags: ["cart"],
		},
	});

	return { cart: cartById };
};

export const createCart = async () => {
	const { createCart } = await executeGraphQL({
		query: CartCreateDocument,
		variables: { userId: "1" },
		next: {
			tags: ["cart"],
		},
	});

	return { newCart: createCart };
};

export const addItemToCart = async (cartId: string, productId: string, quantity: number) => {
	const { addItemToCart } = await executeGraphQL({
		query: CartAddItemDocument,
		variables: {
			cartId,
			productId,
			quantity,
		},
		next: {
			tags: ["cart"],
		},
	});

	return { addedItem: addItemToCart };
};

export const updateItemQuantity = async (cartItemId: string, quantity: number) => {
	await executeGraphQL({
		query: CartUpdateItemDocument,
		variables: { cartItemId, data: { quantity } },
		next: {
			tags: ["cart"],
		},
	});
};

export const getCartFromCookies = async (): Promise<CartWithMetadataFragment | undefined> => {
	const cartId = cookies().get("cartId")?.value;

	if (cartId) {
		const { cart } = await getCartById(cartId);
		if (cart) {
			return cart;
		}
	}
};

export const getOrCreateCart = async (): Promise<Pick<CartWithMetadataFragment["data"], "id">> => {
	const existingCart = await getCartFromCookies();
	if (existingCart) {
		return existingCart.data;
	}

	const { newCart } = await createCart();
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id, {
		httpOnly: true,
		sameSite: "lax",
	});
	return newCart;
};

export const addProductToCart = async (cartId: string, productId: string, quantity: number) => {
	const { product } = await getProductById(productId);
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await addItemToCart(cartId, productId, quantity);
};
