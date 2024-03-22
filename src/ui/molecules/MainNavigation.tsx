import { ShoppingBasket, User } from "lucide-react";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const MainNavigation = async () => {
	await Promise.resolve();
	return (
		<div className="h-full">
			<ul className="flex h-full items-center">
				<li className="h-full">
					<ActiveLink
						href="/account"
						className="flex h-full flex-col items-center justify-center gap-1 border-b-4 border-transparent px-2 py-1 transition-all hover:border-brand-primary"
						activeClassName="!border-brand-primary"
						ariaLabel="Your account"
					>
						<div>
							<User />
						</div>
						<span className="text-xs">Your account</span>
					</ActiveLink>
				</li>
				<li className="h-full">
					<ActiveLink
						href="/cart"
						className="flex h-full flex-col items-center justify-center gap-1 border-b-4 border-transparent px-2 py-1 transition-all hover:border-brand-primary"
						activeClassName="!border-brand-primary"
						ariaLabel="Cart"
					>
						<ShoppingBasket />
						<span className="text-xs">Cart (0)</span>
					</ActiveLink>
				</li>
			</ul>
		</div>
	);
};
