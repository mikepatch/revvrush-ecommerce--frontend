import { executeGraphQL } from "@/api/graphqlApi";
import {
	CollectionGetItemDocument,
	type CollectionListFragment,
	CollectionsGetListDocument,
	type CollectionWithProductsFragment,
} from "@/gql/graphql";

export const getAllCollections = async (): Promise<CollectionListFragment[]> => {
	const { collections } = await executeGraphQL({
		query: CollectionsGetListDocument,
		next: { revalidate: 60 * 60 * 24 },
	});

	return collections;
};

export const getCollectionBySlug = async (
	slug: string,
): Promise<CollectionWithProductsFragment> => {
	const { collection } = await executeGraphQL({
		query: CollectionGetItemDocument,
		variables: { slug },
		next: { revalidate: 60 * 60 * 24 },
	});

	return collection;
};
