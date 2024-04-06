"use client";

import { type Route } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const SortButton = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [selectedSortValue, setSelectedSortValue] = useState("");

	useEffect(() => {
		const sortBy = searchParams.get("sort_by");
		const sortOrder = searchParams.get("sort_order");

		if (sortBy && sortOrder) {
			setSelectedSortValue(`${sortBy}-${sortOrder}`);
		}
	}, [searchParams]);

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.target.value;
		setSelectedSortValue(value);

		const [sortBy, sortOrder] = value.split("-");
		if (!sortBy || !sortOrder) return;

		const newSearchParams = new URLSearchParams(searchParams);
		newSearchParams.set("sort_by", sortBy);
		newSearchParams.set("sort_order", sortOrder);

		const newUrl = `?${newSearchParams.toString()}`;
		router.push(newUrl as Route);
	};

	return (
		<label className="flex gap-2">
			Sort by:
			<select
				name="selectedSort"
				value={selectedSortValue}
				onChange={handleChange}
				className="cursor-pointer rounded-sm bg-brand-background-lighter px-2 py-1"
			>
				<option value="" disabled>
					-
				</option>
				<option value="price-asc" data-testid="sort-by-price">
					Price: Low to High
				</option>
				<option value="price-desc">Price: High to Low</option>
				<option value="rating-asc" data-testid="sort-by-rating">
					Rating: Low to High
				</option>
				<option value="rating-desc">Rating: High to Low</option>
			</select>
		</label>
	);
};
