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

export type Cart = {
  /** Product createdAt */
  createdAt: Scalars['DateTime']['output'];
  /** Cart ID */
  id: Scalars['ID']['output'];
  /** Items in the cart */
  items: Array<CartItem>;
  /** Product updatedAt */
  updatedAt: Scalars['DateTime']['output'];
  /** User ID */
  userId: Scalars['ID']['output'];
};

export type CartItem = {
  /** Cart ID */
  cartId: Scalars['ID']['output'];
  /** Product createdAt */
  createdAt: Scalars['DateTime']['output'];
  /** CartProduct ID */
  id: Scalars['ID']['output'];
  /** Product */
  product: Product;
  /** Product ID */
  productId: Scalars['ID']['output'];
  /** Product quantity */
  quantity: Scalars['Int']['output'];
  /** Product updatedAt */
  updatedAt: Scalars['DateTime']['output'];
};

export type CartItemListRelationFilter = {
  every?: InputMaybe<CartItemWhereInput>;
  none?: InputMaybe<CartItemWhereInput>;
  some?: InputMaybe<CartItemWhereInput>;
};

export type CartItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CartItemWhereInput = {
  AND?: InputMaybe<Array<CartItemWhereInput>>;
  NOT?: InputMaybe<Array<CartItemWhereInput>>;
  OR?: InputMaybe<Array<CartItemWhereInput>>;
  cart?: InputMaybe<CartRelationFilter>;
  cartId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CartMeta = {
  /** Total price of the cart */
  totalPrice: Scalars['Float']['output'];
};

export type CartRelationFilter = {
  is?: InputMaybe<CartWhereInput>;
  isNot?: InputMaybe<CartWhereInput>;
};

export type CartWhereInput = {
  AND?: InputMaybe<Array<CartWhereInput>>;
  NOT?: InputMaybe<Array<CartWhereInput>>;
  OR?: InputMaybe<Array<CartWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  items?: InputMaybe<CartItemListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CartWithMeta = {
  /** Cart */
  data: Cart;
  /** Cart meta */
  meta: CartMeta;
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
  slug: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
};

export type CollectionListRelationFilter = {
  every?: InputMaybe<CollectionWhereInput>;
  none?: InputMaybe<CollectionWhereInput>;
  some?: InputMaybe<CollectionWhereInput>;
};

export type CollectionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
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

export type CreateCartInput = {
  /** User ID */
  userId: Scalars['ID']['input'];
};

export type CreateCartItemInput = {
  /** Cart ID */
  cartId: Scalars['ID']['input'];
  /** Product ID */
  productId: Scalars['ID']['input'];
  /** Product quantity */
  quantity: Scalars['Int']['input'];
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

export type CreateOrderInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
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

export type EnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
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
  /** Add item to cart */
  addItemToCart?: Maybe<CartItem>;
  createCart: Cart;
  createCollection?: Maybe<Collection>;
  createOrder: Order;
  createProduct: Product;
  createProductCategory: ProductCategory;
  createProductVariant: ProductVariant;
  removeCart: Cart;
  removeCollection: Collection;
  /** Remove item from cart */
  removeItemFromCart?: Maybe<CartItem>;
  removeOrder: Order;
  removeProduct: Product;
  removeProductCategory: ProductCategory;
  removeProductVariant: ProductVariant;
  updateCart: Cart;
  updateCartItem: CartItem;
  updateCollection: Collection;
  updateOrder: Order;
  updateProduct: Product;
  updateProductCategory: ProductCategory;
  updateProductVariant: ProductVariant;
};


export type MutationAddItemToCartArgs = {
  createCartItemInput: CreateCartItemInput;
};


export type MutationCreateCartArgs = {
  createCartInput: CreateCartInput;
};


export type MutationCreateCollectionArgs = {
  createCollectionInput: CreateCollectionInput;
};


export type MutationCreateOrderArgs = {
  createOrderInput: CreateOrderInput;
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


export type MutationRemoveCartArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRemoveCollectionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveItemFromCartArgs = {
  cartItemId: Scalars['ID']['input'];
};


export type MutationRemoveOrderArgs = {
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


export type MutationUpdateCartArgs = {
  id: Scalars['ID']['input'];
  updateCartInput: UpdateCartInput;
};


export type MutationUpdateCartItemArgs = {
  cartItemId: Scalars['ID']['input'];
  data: UpdateCartItemInput;
};


export type MutationUpdateCollectionArgs = {
  updateCollectionInput: UpdateCollectionInput;
};


export type MutationUpdateOrderArgs = {
  updateOrderInput: UpdateOrderInput;
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

export type NestedEnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
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

export type NullsOrder =
  | 'first'
  | 'last';

export type Order = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['output'];
};

export type OrderItemListRelationFilter = {
  every?: InputMaybe<OrderItemWhereInput>;
  none?: InputMaybe<OrderItemWhereInput>;
  some?: InputMaybe<OrderItemWhereInput>;
};

export type OrderItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderItemWhereInput = {
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderRelationFilter>;
  orderId?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OrderListRelationFilter = {
  every?: InputMaybe<OrderWhereInput>;
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
};

export type OrderRelationFilter = {
  is?: InputMaybe<OrderWhereInput>;
  isNot?: InputMaybe<OrderWhereInput>;
};

export type OrderStatus =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'CREATED'
  | 'PAID';

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  items?: InputMaybe<OrderItemListRelationFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  totalPrice?: InputMaybe<FloatFilter>;
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

export type ProductCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductCategoryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parentCategory?: InputMaybe<ProductCategoryOrderByWithRelationInput>;
  parentCategoryId?: InputMaybe<SortOrderInput>;
  products?: InputMaybe<ProductOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  subCategories?: InputMaybe<ProductCategoryOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
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

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  cartItem?: InputMaybe<CartItemOrderByRelationAggregateInput>;
  category?: InputMaybe<ProductCategoryOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrder>;
  collections?: InputMaybe<CollectionOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrderInput>;
  orderItem?: InputMaybe<OrderItemOrderByRelationAggregateInput>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  variants?: InputMaybe<ProductVariantOrderByRelationAggregateInput>;
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

export type ProductVariantOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
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
  cartItem?: InputMaybe<CartItemListRelationFilter>;
  category?: InputMaybe<ProductCategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  collections?: InputMaybe<CollectionListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<StringNullableListFilter>;
  name?: InputMaybe<StringFilter>;
  orderId?: InputMaybe<StringNullableFilter>;
  orderItem?: InputMaybe<OrderItemListRelationFilter>;
  price?: InputMaybe<IntFilter>;
  slug?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  variants?: InputMaybe<ProductVariantListRelationFilter>;
};

export type Query = {
  cartById: CartWithMeta;
  carts: Array<Cart>;
  collection: Collection;
  collections: Array<Collection>;
  order: Order;
  orders: Array<Order>;
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


export type QueryCartByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCartsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
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


export type QueryOrderArgs = {
  id: Scalars['Int']['input'];
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
  orderBy?: InputMaybe<ProductOrderByWithRelationInput>;
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

export type SortOrder =
  | 'asc'
  | 'desc';

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

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

export type UpdateCartInput = {
  /** User ID */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateCartItemInput = {
  /** Cart ID */
  cartId?: InputMaybe<Scalars['ID']['input']>;
  /** Product ID */
  productId?: InputMaybe<Scalars['ID']['input']>;
  /** Product quantity */
  quantity?: InputMaybe<Scalars['Int']['input']>;
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

export type UpdateOrderInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
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

export type CartAddItemMutationVariables = Exact<{
  cartId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartAddItemMutation = { addItemToCart?: { id: string } | null };

export type CartCreateMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type CartCreateMutation = { createCart: { id: string } };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cartById: { data: { id: string, items: Array<{ id: string, quantity: number, product: { id: string, name: string, price: number, images: Array<string | null> } }> }, meta: { totalPrice: number } } };

export type CartItemRemoveFromCartMutationVariables = Exact<{
  cartItemId: Scalars['ID']['input'];
}>;


export type CartItemRemoveFromCartMutation = { removeItemFromCart?: { id: string } | null };

export type CartUpdateItemMutationVariables = Exact<{
  cartItemId: Scalars['ID']['input'];
  data: UpdateCartItemInput;
}>;


export type CartUpdateItemMutation = { updateCartItem: { id: string } };

export type CartWithMetadataFragment = { data: { id: string, items: Array<{ id: string, quantity: number, product: { id: string, name: string, price: number, images: Array<string | null> } }> }, meta: { totalPrice: number } };

export type CollectionGetItemQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type CollectionGetItemQuery = { collection: { name: string, description?: string | null, products: Array<{ id: string, name: string, price: number, categoryId: string, images: Array<string | null>, category?: { name: string, slug?: string | null } | null }> } };

export type CollectionListFragment = { id: string, name: string, slug: string, coverImage: string };

export type CollectionWithProductsFragment = { name: string, description?: string | null, products: Array<{ id: string, name: string, price: number, categoryId: string, images: Array<string | null>, category?: { name: string, slug?: string | null } | null }> };

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetListQuery = { collections: Array<{ id: string, name: string, slug: string, coverImage: string }> };

export type ProductCategoriesGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductCategoriesGetListQuery = { productCategories: { data: Array<{ id: string, name: string, slug?: string | null }> } };

export type ProductCategoriesListFragment = { data: Array<{ id: string, name: string, slug?: string | null }> };

export type ProductCategoriesListItemFragment = { id: string, name: string, slug?: string | null };

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
  orderBy?: InputMaybe<ProductOrderByWithRelationInput>;
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
export const CartWithMetadataFragmentDoc = new TypedDocumentString(`
    fragment CartWithMetadata on CartWithMeta {
  data {
    id
    items {
      id
      quantity
      product {
        id
        name
        price
        images
      }
    }
  }
  meta {
    totalPrice
  }
}
    `, {"fragmentName":"CartWithMetadata"}) as unknown as TypedDocumentString<CartWithMetadataFragment, unknown>;
export const CollectionListFragmentDoc = new TypedDocumentString(`
    fragment CollectionList on Collection {
  id
  name
  slug
  coverImage
}
    `, {"fragmentName":"CollectionList"}) as unknown as TypedDocumentString<CollectionListFragment, unknown>;
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
export const CollectionWithProductsFragmentDoc = new TypedDocumentString(`
    fragment CollectionWithProducts on Collection {
  name
  description
  products {
    ...ProductListItem
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
}`, {"fragmentName":"CollectionWithProducts"}) as unknown as TypedDocumentString<CollectionWithProductsFragment, unknown>;
export const ProductCategoriesListFragmentDoc = new TypedDocumentString(`
    fragment ProductCategoriesList on ProductCategoriesList {
  data {
    id
    name
    slug
  }
}
    `, {"fragmentName":"ProductCategoriesList"}) as unknown as TypedDocumentString<ProductCategoriesListFragment, unknown>;
export const ProductCategoriesListItemFragmentDoc = new TypedDocumentString(`
    fragment ProductCategoriesListItem on ProductCategory {
  id
  name
  slug
}
    `, {"fragmentName":"ProductCategoriesListItem"}) as unknown as TypedDocumentString<ProductCategoriesListItemFragment, unknown>;
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
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($cartId: ID!, $productId: ID!, $quantity: Int!) {
  addItemToCart(
    createCartItemInput: {cartId: $cartId, productId: $productId, quantity: $quantity}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartCreateDocument = new TypedDocumentString(`
    mutation CartCreate($userId: ID!) {
  createCart(createCartInput: {userId: $userId}) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartCreateMutation, CartCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cartById(id: $id) {
    ...CartWithMetadata
  }
}
    fragment CartWithMetadata on CartWithMeta {
  data {
    id
    items {
      id
      quantity
      product {
        id
        name
        price
        images
      }
    }
  }
  meta {
    totalPrice
  }
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartItemRemoveFromCartDocument = new TypedDocumentString(`
    mutation CartItemRemoveFromCart($cartItemId: ID!) {
  removeItemFromCart(cartItemId: $cartItemId) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartItemRemoveFromCartMutation, CartItemRemoveFromCartMutationVariables>;
export const CartUpdateItemDocument = new TypedDocumentString(`
    mutation CartUpdateItem($cartItemId: ID!, $data: UpdateCartItemInput!) {
  updateCartItem(cartItemId: $cartItemId, data: $data) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartUpdateItemMutation, CartUpdateItemMutationVariables>;
export const CollectionGetItemDocument = new TypedDocumentString(`
    query CollectionGetItem($id: ID, $name: String, $slug: String) {
  collection(id: $id, name: $name, slug: $slug) {
    ...CollectionWithProducts
  }
}
    fragment CollectionWithProducts on Collection {
  name
  description
  products {
    ...ProductListItem
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
    ...CollectionList
  }
}
    fragment CollectionList on Collection {
  id
  name
  slug
  coverImage
}`) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const ProductCategoriesGetListDocument = new TypedDocumentString(`
    query ProductCategoriesGetList {
  productCategories {
    ...ProductCategoriesList
  }
}
    fragment ProductCategoriesList on ProductCategoriesList {
  data {
    id
    name
    slug
  }
}`) as unknown as TypedDocumentString<ProductCategoriesGetListQuery, ProductCategoriesGetListQueryVariables>;
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
    query ProductsGetList($skip: Int, $take: Int, $where: ProductWhereInput, $orderBy: ProductOrderByWithRelationInput) {
  products(take: $take, skip: $skip, where: $where, orderBy: $orderBy) {
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