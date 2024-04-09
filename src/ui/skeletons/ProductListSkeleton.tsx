export const ProductListSkeleton = ({ itemsCount }: { itemsCount: number }) => {
	return (
		<ul
			className="grid w-full grid-cols-1 justify-center justify-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{Array.from({ length: itemsCount }).map((_, index) => (
				<li key={index} className="w-full">
					<article className="flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-sm border bg-brand-background-lighter p-8 text-font-dark shadow-sm hover:shadow-md">
						<div className="aspect-square w-48 animate-pulse rounded-sm bg-gray-200"></div>
						<div className="h-4 w-full animate-pulse bg-gray-200"></div>
						<div className="h-4 w-full animate-pulse bg-gray-200"></div>
					</article>
				</li>
			))}
		</ul>
	);
};
