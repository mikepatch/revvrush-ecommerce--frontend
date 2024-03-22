import { redirect } from "next/navigation";
import NextImage from "next/image";

import { getCartFromCookies } from "@/api/cart";
import { formatPrice } from "@/utils";
import { CartItemQuantity } from "@/ui/atoms/CartItemQuantity";

export default async function CartPage() {
	const cart = await getCartFromCookies();
	if (!cart) {
		redirect("/");
	}

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{cart.data.items.length > 0 ? (
						cart.data.items.map(
							(item) =>
								item && (
									<tr key={item.id}>
										<td className="flex items-center gap-2">
											<NextImage
												alt={item.product.name}
												src={(item.product.images as string[])[0] || ""}
												width={50}
												height={50}
											/>
											{item.product.name}
										</td>
										<td className="text-center">
											<div className="flex items-center">
												<CartItemQuantity itemId={item.id} quantity={item.quantity} />
											</div>
										</td>
										<td className="text-right">{formatPrice(item.product.price)}</td>
										<td className="text-right">
											{formatPrice(item.quantity * item.product.price)}
										</td>
									</tr>
								),
						)
					) : (
						<div>Cart is empty</div>
					)}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan={3}>Total</td>
						<td>{formatPrice(cart.meta.totalPrice)}</td>
					</tr>
				</tfoot>
			</table>
			{/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}
		</>
	);
}
