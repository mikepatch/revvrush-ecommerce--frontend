/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: unknown; output: unknown; }
};

export type Collection = {
  /** Product collection cover image URL */
  coverImage: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  /** Product collection description */
  description?: Maybe<Scalars['String']['output']>;
  /** Product collection ID */
  id: Scalars['ID']['output'];
  /** Product collection name */
  name: Scalars['String']['output'];
  /** Product IDs in the collection */
  productIds: Array<Scalars['ID']['output']>;
  /** Products in the collection */
  products: Array<Product>;
  /** Product collection slug */
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type CollectionListRelationFilter = {
  every?: InputMaybe<CollectionWhereInput>;
  none?: InputMaybe<CollectionWhereInput>;
  some?: InputMaybe<CollectionWhereInput>;
};

export type CollectionWhereInput = {
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  NOT?: InputMaybe<Array<CollectionWhereInput>>;
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  coverImage?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CreateCollectionInput = {
  /** Product collection cover image URL */
  coverImage: Scalars['String']['input'];
  /** Product collection description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Product collection name */
  name: Scalars['String']['input'];
  /** Product IDs in the collection */
  productIds: Array<Scalars['ID']['input']>;
};

/** New product category input */
export type CreateProductCategoryInput = {
  /** Product category name */
  name: Scalars['String']['input'];
  /** Parent category ID */
  parentCategoryId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateProductInput = {
  categoryId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
};

export type CreateProductVariantInput = {
  /** Product variant name */
  name: Scalars['String']['input'];
  /** Product variant options */
  options: Array<CreateProductVariantOptionInput>;
  /** Product variant price */
  price?: InputMaybe<Scalars['Int']['input']>;
  /** Product variant productId */
  productId: Scalars['String']['input'];
  /** Product variant stock */
  stock?: Scalars['Int']['input'];
};

export type CreateProductVariantOptionInput = {
  /** Product variant option name */
  name: Scalars['String']['input'];
  /** Product variant option values */
  values: Array<Scalars['String']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type ListMeta = {
  /** Total number of records */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  createCollection?: Maybe<Collection>;
  createProduct: Product;
  createProductCategory: ProductCategory;
  createProductVariant: ProductVariant;
  removeCollection: Collection;
  removeProduct: Product;
  removeProductCategory: ProductCategory;
  removeProductVariant: ProductVariant;
  updateCollection: Collection;
  updateProduct: Product;
  updateProductCategory: ProductCategory;
  updateProductVariant: ProductVariant;
};


export type MutationCreateCollectionArgs = {
  createCollectionInput: CreateCollectionInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateProductCategoryArgs = {
  createProductCategoryInput: CreateProductCategoryInput;
};


export type MutationCreateProductVariantArgs = {
  createProductVariantInput: CreateProductVariantInput;
};


export type MutationRemoveCollectionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveProductCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveProductVariantArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateCollectionArgs = {
  updateCollectionInput: UpdateCollectionInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID']['input'];
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateProductCategoryArgs = {
  id: Scalars['ID']['input'];
  updateProductCategoryInput: UpdateProductCategoryInput;
};


export type MutationUpdateProductVariantArgs = {
  updateProductVariantInput: UpdateProductVariantInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type OrderListRelationFilter = {
  every?: InputMaybe<OrderWhereInput>;
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
};

export type OrderNullableRelationFilter = {
  is?: InputMaybe<OrderWhereInput>;
  isNot?: InputMaybe<OrderWhereInput>;
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Product = {
  /** Product category */
  category?: Maybe<ProductCategory>;
  /** Product category id */
  categoryId: Scalars['ID']['output'];
  /** Product collections */
  collections?: Maybe<Array<Maybe<Collection>>>;
  /** Product createdAt */
  createdAt: Scalars['DateTime']['output'];
  /** Product description */
  description: Scalars['String']['output'];
  /** Product ID */
  id: Scalars['ID']['output'];
  /** Product images */
  images: Array<Maybe<Scalars['String']['output']>>;
  /** Product name */
  name: Scalars['String']['output'];
  /** Product orderId */
  orderId: Scalars['ID']['output'];
  /** Product price */
  price: Scalars['Int']['output'];
  /** Product slug */
  slug: Scalars['String']['output'];
  /** Product updatedAt */
  updatedAt: Scalars['DateTime']['output'];
  /** Product variants */
  variants?: Maybe<Array<Maybe<ProductVariant>>>;
};

export type ProductCategoriesList = {
  /** List of product categories */
  data: Array<ProductCategory>;
};

export type ProductCategory = {
  /** Category created at */
  createdAt: Scalars['DateTime']['output'];
  /** Product category ID */
  id: Scalars['ID']['output'];
  /** Product category name */
  name: Scalars['String']['output'];
  /** Parent category ID */
  parentCategoryId?: Maybe<Scalars['ID']['output']>;
  /** Products in this category */
  products: Array<Maybe<Product>>;
  /** Product category slug */
  slug?: Maybe<Scalars['String']['output']>;
  /** Category updated at */
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductCategoryListRelationFilter = {
  every?: InputMaybe<ProductCategoryWhereInput>;
  none?: InputMaybe<ProductCategoryWhereInput>;
  some?: InputMaybe<ProductCategoryWhereInput>;
};

export type ProductCategoryNullableRelationFilter = {
  is?: InputMaybe<ProductCategoryWhereInput>;
  isNot?: InputMaybe<ProductCategoryWhereInput>;
};

export type ProductCategoryRelationFilter = {
  is?: InputMaybe<ProductCategoryWhereInput>;
  isNot?: InputMaybe<ProductCategoryWhereInput>;
};

export type ProductCategoryWhereInput = {
  AND?: InputMaybe<Array<ProductCategoryWhereInput>>;
  NOT?: InputMaybe<Array<ProductCategoryWhereInput>>;
  OR?: InputMaybe<Array<ProductCategoryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parentCategory?: InputMaybe<ProductCategoryNullableRelationFilter>;
  parentCategoryId?: InputMaybe<StringNullableFilter>;
  products?: InputMaybe<ProductListRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  subCategories?: InputMaybe<ProductCategoryListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductList = {
  /** List of products */
  data: Array<Product>;
  /** List metadata */
  meta: ListMeta;
};

export type ProductListRelationFilter = {
  every?: InputMaybe<ProductWhereInput>;
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
};

export type ProductRelationFilter = {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
};

export type ProductVariant = {
  /** Product variant createdAt */
  createdAt: Scalars['DateTime']['output'];
  /** Product variant ID */
  id: Scalars['ID']['output'];
  /** Product variant name */
  name: Scalars['String']['output'];
  /** Product variant options */
  options: Array<ProductVariantOption>;
  /** Product variant price */
  price?: Maybe<Scalars['Int']['output']>;
  /** Product variant product */
  product: Product;
  /** Product variant productId */
  productId: Scalars['String']['output'];
  /** Product variant stock */
  stock: Scalars['Int']['output'];
  /** Product variant updatedAt */
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductVariantListRelationFilter = {
  every?: InputMaybe<ProductVariantWhereInput>;
  none?: InputMaybe<ProductVariantWhereInput>;
  some?: InputMaybe<ProductVariantWhereInput>;
};

export type ProductVariantOption = {
  /** Product variant option ID */
  id: Scalars['ID']['output'];
  /** Product variant option name */
  name: Scalars['String']['output'];
  /** Product variant option variantId */
  productVariantId: Scalars['String']['output'];
  /** Product variant option values */
  values: Array<Scalars['String']['output']>;
};

export type ProductVariantOptionListRelationFilter = {
  every?: InputMaybe<ProductVariantOptionWhereInput>;
  none?: InputMaybe<ProductVariantOptionWhereInput>;
  some?: InputMaybe<ProductVariantOptionWhereInput>;
};

export type ProductVariantOptionWhereInput = {
  AND?: InputMaybe<Array<ProductVariantOptionWhereInput>>;
  NOT?: InputMaybe<Array<ProductVariantOptionWhereInput>>;
  OR?: InputMaybe<Array<ProductVariantOptionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  productVariant?: InputMaybe<ProductVariantRelationFilter>;
  productVariantId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  values?: InputMaybe<StringNullableListFilter>;
};

export type ProductVariantRelationFilter = {
  is?: InputMaybe<ProductVariantWhereInput>;
  isNot?: InputMaybe<ProductVariantWhereInput>;
};

export type ProductVariantWhereInput = {
  AND?: InputMaybe<Array<ProductVariantWhereInput>>;
  NOT?: InputMaybe<Array<ProductVariantWhereInput>>;
  OR?: InputMaybe<Array<ProductVariantWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  options?: InputMaybe<ProductVariantOptionListRelationFilter>;
  price?: InputMaybe<IntNullableFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  stock?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductWhereInput = {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  Order?: InputMaybe<OrderNullableRelationFilter>;
  category?: InputMaybe<ProductCategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  collections?: InputMaybe<CollectionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  name?: InputMaybe<StringFilter>;
  orderId?: InputMaybe<StringNullableFilter>;
  price?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  variants?: InputMaybe<ProductVariantListRelationFilter>;
};

export type Query = {
  collection: Collection;
  collections: Array<Collection>;
  product: Product;
  productById: Product;
  productCategories: ProductCategoriesList;
  productCategory: ProductCategory;
  productCategoryById: ProductCategory;
  productVariant: ProductVariant;
  productVariants: Array<ProductVariant>;
  products: ProductList;
  productsByCategorySlug: ProductList;
  productsByQuery: ProductList;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductCategoriesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductCategoryByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductVariantArgs = {
  id: Scalars['Int']['input'];
};


export type QueryProductsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
};


export type QueryProductsByCategorySlugArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductsByQueryArgs = {
  query: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryMode =
  | 'default'
  | 'insensitive';

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateCollectionInput = {
  /** Product collection cover image URL */
  coverImage?: InputMaybe<Scalars['String']['input']>;
  /** Product collection description */
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  /** Product collection name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Product IDs in the collection */
  productIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateProductCategoryInput = {
  /** Product category name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Parent category ID */
  parentCategoryId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateProductVariantInput = {
  id: Scalars['ID']['input'];
  /** Product variant name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Product variant options */
  options?: InputMaybe<Array<CreateProductVariantOptionInput>>;
  /** Product variant price */
  price?: InputMaybe<Scalars['Int']['input']>;
  /** Product variant productId */
  productId?: InputMaybe<Scalars['String']['input']>;
  /** Product variant stock */
  stock?: InputMaybe<Scalars['Int']['input']>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  orders?: InputMaybe<OrderListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  role?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CollectionGetItemQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type CollectionGetItemQuery = { collection: { name: string, description?: string | null, products: Array<{ id: string, name: string, price: number, categoryId: string, images: Array<string | null>, category?: { name: string, slug?: string | null } | null }> } };

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetListQuery = { collections: Array<{ id: string, name: string, slug?: string | null, coverImage: string }> };

export type ProductCategoriesGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductCategoriesGetListQuery = { productCategories: { data: Array<{ id: string, name: string, slug?: string | null }> } };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product: { description: string, id: string, name: string, price: number, categoryId: string, images: Array<string | null>, category?: { name: string, slug?: string | null } | null } };

export type ProductListFragment = { data: Array<{ id: string, name: string, price: number, categoryId: string, images: Array<string | null>, category?: { name: string, slug?: string | null } | null }>, meta: { total: number } };

export type ProductListItemFragment = { id: string, name: string, price: number, categoryId: string, images: Array<string | null>, category?: { name: string, slug?: string | null } | null };

export type ProductWithDescriptionFragment = { description: string, id: string, name: string, price: number, categoryId: string, images: Array<string | null>, category?: { name: string, slug?: string | null } | null };

export type ProductsGetByQueryQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type ProductsGetByQueryQuery = { productsByQuery: { data: Array<{ id: string, name: string, price: number, categoryId: string, images: Array<string | null>, category?: { name: string, slug?: string | null } | null }>, meta: { total: number } } };

export type ProductsGetListQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductWhereInput>;
}>;


export type ProductsGetListQuery = { products: { data: Array<{ id: string, name: string, price: number, categoryId: string, images: Array<string | null>, category?: { name: string, slug?: string | null } | null }>, meta: { total: number } } };

export type ProductsGetListByCategorySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetListByCategorySlugQuery = { productsByCategorySlug: { data: Array<{ id: string, name: string, price: number, categoryId: string, images: Array<string | null>, category?: { name: string, slug?: string | null } | null }>, meta: { total: number } } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ProductListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductListItem on Product {
  id
  name
  price
  categoryId
  images
  category {
    name
    slug
  }
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
export const ProductListFragmentDoc = new TypedDocumentString(`
    fragment ProductList on ProductList {
  data {
    ...ProductListItem
  }
  meta {
    total
  }
}
    fragment ProductListItem on Product {
  id
  name
  price
  categoryId
  images
  category {
    name
    slug
  }
}`, {"fragmentName":"ProductList"}) as unknown as TypedDocumentString<ProductListFragment, unknown>;
export const ProductWithDescriptionFragmentDoc = new TypedDocumentString(`
    fragment ProductWithDescription on Product {
  ...ProductListItem
  description
}
    fragment ProductListItem on Product {
  id
  name
  price
  categoryId
  images
  category {
    name
    slug
  }
}`, {"fragmentName":"ProductWithDescription"}) as unknown as TypedDocumentString<ProductWithDescriptionFragment, unknown>;
export const CollectionGetItemDocument = new TypedDocumentString(`
    query CollectionGetItem($id: ID, $name: String, $slug: String) {
  collection(id: $id, name: $name, slug: $slug) {
    name
    description
    products {
      ...ProductListItem
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  price
  categoryId
  images
  category {
    name
    slug
  }
}`) as unknown as TypedDocumentString<CollectionGetItemQuery, CollectionGetItemQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList {
  collections {
    id
    name
    slug
    coverImage
  }
}
    `) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const ProductCategoriesGetListDocument = new TypedDocumentString(`
    query ProductCategoriesGetList {
  productCategories {
    data {
      id
      name
      slug
    }
  }
}
    `) as unknown as TypedDocumentString<ProductCategoriesGetListQuery, ProductCategoriesGetListQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($id: ID!) {
  product(id: $id) {
    ...ProductWithDescription
  }
}
    fragment ProductListItem on Product {
  id
  name
  price
  categoryId
  images
  category {
    name
    slug
  }
}
fragment ProductWithDescription on Product {
  ...ProductListItem
  description
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetByQueryDocument = new TypedDocumentString(`
    query ProductsGetByQuery($query: String!) {
  productsByQuery(query: $query) {
    ...ProductList
  }
}
    fragment ProductList on ProductList {
  data {
    ...ProductListItem
  }
  meta {
    total
  }
}
fragment ProductListItem on Product {
  id
  name
  price
  categoryId
  images
  category {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetByQueryQuery, ProductsGetByQueryQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($skip: Int, $take: Int, $where: ProductWhereInput) {
  products(take: $take, skip: $skip, where: $where) {
    ...ProductList
  }
}
    fragment ProductList on ProductList {
  data {
    ...ProductListItem
  }
  meta {
    total
  }
}
fragment ProductListItem on Product {
  id
  name
  price
  categoryId
  images
  category {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetListByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetListByCategorySlug($slug: String!, $skip: Int, $take: Int) {
  productsByCategorySlug(slug: $slug, skip: $skip, take: $take) {
    ...ProductList
  }
}
    fragment ProductList on ProductList {
  data {
    ...ProductListItem
  }
  meta {
    total
  }
}
fragment ProductListItem on Product {
  id
  name
  price
  categoryId
  images
  category {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetListByCategorySlugQuery, ProductsGetListByCategorySlugQueryVariables>;