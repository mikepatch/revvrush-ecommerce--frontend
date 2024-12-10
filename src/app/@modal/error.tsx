"use client";

import { useEffect } from "react";

export default function ModalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="rounded-lg bg-white p-6">
				<h2 className="mb-4 text-xl font-bold">Something went wrong!</h2>
				<button
					onClick={reset}
					className="rounded bg-brand-primary px-4 py-2 text-white hover:bg-brand-primary-dark"
				>
					Try again
				</button>
			</div>
		</div>
	);
}
