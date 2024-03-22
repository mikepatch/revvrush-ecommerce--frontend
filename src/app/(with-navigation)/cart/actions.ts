"use server";

import { executeGraphQL } from "@/api/graphqlApi";
import { CartUpdateItemDocument } from "@/gql/graphql";

export const changeItemQuantity = (cartItemId: string, quantity: number) => {
	return executeGraphQL(CartUpdateItemDocument, { cartItemId, data: { quantity } });
};
