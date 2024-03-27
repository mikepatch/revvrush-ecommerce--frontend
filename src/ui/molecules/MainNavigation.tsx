import { ShoppingCart, User } from "lucide-react";

import { MainNavItem } from "@/ui/atoms/MainNavItem";
import { sumItemsQuantityInCart } from "@/utils";

export const MainNavigation = async () => {
	const quantity = (await sumItemsQuantityInCart()) ?? 0;

	return (
		<div className="h-full">
			<ul className="flex h-full items-center">
				<MainNavItem href="/account" ariaLabel="Your account">
					<User />
					<span className="text-xs">Account</span>
				</MainNavItem>
				<MainNavItem href="/cart" ariaLabel="Cart">
					{quantity > 0 && (
						<span className="absolute right-0 top-1 rounded-full bg-brand-primary px-1 text-xs text-font-light">
							{quantity}
						</span>
					)}
					<ShoppingCart />
					<span className="text-xs">Cart</span>
				</MainNavItem>
			</ul>
		</div>
	);
};
