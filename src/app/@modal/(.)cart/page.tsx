import NextImage from "next/image";
import Link from "next/link";
import { type Route } from "next";
import { redirect } from "next/navigation";

import { getCart } from "@/api/cart";
import { Overlay } from "@/ui/atoms/Overlay";

export default async function ModalCart() {
	const cart = await getCart();

	if (!cart) {
		redirect("/");
	}

	return (
		<>
			<Overlay />
			<div className="fixed right-0 top-0 z-50 h-screen w-full max-w-sm flex-col items-center justify-center bg-brand-background-lighter">
				<div className="flex flex-col items-center gap-4">
					<ul className="flex flex-col p-4">
						{cart?.data.items.map(
							(item) =>
								item && (
									<li
										key={item.product.id}
										className="flex w-full items-center justify-between border-b border-gray-200 p-4"
									>
										<div className="flex items-center gap-4">
											<NextImage
												width={50}
												height={50}
												src={item.product.images[0] as string}
												alt={item.product.name}
												className="h-16 w-16 object-cover"
											/>
											<div>
												<h3 className="text-lg font-semibold">{item.product.name}</h3>
											</div>
										</div>
									</li>
								),
						)}
					</ul>
					<Link
						href={"/payment" as Route}
						className="hover:bg-brand-primary-dark w-fit rounded-md bg-brand-primary px-4 py-2 text-white shadow-sm"
					>
						Checkout
					</Link>
				</div>
			</div>
		</>
	);
}
