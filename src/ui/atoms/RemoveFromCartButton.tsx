"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { removeItemFromCart } from "@/app/(with-navigation)/cart/actions";

type RemoveFromCartButtonProps = {
	productId: string;
};

export const RemoveFromCartButton = ({ productId }: RemoveFromCartButtonProps) => {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	return (
		<button
			disabled={isPending}
			className="rounded-md border border-red-500 bg-white p-2 text-red-500 shadow-sm transition-colors duration-150 hover:bg-red-500 hover:text-white disabled:opacity-50"
			aria-label="Remove from cart"
			onClick={() =>
				startTransition(async () => {
					await removeItemFromCart(productId);
					router.refresh();
				})
			}
		>
			<Trash2 size={16} />
		</button>
	);
};
