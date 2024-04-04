import { ArrowRight } from "lucide-react";

import { CheckoutButton } from "@/ui/atoms/CheckoutButton";
import { formatPrice } from "@/utils";

type CartModalFooterProps = {
	totalPrice: number;
};

export const CartModalFooter = ({ totalPrice }: CartModalFooterProps) => {
	return (
		<footer className="flex flex-col gap-4 border-t pt-6">
			<div className="flex justify-between">
				<p>Total</p>
				<p>{formatPrice(totalPrice)}</p>
			</div>
			<div>
				<CheckoutButton type="modal" />
			</div>
			<div className="flex justify-center">
				<a
					href="/cart"
					className="flex items-center gap-1 text-brand-primary transition-all hover:underline"
				>
					<span>View Cart</span> <ArrowRight size={16} />
				</a>
			</div>
		</footer>
	);
};
