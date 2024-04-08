"use client";

import { useFormStatus } from "react-dom";
import { ShoppingCart } from "lucide-react";
import clsx from "clsx";

type AddToCartButtonProps = {
	variant?: "label" | "icon" | "both";
};

export const AddToCartButton = ({ variant = "both", ...props }: AddToCartButtonProps) => {
	const status = useFormStatus();

	return (
		<button
			{...props}
			aria-label="Add to cart"
			type="submit"
			disabled={status.pending}
			className={clsx(
				"group flex items-center rounded-sm bg-brand-primary font-semibold shadow-sm transition-all disabled:cursor-wait disabled:opacity-50",
				variant === "both" &&
					"gap-2 px-4 py-2 text-white hover:bg-brand-primary-dark hover:shadow-md",
				variant === "icon" &&
					"gap-1 border border-brand-primary bg-transparent px-1 !text-brand-primary hover:bg-brand-primary hover:!text-white",
			)}
		>
			<ShoppingCart size={variant === "icon" ? 16 : 24} />
			{variant === "icon" && <span className="text-lg">+</span>}
			{variant !== "icon" && <span>Add to cart</span>}
		</button>
	);
};
