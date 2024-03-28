import NextImage from "next/image";
import { redirect } from "next/navigation";

import { getCart } from "@/api/cart";
import { Overlay } from "@/ui/atoms/Overlay";
import { formatPrice } from "@/utils";
import { Heading } from "@/ui/atoms/Heading";
import { RemoveFromCartButton } from "@/ui/atoms/RemoveFromCartButton";

export default async function ModalCart() {
	const cart = await getCart();

	if (!cart) {
		redirect("/");
	}

	return (
		<>
			<Overlay />
			<div className="fixed right-0 top-0 z-50 h-screen max-w-sm bg-brand-background-lighter">
				<div className="flex h-full flex-col justify-center gap-4 p-8">
					<header>
						<Heading level={2}>Your cart</Heading>
					</header>
					<div className="no-scrollbar overflow-y-auto">
						<table className="w-full table-auto">
							<tbody>
								{cart.data.items.map((item) => (
									<tr key={item.product.id} className="border-b border-gray-200">
										<td className="px-1">{item.quantity}x</td>
										<td className="px-1 py-6">
											<a href={`/product/${item.product.id}`} className="flex items-center gap-2">
												<NextImage
													width={50}
													height={50}
													src={item.product.images[0] as string}
													alt={item.product.name}
													className="h-16 w-16 object-cover"
												/>
												{item.product.name}
											</a>
										</td>
										<td className="px-1">
											<RemoveFromCartButton productId={item.id} />
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<footer className="flex flex-wrap justify-end gap-4">
						<a href={"/cart"} className="underline">
							Cart Details
						</a>
						<p className="text-lg font-semibold">Total: {formatPrice(cart.meta.totalPrice)}</p>
						<a
							href={"/payment"}
							className="hover:bg-brand-primary-dark w-fit rounded-md bg-brand-primary px-4 py-2 text-white shadow-sm"
						>
							Checkout
						</a>
					</footer>
				</div>
			</div>
		</>
	);
}
