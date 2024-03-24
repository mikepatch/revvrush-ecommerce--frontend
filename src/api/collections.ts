import { executeGraphQL } from "@/api/graphqlApi";
import { CollectionGetItemDocument, CollectionsGetListDocument } from "@/gql/graphql";

export const getAllCollections = async () => {
	return executeGraphQL({ query: CollectionsGetListDocument });
};

export const getCollectionBySlug = async (slug: string) => {
	return executeGraphQL({ query: CollectionGetItemDocument, variables: { slug } });
};
