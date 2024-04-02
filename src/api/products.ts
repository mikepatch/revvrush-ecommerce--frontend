import {
	ProductCategoriesGetListDocument,
	ProductsGetListDocument,
	type ProductsGetListQueryVariables,
	ProductsGetByQueryDocument,
	type ProductListItemFragment,
	type ProductListFragment,
	type ProductCategoriesListFragment,
	type ProductWithDescriptionFragment,
	ProductReviewGetListDocument,
	ProductGetItemDocument,
} from "./../gql/graphql";
import { executeGraphQL } from "@/api/graphqlApi";

export const getAllProducts = async (
	variables?: ProductsGetListQueryVariables,
): Promise<ProductListFragment> => {
	const { products } = await executeGraphQL({
		query: ProductsGetListDocument,
		variables: { ...variables },
		next: { revalidate: 60 * 60 * 24, tags: ["product"] },
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
	const { product } = await executeGraphQL({
		query: ProductGetItemDocument,
		variables: { where: { id } },
		next: { revalidate: 60 * 60 * 24, tags: ["product"] },
	});

	return product;
};

export const getProductsByQuery = async (query: string): Promise<ProductListFragment> => {
	const { productsByQuery } = await executeGraphQL({
		query: ProductsGetByQueryDocument,
		variables: { query },
	});

	return productsByQuery;
};

export const getAllCategories = async (): Promise<ProductCategoriesListFragment> => {
	const { productCategories } = await executeGraphQL({
		query: ProductCategoriesGetListDocument,
		next: { revalidate: 60 * 60 * 24 },
	});

	return productCategories;
};

export const getProductReviews = async (productId: string) => {
	const { productReviews } = await executeGraphQL({
		query: ProductReviewGetListDocument,
		variables: { where: { productId: { equals: productId } }, orderBy: { createdAt: "desc" } },
		next: { revalidate: 60 * 60 * 24, tags: ["product"] },
	});

	return productReviews;
};
