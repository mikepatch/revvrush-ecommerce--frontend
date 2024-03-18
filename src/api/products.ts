import {
	ProductCategoriesGetListDocument,
	ProductGetByIdDocument,
	type ProductsGetListByCategorySlugQueryVariables,
	ProductsGetListDocument,
	type ProductsGetListQueryVariables,
	ProductsGetListByCategorySlugDocument,
	ProductsGetByQueryDocument,
} from "./../gql/graphql";
import { executeGraphQL } from "@/api/graphqlApi";

export const getAllProducts = async (variables?: ProductsGetListQueryVariables) => {
	return executeGraphQL(ProductsGetListDocument, { ...variables });
};

export const getProductById = async (id: string) => {
	return executeGraphQL(ProductGetByIdDocument, { id });
};

export const getProductsByQuery = async (query: string) => {
	return executeGraphQL(ProductsGetByQueryDocument, { query });
};

export const getProductsByCategorySlug = async (
	variables: ProductsGetListByCategorySlugQueryVariables,
) => {
	return executeGraphQL(ProductsGetListByCategorySlugDocument, { ...variables });
};

export const getAllCategories = async () => {
	return executeGraphQL(ProductCategoriesGetListDocument);
};
