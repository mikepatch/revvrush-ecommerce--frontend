"use client";

import { useState } from "react";
import { addProductToCartAction } from "@/app/actions";
import { type ProductWithDescriptionFragment } from "@/gql/graphql";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";

type AddToCartFormProps = {
	productData: ProductWithDescriptionFragment["data"];
};

export const AddToCartForm = ({ productData }: AddToCartFormProps) => {
	const [quantity, setQuantity] = useState<number>(1);

	return (
		<form action={addProductToCartAction} className="flex flex-col items-center gap-4">
			<div className="flex items-center self-end shadow-sm">
				<button
					aria-label="Decrease quantity"
					type="button"
					className="aspect-square w-8 rounded-l-sm bg-brand-primary text-xl text-white transition-colors hover:bg-brand-primary-dark"
					onClick={() => setQuantity((prevValue) => (prevValue > 1 ? prevValue - 1 : prevValue))}
				>
					-
				</button>
				<input
					aria-label="Quantity"
					type="number"
					id="quantity"
					name="quantity"
					value={quantity}
					className="w-12 px-2 py-1 text-center [appearance:textfield] focus:outline-brand-primary [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
					onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
				/>

				<button
					aria-label="Increase quantity"
					type="button"
					className="aspect-square w-8 rounded-r-sm bg-brand-primary text-xl text-white transition-colors hover:bg-brand-primary-dark"
					onClick={() => setQuantity((prevValue) => prevValue + 1)}
				>
					+
				</button>
			</div>
			<input type="hidden" name="productId" value={productData.id} aria-hidden />
			<AddToCartButton variant="both" data-testid="add-to-cart-button" />
		</form>
	);
};
