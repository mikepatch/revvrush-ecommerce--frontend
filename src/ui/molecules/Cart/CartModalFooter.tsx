import { CheckoutButton } from "@/ui/atoms/CheckoutButton";
import { formatPrice } from "@/utils";

type CartModalFooterProps = {
	totalPrice: number;
};

export const CartModalFooter = ({ totalPrice }: CartModalFooterProps) => {
	return (
		<footer className="flex flex-wrap justify-end gap-4">
			<a href="/cart" className="underline">
				Cart Details
			</a>
			<p className="text-lg font-semibold">Total: {formatPrice(totalPrice)}</p>
			<CheckoutButton type="modal" />
		</footer>
	);
};
