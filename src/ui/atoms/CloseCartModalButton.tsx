"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export const CloseCartModalButton = () => {
	const router = useRouter();

	return (
		<button onClick={() => router.back()}>
			<X className="text-font-gray transition-colors hover:text-font-dark" />
		</button>
	);
};
