"use client";

import { useOptimistic } from "react";

import { changeItemQuantity } from "@/app/actions";

type CartItemQuantityProps = {
	itemId: string;
	quantity: number;
};

export const CartItemQuantityForm = ({ itemId, quantity }: CartItemQuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form className="flex">
			<button
				data-testid="decrement"
				type="submit"
				formAction={async () => {
					const newValue = optimisticQuantity - 1;

					setOptimisticQuantity(newValue);
					await changeItemQuantity(itemId, newValue);
				}}
				disabled={optimisticQuantity === 1}
				className="rounded-full border border-gray-200 px-2 text-font-dark transition-colors hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-transparent"
			>
				-
			</button>
			<span className="w-6 text-center" data-testid="quantity">
				{optimisticQuantity}
			</span>
			<button
				data-testid="increment"
				type="submit"
				formAction={async () => {
					const newValue = optimisticQuantity + 1;

					setOptimisticQuantity(newValue);
					await changeItemQuantity(itemId, newValue);
				}}
				className="rounded-full border border-gray-200 px-2 text-font-dark transition-colors hover:bg-gray-200"
			>
				+
			</button>
		</form>
	);
};
