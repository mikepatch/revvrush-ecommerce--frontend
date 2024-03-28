"use client";

import { useFormStatus } from "react-dom";
import { useState } from "react";

export const SortItemsButton = () => {
	const [sort, setSort] = useState<string>("price-asc");
	const status = useFormStatus();

	return (
		<button
			type="submit"
			disabled={status.pending}
			onClick={() => setSort(sort === "price-asc" ? "price-desc" : "price-asc")}
		>
			Price
		</button>
	);
};
