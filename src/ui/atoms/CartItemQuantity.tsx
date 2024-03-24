"use client";

import { useOptimistic } from "react";
import { changeItemQuantity } from "@/app/(with-navigation)/cart/actions";

type CartItemQuantityProps = {
	itemId: string;
	quantity: number;
};

export const CartItemQuantity = ({ itemId, quantity }: CartItemQuantityProps) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form>
			<button
				type="submit"
				formAction={async () => {
					const newValue = optimisticQuantity - 1;

					setOptimisticQuantity(newValue);
					await changeItemQuantity(itemId, newValue);
				}}
				disabled={optimisticQuantity === 1}
				className="rounded-sm bg-gray-200 p-2 text-gray-800 disabled:opacity-50"
			>
				-
			</button>
			<span className="w-8 text-center">{optimisticQuantity}</span>
			<button
				type="submit"
				formAction={async () => {
					const newValue = optimisticQuantity + 1;

					setOptimisticQuantity(newValue);
					await changeItemQuantity(itemId, newValue);
				}}
				className="rounded-sm bg-gray-200 p-2 text-gray-800"
			>
				+
			</button>
		</form>
	);
};
