"use client";

// import { useState } from "react";

import { Heading } from "@/ui/atoms/Heading";
import { StarRating } from "@/ui/molecules/StarRating";
import { calculateAverageRating } from "@/utils";

const REVIEWS = [
	{
		id: "1",
		name: "Max",
		date: "2023-02-20",
		headline: "It's good",
		rating: 4,
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat a consequuntur laudantium ipsa nostrum eaque illo odit aliquam voluptatum? Ab assumenda aspernatur earum culpa amet harum nemo nulla asperiores possimus tempora, illum consequatur obcaecati ratione deleniti labore nostrum, officia perspiciatis. Maiores vel earum doloribus consequatur quasi dicta, culpa rerum ut.",
	},
	{
		id: "2",
		name: "Greg",
		date: "2023-01-12",
		headline: "Awesome",
		rating: 5,
		content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, non?",
	},
	{
		id: "3",
		name: "John",
		date: "2023-01-12",
		headline: "It could be better",
		rating: 3,
		content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, non?",
	},
	{
		id: "4",
		name: "Jane",
		date: "2023-01-12",
		headline: "Great product!",
		rating: 4,
		content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, non?",
	},
	{
		id: "5",
		name: "Doe",
		date: "2023-01-12",
		headline: "Not for me",
		rating: 2,
		content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, non?",
	},
	{
		id: "6",
		name: "Doe",
		date: "2023-01-12",
		headline: "So bad!",
		rating: 2,
		content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, non?",
	},
];

export const ProductRating = () => {
	// const [rating, setRating] = useState<number>(0);
	// const [hover, setHover] = useState<number | null>(null);

	const averageRating = calculateAverageRating(REVIEWS);

	return (
		<div className="flex flex-col gap-4">
			<header>
				<Heading level={2}>
					Reviews <small>({REVIEWS.length})</small>
				</Heading>
			</header>
			<div className="flex justify-between bg-brand-background-lighter">
				<section className="flex flex-col gap-6 rounded-sm border-r p-6">
					<header className="flex flex-col items-center border-b pb-4">
						<Heading level={3}>{averageRating}/5</Heading>
						<StarRating rating={averageRating} variant="big" />
						<small>({REVIEWS.length} reviews)</small>
					</header>
					<ul className="flex flex-col gap-4">
						{REVIEWS.map((review) => (
							<li key={review.id} className="flex gap-2 border-b p-2">
								<header className="flex flex-col">
									<p>{review.name}</p>
									<time className="text-xs text-gray-500">{review.date}</time>
									<StarRating rating={review.rating} variant="small" />
								</header>
								<article>
									<Heading level={4}>{review.headline}</Heading>
									<p>{review.content}</p>
								</article>
							</li>
						))}
					</ul>
				</section>
				<section className="sticky right-0 top-1/3 flex h-fit basis-1/3 flex-col gap-4 rounded-sm bg-brand-background-lighter p-6">
					<header>
						<Heading level={4}>Rate product or write a review</Heading>
					</header>
					<form className="flex flex-col gap-4" data-testid="add-review-form">
						{/* <div className="flex flex-wrap justify-center gap-1">
							<span className="w-full">Your rating</span>
							<div className="flex gap-2">
								{Array.from({ length: 5 }).map((_star, index) => {
									const currentRating = index + 1;

									return (
										<label key={index}>
											<input
												type="radio"
												name="rating"
												className="hidden"
												value={currentRating}
												onChange={() => setRating(currentRating)}
											/>
											<span
												className="text-star-rating cursor-pointer text-2xl"
												onMouseEnter={() => setHover(currentRating)}
												onMouseLeave={() => setHover(null)}
											>
												{currentRating <= (hover || rating) ? (
													<span>&#9733;</span>
												) : (
													<span>&#9734;</span>
												)}
											</span>
										</label>
									);
								})}
							</div>
						</div> */}
						<div>
							<label htmlFor="rating">Rating</label>
							<input
								type="number"
								id="rating"
								name="rating"
								min="1"
								max="5"
								className="rounded-sm border"
								required
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="name">Name</label>
							<input type="text" id="name" name="name" className="rounded-sm border" required />
						</div>
						<div className="flex flex-col">
							<label htmlFor="email">E-mail</label>
							<input type="text" id="email" name="email" className="rounded-sm border" required />
						</div>
						<div className="flex flex-col">
							<label htmlFor="headline">Headline</label>
							<input
								type="text"
								id="headline"
								name="headline"
								className="rounded-sm border"
								required
							/>
						</div>
						<div className="flex flex-col">
							<label htmlFor="content">
								Review <small>(optional)</small>
							</label>
							<textarea id="content" name="content" className="rounded-sm border" />
						</div>
						<button
							type="submit"
							className="rounded-sm bg-brand-primary px-4 py-2 font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-105"
						>
							Submit
						</button>
					</form>
				</section>
			</div>
		</div>
	);
};
