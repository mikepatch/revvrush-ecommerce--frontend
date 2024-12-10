import Stripe from "stripe";

type PaymentSuccessProps = {
	searchParams: Promise<{ payment_intent: string }>;
};

export default async function PaymentSuccess({ searchParams }: PaymentSuccessProps) {
	const resolvedSearchParams = await searchParams;
	if (!process.env.STRIPE_SECRET_KEY) {
		return null;
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-10-16",
		typescript: true,
	});

	const stripeCheckoutSession = await stripe.checkout.sessions.retrieve(
		resolvedSearchParams.payment_intent,
	);

	return <div>{stripeCheckoutSession.payment_status}</div>;
}
