/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CollectionGetItem($id: ID, $name: String, $slug: String) {\n  collection(id: $id, name: $name, slug: $slug) {\n    name\n    description\n    products {\n      ...ProductListItem\n    }\n  }\n}": types.CollectionGetItemDocument,
    "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n    coverImage\n  }\n}": types.CollectionsGetListDocument,
    "query ProductCategoriesGetList {\n  productCategories {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}": types.ProductCategoriesGetListDocument,
    "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductWithDescription\n  }\n}": types.ProductGetByIdDocument,
    "fragment ProductList on ProductList {\n  data {\n    ...ProductListItem\n  }\n  meta {\n    total\n  }\n}": types.ProductListFragmentDoc,
    "fragment ProductListItem on Product {\n  id\n  name\n  price\n  categoryId\n  images\n  category {\n    name\n    slug\n  }\n}": types.ProductListItemFragmentDoc,
    "fragment ProductWithDescription on Product {\n  ...ProductListItem\n  description\n}": types.ProductWithDescriptionFragmentDoc,
    "query ProductsGetList($skip: Int, $take: Int) {\n  products(take: $take, skip: $skip) {\n    ...ProductList\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategorySlug($slug: String!, $skip: Int, $take: Int) {\n  productsByCategorySlug(slug: $slug, skip: $skip, take: $take) {\n    ...ProductList\n  }\n}": types.ProductsGetListByCategorySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetItem($id: ID, $name: String, $slug: String) {\n  collection(id: $id, name: $name, slug: $slug) {\n    name\n    description\n    products {\n      ...ProductListItem\n    }\n  }\n}"): typeof import('./graphql').CollectionGetItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n    coverImage\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductCategoriesGetList {\n  productCategories {\n    data {\n      id\n      name\n      slug\n    }\n  }\n}"): typeof import('./graphql').ProductCategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($id: ID!) {\n  product(id: $id) {\n    ...ProductWithDescription\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductList on ProductList {\n  data {\n    ...ProductListItem\n  }\n  meta {\n    total\n  }\n}"): typeof import('./graphql').ProductListFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  price\n  categoryId\n  images\n  category {\n    name\n    slug\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductWithDescription on Product {\n  ...ProductListItem\n  description\n}"): typeof import('./graphql').ProductWithDescriptionFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($skip: Int, $take: Int) {\n  products(take: $take, skip: $skip) {\n    ...ProductList\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCategorySlug($slug: String!, $skip: Int, $take: Int) {\n  productsByCategorySlug(slug: $slug, skip: $skip, take: $take) {\n    ...ProductList\n  }\n}"): typeof import('./graphql').ProductsGetListByCategorySlugDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
