"use client";

import { type Route } from "next";
import clsx from "clsx";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationItemProps = {
	pageNumber: number;
	label: string | React.ReactNode;
	categorySlug: string;
	ariaLabel?: string;
	className?: string;
};

export const PaginationItem = ({
	pageNumber,
	label,
	categorySlug,
	ariaLabel = "",
	className = "",
}: PaginationItemProps) => {
	const searchParams = useSearchParams();
	const sort_by = searchParams.get("sort_by");
	const sort_order = searchParams.get("sort_order");
	const getParams = sort_by && sort_order && `?sort_by=${sort_by}&sort_order=${sort_order}`;

	return (
		<li
			className={`flex items-center border-t-2 border-slate-300 hover:border-brand-primary ${className}`}
		>
			<Suspense>
				<ActiveLink
					href={`/${categorySlug}/${pageNumber}` as Route}
					className="flex p-4 leading-none transition-all hover:text-brand-primary"
					activeClassName={clsx(
						className === "" && "-mt-[2px] border-t-2 border-brand-primary text-brand-primary",
					)}
					ariaLabel={ariaLabel}
					searchParams={getParams}
				>
					{label}
				</ActiveLink>
			</Suspense>
		</li>
	);
};
