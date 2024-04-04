import NextImage from "next/image";
import Link from "next/link";

import { type CartItemType } from "@/types";
import { CartItemQuantityForm } from "@/ui/molecules/Cart/CartItemQuantityForm";
import { RemoveFromCartButton } from "@/ui/atoms/RemoveFromCartButton";
import { formatPrice } from "@/utils";

type CartTableRowProps = {
	row: CartItemType;
};

export const CartTableRow = ({ row }: CartTableRowProps) => {
	return (
		<tr className="shadow-sm transition-colors hover:bg-gray-50">
			<th scope="row" className="group w-1/2 px-4 py-6 text-left">
				<Link href={`/product/${row.productId}`} className="flex items-center gap-2">
					<NextImage alt={row.name} src={row.image} width={50} height={50} />
					<span className="transition-colors group-hover:text-brand-primary">{row.name}</span>
				</Link>
			</th>
			<td scope="row" className="px-4 py-6 text-left">
				<CartItemQuantityForm itemId={row.cartItemId} quantity={row.quantity} />
			</td>
			<td scope="row" className="px-4 py-6 text-left">
				{formatPrice(row.price)}
			</td>
			<td scope="row" className="px-4 py-6 text-left">
				{formatPrice(row.total)}
			</td>
			<td scope="row" className="px-2 py-6 text-center">
				<RemoveFromCartButton itemId={row.cartItemId} />
			</td>
		</tr>
	);
};
