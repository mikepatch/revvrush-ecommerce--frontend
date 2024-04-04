import clsx from "clsx";
import Link from "next/link";

type CheckoutButtonProps = {
	type?: "standard" | "modal";
};

export const CheckoutButton = ({ type = "standard" }: CheckoutButtonProps) => {
	const className =
		"rounded-sm bg-brand-primary transition-colors px-4 py-2 text-white shadow-sm hover:bg-brand-primary-dark" as React.ComponentProps<"a">["className"];

	if (type === "modal") {
		return (
			<a href={"/payment"} className={clsx(className, "flex justify-center")}>
				Checkout
			</a>
		);
	}

	return (
		<Link href={"/payment"} className={clsx(className, "w-fit")}>
			Checkout
		</Link>
	);
};
