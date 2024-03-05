import { ArrowLeft, ArrowLeftToLine, ArrowRight, ArrowRightToLine } from "lucide-react";

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

	return (
		<nav
			aria-label="Pagination Navigation"
			className="mt-auto flex items-center justify-center border-t border-slate-300"
		>
			<ul className="flex px-4">
				{pageNumber > 1 && (
					<>
						<PaginationItem
							pageNumber={1}
							label={<ArrowLeftToLine size={16} />}
							ariaLabel="Navigate to first page"
							categorySlug={categorySlug}
						/>

						<PaginationItem
							pageNumber={previousPage}
							label={<ArrowLeft size={16} />}
							ariaLabel="Navigate to previous page"
							categorySlug={categorySlug}
						/>
						{pageNumber > 2 && (
							<PaginationItem
								pageNumber={pageNumber - 2}
								label={`${pageNumber - 2}`}
								ariaLabel={`Navigate to page ${pageNumber - 2}`}
								categorySlug={categorySlug}
							/>
						)}
						<PaginationItem
							pageNumber={pageNumber - 1}
							label={`${pageNumber - 1}`}
							ariaLabel={`Navigate to page ${pageNumber - 1}`}
							categorySlug={categorySlug}
						/>
					</>
				)}
				<PaginationItem
					pageNumber={pageNumber}
					label={`${pageNumber}`}
					ariaLabel={`Page ${pageNumber}`}
					categorySlug={categorySlug}
				/>
				{pageNumber < totalPages && (
					<>
						<PaginationItem
							pageNumber={pageNumber + 1}
							label={`${pageNumber + 1}`}
							ariaLabel={`Navigate to page ${pageNumber + 1}`}
							categorySlug={categorySlug}
						/>
						{pageNumber < totalPages - 1 && (
							<PaginationItem
								pageNumber={pageNumber + 2}
								label={`${pageNumber + 2}`}
								ariaLabel={`Navigate to page ${pageNumber + 2}`}
								categorySlug={categorySlug}
							/>
						)}
						<PaginationItem
							pageNumber={nextPage}
							label={<ArrowRight size={16} />}
							ariaLabel="Navigate to next page"
							categorySlug={categorySlug}
						/>

						<PaginationItem
							pageNumber={totalPages}
							label={<ArrowRightToLine size={16} />}
							ariaLabel="Navigate to last page"
							categorySlug={categorySlug}
						/>
					</>
				)}
			</ul>
		</nav>
	);
};
