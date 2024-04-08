import { ShoppingCart, User } from "lucide-react";

import { MainNavItem } from "@/ui/atoms/MainNavItem";
import { getCartItemsQty } from "@/api/cart";

export const MainNavigation = async () => {
	const quantity = await getCartItemsQty();

	return (
		<div className="h-full">
			<ul className="flex h-full items-center">
				<MainNavItem href="/account" ariaLabel="Your account" disabled>
					<User />
					<span className="text-xs">Account</span>
				</MainNavItem>
				<MainNavItem href="/cart" ariaLabel="Cart" disabled={quantity === 0}>
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
