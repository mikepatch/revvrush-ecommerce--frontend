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
    "mutation CartAddItem($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  addItemToCart(\n    createCartItemInput: {cartId: $cartId, productId: $productId, quantity: $quantity}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartCreate($userId: ID!) {\n  createCart(createCartInput: {userId: $userId}) {\n    id\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  cartById(id: $id) {\n    ...CartWithMetadata\n  }\n}": types.CartGetByIdDocument,
    "mutation CartItemRemoveFromCart($cartItemId: ID!) {\n  removeItemFromCart(cartItemId: $cartItemId) {\n    id\n  }\n}": types.CartItemRemoveFromCartDocument,
    "mutation CartUpdateItem($cartItemId: ID!, $data: UpdateCartItemInput!) {\n  updateCartItem(cartItemId: $cartItemId, data: $data) {\n    id\n  }\n}": types.CartUpdateItemDocument,
    "fragment CartWithMetadata on CartWithMeta {\n  data {\n    id\n    items {\n      id\n      quantity\n      product {\n        id\n        name\n        price\n        images\n      }\n    }\n  }\n  meta {\n    totalPrice\n  }\n}": types.CartWithMetadataFragmentDoc,
    "query CollectionGetItem($id: ID, $name: String, $slug: String) {\n  collection(id: $id, name: $name, slug: $slug) {\n    ...CollectionWithProducts\n  }\n}": types.CollectionGetItemDocument,
    "fragment CollectionList on Collection {\n  id\n  name\n  slug\n  coverImage\n}": types.CollectionListFragmentDoc,
    "fragment CollectionWithProducts on Collection {\n  name\n  description\n  products {\n    ...ProductListItem\n  }\n}": types.CollectionWithProductsFragmentDoc,
    "query CollectionsGetList {\n  collections {\n    ...CollectionList\n  }\n}": types.CollectionsGetListDocument,
    "query ProductCategoriesGetList {\n  productCategories {\n    ...ProductCategoriesList\n  }\n}": types.ProductCategoriesGetListDocument,
    "fragment ProductCategoriesList on ProductCategoriesList {\n  data {\n    id\n    name\n    slug\n  }\n}": types.ProductCategoriesListFragmentDoc,
    "fragment ProductCategoriesListItem on ProductCategory {\n  id\n  name\n  slug\n}": types.ProductCategoriesListItemFragmentDoc,
    "query ProductGetItem($where: ProductWhereUniqueInput) {\n  product(where: $where) {\n    ...ProductWithDescription\n  }\n}": types.ProductGetItemDocument,
    "fragment ProductList on ProductList {\n  data {\n    ...ProductListItem\n  }\n  meta {\n    total\n  }\n}": types.ProductListFragmentDoc,
    "fragment ProductListItem on Product {\n  id\n  name\n  price\n  categoryId\n  images\n  avgRating\n  category {\n    name\n    slug\n  }\n  reviews {\n    rating\n  }\n}": types.ProductListItemFragmentDoc,
    "mutation ProductReviewCreate($productId: ID!, $email: String!, $headline: String!, $name: String!, $rating: Int!, $content: String) {\n  createProductReview(\n    createProductReviewInput: {email: $email, headline: $headline, name: $name, productId: $productId, rating: $rating, content: $content}\n  ) {\n    id\n    productId\n    name\n    email\n    rating\n    headline\n    content\n  }\n}": types.ProductReviewCreateDocument,
    "query ProductReviewGetList($where: ProductReviewWhereInput, $orderBy: ProductReviewOrderByWithRelationInput) {\n  productReviews(where: $where, orderBy: $orderBy) {\n    data {\n      ...ProductReviewItem\n    }\n    meta {\n      total\n      avgRating\n    }\n  }\n}": types.ProductReviewGetListDocument,
    "fragment ProductReviewItem on ProductReview {\n  id\n  productId\n  name\n  email\n  rating\n  headline\n  content\n  createdAt\n}": types.ProductReviewItemFragmentDoc,
    "fragment ProductWithDescription on ProductWithMeta {\n  data {\n    ...ProductListItem\n    description\n    reviews {\n      ...ProductReviewItem\n    }\n  }\n  meta {\n    totalReviews\n  }\n}": types.ProductWithDescriptionFragmentDoc,
    "query ProductsGetByQuery($query: String!) {\n  productsByQuery(query: $query) {\n    ...ProductList\n  }\n}": types.ProductsGetByQueryDocument,
    "query ProductsGetList($skip: Int, $take: Int, $where: ProductWhereInput, $orderBy: ProductOrderByWithRelationInput) {\n  products(take: $take, skip: $skip, where: $where, orderBy: $orderBy) {\n    ...ProductList\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListByCategorySlug($slug: String!, $skip: Int, $take: Int) {\n  productsByCategorySlug(slug: $slug, skip: $skip, take: $take) {\n    ...ProductList\n  }\n}": types.ProductsGetListByCategorySlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($cartId: ID!, $productId: ID!, $quantity: Int!) {\n  addItemToCart(\n    createCartItemInput: {cartId: $cartId, productId: $productId, quantity: $quantity}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($userId: ID!) {\n  createCart(createCartInput: {userId: $userId}) {\n    id\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cartById(id: $id) {\n    ...CartWithMetadata\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartItemRemoveFromCart($cartItemId: ID!) {\n  removeItemFromCart(cartItemId: $cartItemId) {\n    id\n  }\n}"): typeof import('./graphql').CartItemRemoveFromCartDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartUpdateItem($cartItemId: ID!, $data: UpdateCartItemInput!) {\n  updateCartItem(cartItemId: $cartItemId, data: $data) {\n    id\n  }\n}"): typeof import('./graphql').CartUpdateItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartWithMetadata on CartWithMeta {\n  data {\n    id\n    items {\n      id\n      quantity\n      product {\n        id\n        name\n        price\n        images\n      }\n    }\n  }\n  meta {\n    totalPrice\n  }\n}"): typeof import('./graphql').CartWithMetadataFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetItem($id: ID, $name: String, $slug: String) {\n  collection(id: $id, name: $name, slug: $slug) {\n    ...CollectionWithProducts\n  }\n}"): typeof import('./graphql').CollectionGetItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionList on Collection {\n  id\n  name\n  slug\n  coverImage\n}"): typeof import('./graphql').CollectionListFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionWithProducts on Collection {\n  name\n  description\n  products {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').CollectionWithProductsFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    ...CollectionList\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductCategoriesGetList {\n  productCategories {\n    ...ProductCategoriesList\n  }\n}"): typeof import('./graphql').ProductCategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductCategoriesList on ProductCategoriesList {\n  data {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').ProductCategoriesListFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductCategoriesListItem on ProductCategory {\n  id\n  name\n  slug\n}"): typeof import('./graphql').ProductCategoriesListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetItem($where: ProductWhereUniqueInput) {\n  product(where: $where) {\n    ...ProductWithDescription\n  }\n}"): typeof import('./graphql').ProductGetItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductList on ProductList {\n  data {\n    ...ProductListItem\n  }\n  meta {\n    total\n  }\n}"): typeof import('./graphql').ProductListFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  price\n  categoryId\n  images\n  avgRating\n  category {\n    name\n    slug\n  }\n  reviews {\n    rating\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ProductReviewCreate($productId: ID!, $email: String!, $headline: String!, $name: String!, $rating: Int!, $content: String) {\n  createProductReview(\n    createProductReviewInput: {email: $email, headline: $headline, name: $name, productId: $productId, rating: $rating, content: $content}\n  ) {\n    id\n    productId\n    name\n    email\n    rating\n    headline\n    content\n  }\n}"): typeof import('./graphql').ProductReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductReviewGetList($where: ProductReviewWhereInput, $orderBy: ProductReviewOrderByWithRelationInput) {\n  productReviews(where: $where, orderBy: $orderBy) {\n    data {\n      ...ProductReviewItem\n    }\n    meta {\n      total\n      avgRating\n    }\n  }\n}"): typeof import('./graphql').ProductReviewGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductReviewItem on ProductReview {\n  id\n  productId\n  name\n  email\n  rating\n  headline\n  content\n  createdAt\n}"): typeof import('./graphql').ProductReviewItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductWithDescription on ProductWithMeta {\n  data {\n    ...ProductListItem\n    description\n    reviews {\n      ...ProductReviewItem\n    }\n  }\n  meta {\n    totalReviews\n  }\n}"): typeof import('./graphql').ProductWithDescriptionFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetByQuery($query: String!) {\n  productsByQuery(query: $query) {\n    ...ProductList\n  }\n}"): typeof import('./graphql').ProductsGetByQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($skip: Int, $take: Int, $where: ProductWhereInput, $orderBy: ProductOrderByWithRelationInput) {\n  products(take: $take, skip: $skip, where: $where, orderBy: $orderBy) {\n    ...ProductList\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListByCategorySlug($slug: String!, $skip: Int, $take: Int) {\n  productsByCategorySlug(slug: $slug, skip: $skip, take: $take) {\n    ...ProductList\n  }\n}"): typeof import('./graphql').ProductsGetListByCategorySlugDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
