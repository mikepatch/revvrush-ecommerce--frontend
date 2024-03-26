import { executeGraphQL } from "@/api/graphqlApi";
import { CollectionGetItemDocument, CollectionsGetListDocument } from "@/gql/graphql";

export const getAllCollections = async () => {
	return executeGraphQL({ query: CollectionsGetListDocument, next: { revalidate: 60 * 60 * 24 } });
};

export const getCollectionBySlug = async (slug: string) => {
	return executeGraphQL({
		query: CollectionGetItemDocument,
		variables: { slug },
		next: { revalidate: 60 * 60 * 24 },
	});
};
