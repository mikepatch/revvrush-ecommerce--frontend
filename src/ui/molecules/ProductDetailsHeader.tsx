import { revalidateTag } from "next/cache";

import { formatPrice } from "@/utils";
import { type ProductListItemFragment } from "@/gql/graphql";
import { addProductToCart, getOrCreateCart } from "@/api/cart";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { ProductDetailsImage } from "@/ui/atoms/ProductDetailsImage";

type ProductsDetailsHeaderProps = {
	product: ProductListItemFragment;
};

export const ProductDetailsHeader = ({ product }: ProductsDetailsHeaderProps) => {
	const addProductToCartAction = async (formData: FormData) => {
		"use server";

		try {
			const cart = await getOrCreateCart();
			const quantity = Number(formData.get("quantity"));

			await addProductToCart(cart.data.id, product.id, quantity);
			revalidateTag("cart");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<header className="flex flex-col justify-between gap-6 sm:flex-row">
			<div className="min-w-1/2 group bg-white">
				{product.images && product.images[0] && (
					<ProductDetailsImage
						src={product.images[0]}
						alt={product.name}
						width={300}
						height={300}
						resizeOnHover
					/>
				)}
			</div>
			<section className="flex grow flex-col justify-between">
				<div className="flex w-full flex-col">
					<h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
					<small className="text-xs text-gray-500">ID: {product.id}</small>
				</div>
				{/* {product.stock > 0 ? (
					<div className="flex gap-2">
						<CheckCheck color="green" />
						In stock
					</div>
				) : (
					<div className="flex gap-2">
						<X color="red" />
						Out of stock
					</div>
				)} */}
				<div className="flex flex-wrap items-center justify-between rounded-sm p-4">
					<p className=" text-2xl font-semibold">{formatPrice(product.price)}</p>
					<form action={addProductToCartAction}>
						{/* <div className="flex items-center">
							<button type="button" className="rounded-l bg-gray-200 px-2 py-1">
								-
							</button>
							<input
								type="number"
								name="quantity"
								defaultValue="1"
								className="w-16 bg-gray-200 px-2 py-1 text-center"
							/>
							<button type="button" className="rounded-r bg-gray-200 px-2 py-1">
								+
							</button>
						</div> */}
						<input type="number" name="quantity" defaultValue="1" className="w-12 px-2 py-2" />
						<AddToCartButton />
					</form>
				</div>
			</section>
		</header>
	);
};
