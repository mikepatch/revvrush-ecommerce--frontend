import { formatPrice } from "@/utils";

type CartTableFooterRowProps = {
	totalPrice: number;
};

export const CartTableFooterRow = ({ totalPrice }: CartTableFooterRowProps) => {
	return (
		<tr>
			<th colSpan={3} className="px-4 py-4 text-right">
				Total
			</th>
			<td className="px-4 py-4">{formatPrice(totalPrice)}</td>
		</tr>
	);
};
