import { executeGraphQL } from "@/api/graphqlApi";
import { CollectionGetItemDocument, CollectionsGetListDocument } from "@/gql/graphql";

export const getAllCollections = async () => {
	return executeGraphQL(CollectionsGetListDocument);
};

export const getCollectionBySlug = async (slug: string) => {
	return executeGraphQL(CollectionGetItemDocument, { slug });
};
