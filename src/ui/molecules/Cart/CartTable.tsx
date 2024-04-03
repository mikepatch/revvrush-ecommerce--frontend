import { redirect } from "next/navigation";

import { getCart } from "@/api/cart";
import { CartTableRow } from "@/ui/molecules/Cart/CartTableRow";
import { formatCartDataToTableData } from "@/utils";
import { CartTableHeadersRow } from "@/ui/molecules/Cart/CartTableHeadersRow";
import { CartTableFooterRow } from "@/ui/molecules/Cart/CartTableFooterRow";

export const CartTable = async () => {
	const cart = await getCart();
	if (!cart || cart.data.items.length === 0) {
		redirect("/");
	}

	const { headers, rows, footer } = formatCartDataToTableData(cart);

	return (
		<table className="table-auto rounded-md border bg-brand-background-lighter p-4 shadow-sm">
			<thead className="shadow-sm">
				<CartTableHeadersRow headers={headers} />
			</thead>
			<tbody>
				{rows.map((row) => (
					<CartTableRow key={row.cartItemId} row={row} />
				))}
			</tbody>
			<tfoot>
				<CartTableFooterRow totalPrice={footer.totalPrice} />
			</tfoot>
		</table>
	);
};
