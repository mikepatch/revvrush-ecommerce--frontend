"use client";

import { useFormStatus } from "react-dom";

export const AddReviewButton = () => {
	const status = useFormStatus();

	return (
		<button
			type="submit"
			disabled={status.pending}
			className="rounded-sm bg-brand-primary px-4 py-2 font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-105 disabled:cursor-wait disabled:opacity-50"
		>
			Submit
		</button>
	);
};
