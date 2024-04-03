import { PageTitle } from "@/ui/atoms/PageTitle";
import { CartTable } from "@/ui/molecules/Cart/CartTable";
import { CheckoutButton } from "@/ui/atoms/CheckoutButton";

export default async function CartPage() {
	return (
		<>
			<PageTitle>Cart</PageTitle>
			<CartTable />
			<CheckoutButton />
		</>
	);
}
