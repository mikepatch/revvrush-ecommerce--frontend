import {
	ProductCategoriesGetListDocument,
	ProductGetByIdDocument,
	type ProductsGetListByCategorySlugQueryVariables,
	ProductsGetListDocument,
	type ProductsGetListQueryVariables,
	ProductsGetListByCategorySlugDocument,
} from "./../gql/graphql";
import { executeGraphQL } from "@/api/graphqlApi";

export const getAllProducts = async (variables: ProductsGetListQueryVariables) => {
	return executeGraphQL(ProductsGetListDocument, { ...variables });
};

export const getProductById = async (id: string) => {
	return executeGraphQL(ProductGetByIdDocument, { id });
};

export const getProductsByCategorySlug = async (
	variables: ProductsGetListByCategorySlugQueryVariables,
) => {
	return executeGraphQL(ProductsGetListByCategorySlugDocument, { ...variables });
};

export const getAllCategories = async () => {
	return executeGraphQL(ProductCategoriesGetListDocument);
};
