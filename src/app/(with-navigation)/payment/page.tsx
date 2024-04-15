import { redirect } from "next/navigation";
import Stripe from "stripe";
import NextImage from "next/image";

import { getCart } from "@/api/cart";
import { StripeForm } from "@/ui/molecules/Cart/StripeForm";
import { PageTitle } from "@/ui/atoms/PageTitle";
import { formatPrice } from "@/utils";
import { Heading } from "@/ui/atoms/Heading";

export default async function PaymentPage() {
	const cart = await getCart();
	if (!cart) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY env variable");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const totalAmount = cart.meta.totalPrice;

	const paymentIntent = await stripe.paymentIntents.create({
		amount: totalAmount * 100,
		currency: "usd",
		automatic_payment_methods: {
			enabled: true,
		},
		metadata: {
			cartId: cart.data.id,
		},
	});

	if (!paymentIntent.client_secret) {
		throw new Error("Missing client_secret");
	}

	return (
		<div>
			<PageTitle>Payment</PageTitle>
			<section className="flex justify-between gap-6 p-4">
				<div className="flex flex-col gap-2">
					<Heading level={2}>Order summary:</Heading>
					<table className="table-auto">
						<thead>
							<tr>
								<th>Product</th>
								<th>Quantity</th>
								<th>Price</th>
							</tr>
						</thead>
						<tbody>
							{cart.data.items.map(
								(item) =>
									item && (
										<tr key={item.product.id}>
											<td className="flex items-center gap-2">
												<NextImage
													src={item.product.images[0] as string}
													alt={item.product.name}
													width={50}
													height={50}
												/>
												{item.product.name}
											</td>
											<td className="text-right">{item.quantity}</td>
											<td>${item.product.price}</td>
										</tr>
									),
							)}
						</tbody>
					</table>
					<p>Total: {formatPrice(totalAmount)}</p>
				</div>
				<StripeForm
					clientSecret={paymentIntent.client_secret}
					totalAmount={formatPrice(totalAmount)}
				/>
			</section>
		</div>
	);
}
