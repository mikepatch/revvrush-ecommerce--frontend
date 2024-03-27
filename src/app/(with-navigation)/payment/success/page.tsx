import Stripe from "stripe";

export default async function PaymentSuccess({
	searchParams,
}: {
	searchParams: { payment_intent: string };
}) {
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(
		searchParams.payment_intent,
	);

	return <div>{stripeCheckoutSession.payment_status}</div>;
}
