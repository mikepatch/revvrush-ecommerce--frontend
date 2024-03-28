import clsx from "clsx";

type StarRatingProps = {
	rating: number;
	variant?: "big" | "small";
};

export const StarRating = ({ rating, variant = "small" }: StarRatingProps) => {
	return (
		<ul className={clsx("flex", variant === "big" ? "gap-2" : "gap-1")}>
			{Array.from({ length: 5 }).map((_, index) => (
				<li key={index + rating} className={clsx('text-star-rating', variant === "big" ? "text-2xl" : "text-sm")}>
					{index >= rating ? <span className="">&#9734;</span> : <span className="">&#9733;</span>}
				</li>
			))}
		</ul>
	);
};
