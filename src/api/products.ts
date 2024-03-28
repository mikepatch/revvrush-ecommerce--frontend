import {
	ProductCategoriesGetListDocument,
	ProductGetByIdDocument,
	type ProductsGetListByCategorySlugQueryVariables,
	ProductsGetListDocument,
	type ProductsGetListQueryVariables,
	ProductsGetListByCategorySlugDocument,
	ProductsGetByQueryDocument,
	type ProductListItemFragment,
	type ProductListFragment,
	type ProductCategoriesListFragment,
	type ProductWithDescriptionFragment,
} from "./../gql/graphql";
import { executeGraphQL } from "@/api/graphqlApi";

export const getAllProducts = async (
	variables?: ProductsGetListQueryVariables,
): Promise<ProductListFragment> => {
	const { products } = await executeGraphQL({
		query: ProductsGetListDocument,
		variables: { ...variables },
		next: { revalidate: 60 * 60 * 24 },
	});

	return products;
};

export const getRelatedProducts = async (
	product: ProductListItemFragment,
): Promise<ProductListItemFragment[]> => {
	const { data } = await getAllProducts({
		take: 4,
		where: {
			category: { is: { slug: { equals: product.category?.slug } } },
			id: { not: { equals: product.id } },
		},
	});

	return data;
};

export const getProductById = async (id: string): Promise<ProductWithDescriptionFragment> => {
	const { product } = await executeGraphQL({ query: ProductGetByIdDocument, variables: { id } });

	return product;
};

export const getProductsByQuery = async (query: string): Promise<ProductListFragment> => {
	const { productsByQuery } = await executeGraphQL({
		query: ProductsGetByQueryDocument,
		variables: { query },
	});

	return productsByQuery;
};

export const getProductsByCategorySlug = async (
	variables: ProductsGetListByCategorySlugQueryVariables,
): Promise<ProductListFragment> => {
	const { productsByCategorySlug } = await executeGraphQL({
		query: ProductsGetListByCategorySlugDocument,
		variables: { ...variables },
		next: { revalidate: 60 * 60 * 24 },
	});

	return productsByCategorySlug;
};

export const getAllCategories = async (): Promise<ProductCategoriesListFragment> => {
	const { productCategories } = await executeGraphQL({
		query: ProductCategoriesGetListDocument,
		next: { revalidate: 60 * 60 * 24 },
	});

	return productCategories;
};
