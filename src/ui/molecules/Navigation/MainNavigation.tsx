import { ShoppingCart, User } from "lucide-react";

import { MainNavItem } from "@/ui/atoms/MainNavItem";
import { getCart } from "@/api/cart";

export const MainNavigation = async () => {
	const cart = await getCart();
	const quantity =
		cart?.data.items.reduce((acc, item) => {
			if (item) {
				return acc + item.quantity;
			}
			return 0;
		}, 0) ?? 0;

	return (
		<div className="h-full">
			<ul className="flex h-full items-center">
				<MainNavItem href="/account" ariaLabel="Your account">
					<User />
					<span className="text-xs">Account</span>
				</MainNavItem>
				<MainNavItem href="/cart" ariaLabel="Cart">
					<ShoppingCart />
					<span className="text-xs">Cart</span>
					{quantity > 0 && (
						<span
							className="absolute right-0 top-1 rounded-full bg-brand-primary px-1 text-xs text-font-light"
							aria-label="Items in cart quantity"
						>
							{quantity}
						</span>
					)}
				</MainNavItem>
			</ul>
		</div>
	);
};
