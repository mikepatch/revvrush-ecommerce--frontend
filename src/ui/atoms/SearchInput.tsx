"use client";

import clsx from "clsx";
import { LucideSearch } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { useDebounce } from "@/hooks/useDebounce";

type SearchInputProps = {
	className?: string;
};

export const SearchInput = ({ className, ...props }: SearchInputProps) => {
	const searchParams = useSearchParams();
	const router = useRouter();

	const handleSearch = useDebounce((term: string) => {
		const params = new URLSearchParams(searchParams);

		if (term) {
			params.set("query", term);
		} else {
			params.delete("query");
		}

		router.replace(`/search?${params.toString()}`);
	}, 500);

	return (
		<div className="flex h-full w-full items-center rounded-sm bg-brand-background-lighter text-font-dark">
			<label htmlFor="search" className="p-2">
				<LucideSearch />
			</label>
			<input
				type="search"
				id="search"
				name="search"
				placeholder="Search"
				onChange={(e) => handleSearch(e.target.value)}
				defaultValue={searchParams.get("query")?.toString()}
				className={clsx("h-full w-full bg-transparent p-2", className)}
				{...props}
			/>
		</div>
	);
};
