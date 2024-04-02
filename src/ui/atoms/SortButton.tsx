"use client";

import { type Route } from "next";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export const SortButton = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [selectedSortValue, setSelectedSortValue] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setSelectedSortValue(value);
		const sortBy = value.includes("price") ? "price" : "rating";
		const sortOrder = value.includes("asc") ? "asc" : "desc";

		router.push(`${pathname}?sort_by=${sortBy}&sort_order=${sortOrder}` as Route);
	};

	return (
		<label className="flex gap-2">
			Sort by:
			<select
				name="selectedSort"
				value={selectedSortValue}
				onChange={handleChange}
				className="rounded-sm px-2 py-1"
			>
				<option value="" disabled>
					-
				</option>
				<option value="price-asc" data-testid="sort-by-price">
					Price: Low to High
				</option>
				<option value="price-desc">Price: High to Low</option>
				<option value="avg_rating-asc" data-testid="sort-by-rating">
					Rating: Low to High
				</option>
				<option value="avg_rating-desc">Rating: High to Low</option>
			</select>
		</label>
	);
};
