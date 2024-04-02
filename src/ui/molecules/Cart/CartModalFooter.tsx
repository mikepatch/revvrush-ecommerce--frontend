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
			<a
				href={"/payment"}
				className="w-fit rounded-md bg-brand-primary px-4 py-2 text-white shadow-sm hover:bg-brand-primary-dark"
			>
				Checkout
			</a>
		</footer>
	);
};
