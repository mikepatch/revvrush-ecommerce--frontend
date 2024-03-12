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

export type CreateCollectionInput = {
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
  stock: Scalars['Float']['input'];
};

export type ListMeta = {
  /** Total number of records */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  createCollection?: Maybe<Collection>;
  createProduct: Product;
  createProductCategory: ProductCategory;
  removeCollection: Collection;
  removeProduct: Product;
  removeProductCategory: ProductCategory;
  updateCollection: Collection;
  updateProduct: Product;
  updateProductCategory: ProductCategory;
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


export type MutationRemoveCollectionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveProductCategoryArgs = {
  id: Scalars['ID']['input'];
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
  /** Product stock */
  stock: Scalars['Int']['output'];
  /** Product updatedAt */
  updatedAt: Scalars['DateTime']['output'];
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

export type ProductList = {
  /** List of products */
  data: Array<Product>;
  /** List metadata */
  meta: ListMeta;
};

export type Query = {
  collection: Collection;
  collections: Array<Collection>;
  product: Product;
  productById: Product;
  productCategories: ProductCategoriesList;
  productCategory: ProductCategory;
  productCategoryById: ProductCategory;
  products: ProductList;
  productsByCategorySlug: ProductList;
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


export type QueryProductsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProductsByCategorySlugArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCollectionInput = {
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
  stock?: InputMaybe<Scalars['Float']['input']>;
};

export type CollectionGetItemQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type CollectionGetItemQuery = { collection: { name: string, description?: string | null, products: Array<{ id: string, name: string, price: number, categoryId: string, images: Array<string | null>, stock: number, category?: { name: string, slug?: string | null } | null }> } };

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetListQuery = { collections: Array<{ id: string, name: string, slug?: string | null }> };

export type ProductCategoriesGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductCategoriesGetListQuery = { productCategories: { data: Array<{ id: string, name: string, slug?: string | null }> } };

export type ProductGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product: { description: string, id: string, name: string, price: number, categoryId: string, images: Array<string | null>, stock: number, category?: { name: string, slug?: string | null } | null } };

export type ProductListItemFragment = { id: string, name: string, price: number, categoryId: string, images: Array<string | null>, stock: number, category?: { name: string, slug?: string | null } | null };

export type ProductWithDescriptionFragment = { description: string, id: string, name: string, price: number, categoryId: string, images: Array<string | null>, stock: number, category?: { name: string, slug?: string | null } | null };

export type ProductsGetListQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetListQuery = { products: { data: Array<{ id: string, name: string, price: number, categoryId: string, images: Array<string | null>, stock: number, category?: { name: string, slug?: string | null } | null }>, meta: { total: number } } };

export type ProductsGetListByCategorySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetListByCategorySlugQuery = { productsByCategorySlug: { data: Array<{ id: string, name: string, price: number, categoryId: string, images: Array<string | null>, stock: number, category?: { name: string, slug?: string | null } | null }>, meta: { total: number } } };

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
  stock
  category {
    name
    slug
  }
}
    `, {"fragmentName":"ProductListItem"}) as unknown as TypedDocumentString<ProductListItemFragment, unknown>;
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
  stock
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
  stock
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
  stock
  category {
    name
    slug
  }
}
fragment ProductWithDescription on Product {
  ...ProductListItem
  description
}`) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($skip: Int, $take: Int) {
  products(take: $take, skip: $skip) {
    data {
      ...ProductListItem
    }
    meta {
      total
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  price
  categoryId
  images
  stock
  category {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ProductsGetListByCategorySlugDocument = new TypedDocumentString(`
    query ProductsGetListByCategorySlug($slug: String!, $skip: Int, $take: Int) {
  productsByCategorySlug(slug: $slug, skip: $skip, take: $take) {
    data {
      ...ProductListItem
    }
    meta {
      total
    }
  }
}
    fragment ProductListItem on Product {
  id
  name
  price
  categoryId
  images
  stock
  category {
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductsGetListByCategorySlugQuery, ProductsGetListByCategorySlugQueryVariables>;