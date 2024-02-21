import { LuArrowLeft, LuArrowLeftToLine, LuArrowRight, LuArrowRightToLine } from "react-icons/lu";

import { PaginationItem } from "@/ui/molecules/PaginationItem";

type PaginationProps = {
	pageNumber: number;
	totalItems: number;
	limit: number;
};

export const Pagination = ({ pageNumber = 1, totalItems, limit }: PaginationProps) => {
	const previousPage = pageNumber > 1 ? pageNumber - 1 : pageNumber;
	const nextPage = pageNumber + 1;
	const totalPages = Math.ceil(totalItems / limit);

	return (
		<nav
			aria-label="Pagination Navigation"
			className="mt-auto flex items-center justify-center border-t border-slate-300"
		>
			<ul className="flex px-4">
				{pageNumber > 1 && (
					<>
						{pageNumber > 3 && (
							<PaginationItem
								pageNumber={1}
								label={<LuArrowLeftToLine />}
								ariaLabel="Navigate to first page"
							/>
						)}
						<PaginationItem
							pageNumber={previousPage}
							label={<LuArrowLeft />}
							ariaLabel="Navigate to previous page"
						/>
						{pageNumber > 2 && (
							<PaginationItem
								pageNumber={pageNumber - 2}
								label={`${pageNumber - 2}`}
								ariaLabel={`Navigate to page ${pageNumber - 2}`}
							/>
						)}
						<PaginationItem
							pageNumber={pageNumber - 1}
							label={`${pageNumber - 1}`}
							ariaLabel={`Navigate to page ${pageNumber - 1}`}
						/>
					</>
				)}
				<PaginationItem
					pageNumber={pageNumber}
					label={`${pageNumber}`}
					ariaLabel={`Page ${pageNumber}`}
				/>
				{pageNumber < totalPages && (
					<>
						<PaginationItem
							pageNumber={pageNumber + 1}
							label={`${pageNumber + 1}`}
							ariaLabel={`Navigate to page ${pageNumber + 1}`}
						/>
						{pageNumber < totalPages - 1 && (
							<PaginationItem
								pageNumber={pageNumber + 2}
								label={`${pageNumber + 2}`}
								ariaLabel={`Navigate to page ${pageNumber + 2}`}
							/>
						)}
						<PaginationItem
							pageNumber={nextPage}
							label={<LuArrowRight />}
							ariaLabel="Navigate to next page"
						/>
						{pageNumber < totalPages - 2 && (
							<PaginationItem
								pageNumber={totalPages}
								label={<LuArrowRightToLine />}
								ariaLabel="Navigate to last page"
							/>
						)}
					</>
				)}
			</ul>
		</nav>
	);
};
