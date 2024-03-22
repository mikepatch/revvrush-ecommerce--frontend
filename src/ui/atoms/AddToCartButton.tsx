"use client";

import { useFormStatus } from "react-dom";
import { ShoppingCart } from "lucide-react";

export const AddToCartButton = () => {
	const status = useFormStatus();

	return (
		<button
			aria-label="Add to cart"
			type="submit"
			disabled={status.pending}
			className="group rounded-sm bg-brand-primary px-4 py-3 text-font-light shadow-sm transition-all hover:brightness-105 disabled:cursor-wait disabled:opacity-50"
		>
			<div className="flex items-center gap-2">
				<ShoppingCart size={24} />
				Add to cart
			</div>
		</button>
	);
};
