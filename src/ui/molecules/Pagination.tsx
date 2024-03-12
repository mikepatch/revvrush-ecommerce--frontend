import { ArrowLeft, ArrowLeftToLine, ArrowRight, ArrowRightToLine } from "lucide-react";
import clsx from "clsx";

import { PaginationItem } from "@/ui/molecules/PaginationItem";

type PaginationProps = {
	pageNumber: number;
	totalItems: number;
	limit: number;
	categorySlug: string;
};

export const Pagination = ({
	pageNumber = 1,
	totalItems,
	limit,
	categorySlug,
}: PaginationProps) => {
	const previousPage = pageNumber > 1 ? pageNumber - 1 : pageNumber;
	const nextPage = pageNumber + 1;
	const totalPages = Math.ceil(totalItems / limit);
	const hiddenClassName = "pointer-events-none opacity-0";

	return (
		<nav
			aria-label="Pagination Navigation"
			className="mt-auto flex items-center justify-center border-t border-slate-300"
		>
			<ul className="flex px-4">
				{pageNumber > 0 && (
					<>
						<PaginationItem
							pageNumber={1}
							label={<ArrowLeftToLine size={16} />}
							ariaLabel="Navigate to first page"
							categorySlug={categorySlug}
							className={clsx(pageNumber === 1 && hiddenClassName)}
						/>
						<PaginationItem
							pageNumber={previousPage}
							label={<ArrowLeft size={16} />}
							ariaLabel="Navigate to previous page"
							categorySlug={categorySlug}
							className={clsx(pageNumber === 1 && hiddenClassName)}
						/>
						{previousPage > 1 && (
							<PaginationItem
								pageNumber={pageNumber - 2}
								label={`${pageNumber - 2}`}
								ariaLabel={`Navigate to page ${pageNumber - 2}`}
								categorySlug={categorySlug}
							/>
						)}
						{previousPage >= 1 && pageNumber !== previousPage && (
							<PaginationItem
								pageNumber={previousPage}
								label={`${previousPage}`}
								ariaLabel={`Navigate to page ${previousPage}`}
								categorySlug={categorySlug}
							/>
						)}
						<PaginationItem
							pageNumber={pageNumber}
							label={`${pageNumber}`}
							ariaLabel={`Page ${pageNumber}`}
							categorySlug={categorySlug}
						/>
						{nextPage <= totalPages && (
							<>
								<PaginationItem
									pageNumber={nextPage}
									label={`${nextPage}`}
									ariaLabel={`Navigate to page ${nextPage}`}
									categorySlug={categorySlug}
								/>
								{nextPage < totalPages && (
									<PaginationItem
										pageNumber={pageNumber + 2}
										label={`${pageNumber + 2}`}
										ariaLabel={`Navigate to page ${pageNumber + 2}`}
										categorySlug={categorySlug}
									/>
								)}
							</>
						)}
						<PaginationItem
							pageNumber={nextPage}
							label={<ArrowRight size={16} />}
							ariaLabel="Navigate to next page"
							categorySlug={categorySlug}
							className={clsx(nextPage > totalPages && hiddenClassName)}
						/>
						<PaginationItem
							pageNumber={totalPages}
							label={<ArrowRightToLine size={16} />}
							ariaLabel="Navigate to last page"
							categorySlug={categorySlug}
							className={clsx(pageNumber === totalPages && hiddenClassName)}
						/>
					</>
				)}
			</ul>
		</nav>
	);
};
