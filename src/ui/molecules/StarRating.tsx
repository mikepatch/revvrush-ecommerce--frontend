import clsx from "clsx";

type StarRatingProps = {
	rating: number;
	variant?: "big" | "small";
	label?: string;
	layout?: "row" | "col";
};

export const StarRating = ({
	rating,
	variant = "small",
	label,
	layout = "row",
}: StarRatingProps) => {
	return (
		<div className={`flex flex-${layout} w-fit items-center gap-2`}>
			<ul
				className={clsx("flex w-fit", variant === "big" ? "gap-2" : "gap-1")}
				aria-label={`Rating ${rating}`}
			>
				{Array.from({ length: 5 }).map((_, index) => (
					<li
						key={index + rating}
						className={clsx("text-star-rating", variant === "big" ? "text-2xl" : "text-sm")}
					>
						{index >= rating ? (
							<span className="">&#9734;</span>
						) : (
							<span className="">&#9733;</span>
						)}
					</li>
				))}
			</ul>
			{label && <small data-testid="product-rating">{label}</small>}
		</div>
	);
};
