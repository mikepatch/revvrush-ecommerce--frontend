import { type Route } from "next";

import clsx from "clsx";
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
	return (
		<li
			className={`flex items-center border-t-2 border-slate-300 hover:border-brand-primary ${className}`}
		>
			<ActiveLink
				href={`/categories/${categorySlug}/${pageNumber}` as Route}
				className="flex px-2 pt-2 leading-none transition-all hover:text-brand-primary sm:px-4 sm:pt-4"
				activeClassName={clsx(
					className === "" && "-mt-[2px] border-t-2 border-brand-primary text-brand-primary",
				)}
				ariaLabel={ariaLabel}
			>
				{label}
			</ActiveLink>
		</li>
	);
};
