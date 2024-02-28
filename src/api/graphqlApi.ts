import { type TypedDocumentString } from "@/gql/graphql";

export type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

export const executeGraphQL = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error("GRAPHQL_URL is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({ query, variables }),
		headers: {
			"Content-Type": "application/json",
		},
	});
	const graphQLResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphQLResponse.errors) {
		throw new Error(graphQLResponse.errors.map((error) => error.message).join("\n"));
	}

	return graphQLResponse.data;
};
