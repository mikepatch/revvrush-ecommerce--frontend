import { cookies } from "next/headers";

import { executeGraphQL } from "@/api/graphqlApi";
import { getProductById } from "@/api/products";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	type CartWithMetadataFragment,
} from "@/gql/graphql";

export const getCart = async (): Promise<CartWithMetadataFragment | undefined> => {
	const cookieStore = await cookies();
	const cartId = cookieStore.get("cartId")?.value;

	if (!cartId) {
		return;
	}

	try {
		const { cartById } = await executeGraphQL({
			query: CartGetByIdDocument,
			variables: { id: cartId },
			next: {
				tags: ["cart"],
			},
		});

		if (!cartById) {
			throw new Error("Cart not found");
		}

		return cartById;
	} catch (error) {
		console.error(error);
	}
};

export const getCartById = async (cartId: string): Promise<CartWithMetadataFragment> => {
	const { cartById } = await executeGraphQL({
		query: CartGetByIdDocument,
		variables: { id: cartId },
		next: {
			tags: ["cart"],
		},
	});

	return cartById;
};

export const createCart = async (): Promise<{ id: string }> => {
	const { createCart } = await executeGraphQL({
		query: CartCreateDocument,
		variables: { userId: "1" },
		next: {
			tags: ["cart"],
		},
	});

	return createCart;
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

export const getCartFromCookies = async (): Promise<CartWithMetadataFragment | undefined> => {
	const cookieStore = await cookies();
	const cartId = cookieStore.get("cartId")?.value;

	if (cartId) {
		const cart = await getCartById(cartId);
		if (cart) {
			return cart;
		}
	}
};

export const getOrCreateCart = async (): Promise<CartWithMetadataFragment> => {
	const cookieStore = await cookies();
	const existingCart = await getCartFromCookies();
	if (existingCart) {
		return existingCart;
	}

	const newCart = await createCart();
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookieStore.set("cartId", newCart.id, {
		httpOnly: true,
		sameSite: "lax",
	});

	const cart = await getCartById(newCart.id);

	return cart;
};

export const addProductToCart = async (
	cartId: string,
	productId: string,
	quantity: number,
): Promise<void> => {
	const product = await getProductById(productId);
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await addItemToCart(cartId, productId, quantity);
};

export const getCartItemsQty = async (): Promise<number> => {
	const cart = await getCart();

	if (!cart) {
		return 0;
	}

	return cart.data.items.reduce((acc, item) => acc + item.quantity, 0);
};
