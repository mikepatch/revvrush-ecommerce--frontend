import { redirect } from "next/navigation";
import NextImage from "next/image";
import Link from "next/link";

import { formatPrice } from "@/utils";
import { RemoveFromCartButton } from "@/ui/atoms/RemoveFromCartButton";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { getCart } from "@/api/cart";
import { CartItemQuantityForm } from "@/ui/molecules/Cart/CartItemQuantityForm";

export default async function CartPage() {
	const cart = await getCart();

	if (!cart || cart.data.items.length === 0) {
		redirect("/");
	}

	return (
		<section className="flex flex-col gap-4 p-4">
			<PageTitle title="Cart" />
			<table className="table-auto rounded-md border bg-brand-background-lighter p-4 shadow-sm">
				<thead className="shadow-sm">
					<tr>
						<th className="px-4 py-4 text-left">Product</th>
						<th className="px-4 py-4 text-left">Quantity</th>
						<th className="px-4 py-4 text-left">Price</th>
						<th className="px-4 py-4 text-left">Total</th>
					</tr>
				</thead>
				<tbody>
					{cart.data.items.length > 0 ? (
						cart.data.items.map(
							(item) =>
								item && (
									<tr key={item.id} className="shadow-sm transition-colors hover:bg-gray-50">
										<td className="group w-1/2 px-4 py-6 text-left">
											<Link
												href={`/product/${item.product.id}`}
												className="flex items-center gap-2"
											>
												<NextImage
													alt={item.product.name}
													src={(item.product.images[0] as string) || ""}
													width={50}
													height={50}
												/>
												<span className="transition-colors group-hover:text-brand-primary">
													{item.product.name}
												</span>
											</Link>
										</td>
										<td className="px-4 py-6 text-left">
											<CartItemQuantityForm itemId={item.id} quantity={item.quantity} />
										</td>
										<td className="px-4 py-6 text-left">{formatPrice(item.product.price)}</td>
										<td className="px-4 py-6 text-left">
											{formatPrice(item.quantity * item.product.price)}
										</td>
										<td className="px-2 py-6 text-center">
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
						<th colSpan={3} className="px-4 py-4 text-right">
							Total
						</th>
						<td className="px-4 py-4">{formatPrice(cart.meta.totalPrice)}</td>
					</tr>
				</tfoot>
			</table>
			<Link
				href={"/payment"}
				className="w-fit rounded-md bg-brand-primary px-4 py-2 text-white shadow-sm hover:bg-brand-primary-dark"
			>
				Checkout
			</Link>
		</section>
	);
}
