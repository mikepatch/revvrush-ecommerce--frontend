import { redirect } from "next/navigation";
import NextImage from "next/image";

import Link from "next/link";
import { getCartFromCookies } from "@/api/cart";
import { formatPrice } from "@/utils";
import { CartItemQuantity } from "@/ui/atoms/CartItemQuantity";
import { RemoveFromCartButton } from "@/ui/atoms/RemoveFromCartButton";

export default async function CartPage() {
	const cart = await getCartFromCookies();
	if (!cart) {
		redirect("/");
	}

	return (
		<section className="flex justify-center">
			<table className="table-auto border-spacing-x-4 border-spacing-y-4">
				<thead>
					<tr className="table-row ">
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
									<tr key={item.id} className="border border-slate-200 p-4">
										<td className="p-4">
											<Link
												href={`/product/${item.product.id}`}
												className="flex items-center gap-2"
											>
												<NextImage
													alt={item.product.name}
													src={(item.product.images as string[])[0] || ""}
													width={50}
													height={50}
												/>
												{item.product.name}
											</Link>
										</td>
										<td className="text-center">
											<div className="flex items-center justify-center">
												<CartItemQuantity itemId={item.id} quantity={item.quantity} />
											</div>
										</td>
										<td className="text-right">{formatPrice(item.product.price)}</td>
										<td className="text-right">
											{formatPrice(item.quantity * item.product.price)}
										</td>
										<td className="">
											<RemoveFromCartButton productId={item.id} />
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
						<th>Total</th>
						<td>{formatPrice(cart.meta.totalPrice)}</td>
					</tr>
				</tfoot>
			</table>
		</section>
	);
}
