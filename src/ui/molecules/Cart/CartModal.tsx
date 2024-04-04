import { redirect } from "next/navigation";

import { getCart } from "@/api/cart";
import { CartModalFooter } from "@/ui/molecules/Cart/CartModalFooter";
import { CartModalHeader } from "@/ui/molecules/Cart/CartModalHeader";
import { CartModalList } from "@/ui/molecules/Cart/CartModalList";

export const CartModal = async () => {
	const cart = await getCart();
	if (!cart) {
		redirect("/");
	}

	return (
		<aside
			className="fixed inset-y-0 right-0 z-50 flex max-w-full flex-col overflow-y-auto bg-brand-background-lighter px-4 py-6 shadow-xl sm:w-1/2 lg:w-2/5 2xl:w-1/3"
			role="dialog"
			aria-modal
		>
			<CartModalHeader />
			<CartModalList items={cart.data.items} />
			<CartModalFooter totalPrice={cart.meta.totalPrice} />
		</aside>
	);
};
