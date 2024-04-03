import Link from "next/link";

type CheckoutButtonProps = {
	type?: "standard" | "modal";
};

export const CheckoutButton = ({ type = "standard" }: CheckoutButtonProps) => {
	const className =
		"w-fit self-end rounded-md bg-brand-primary px-4 py-2 text-white shadow-sm hover:bg-brand-primary-dark" as React.ComponentProps<"a">["className"];

	if (type === "modal") {
		return (
			<a href={"/payment"} className={className}>
				Checkout
			</a>
		);
	}

	return (
		<Link href={"/payment"} className={className}>
			Checkout
		</Link>
	);
};
