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
			className="rounded-sm bg-brand-primary p-2 text-white transition-colors hover:bg-red-600 disabled:opacity-50"
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
