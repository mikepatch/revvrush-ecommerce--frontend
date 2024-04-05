"use client";

import { useRef } from "react";
import { addProductReviewAction } from "@/app/actions";

type ReviewFormProps = {
	productId: string;
};

export const ReviewForm = ({ productId }: ReviewFormProps) => {
	const ref = useRef<HTMLFormElement>(null);

	return (
		<form
			ref={ref}
			action={async (formData: FormData) => {
				await addProductReviewAction(formData);
				ref.current?.reset();
			}}
			className="flex flex-col gap-4"
			data-testid="add-review-form"
		>
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
				<input type="hidden" name="productId" value={productId} />
			</div>
			<div>
				<label htmlFor="rating">Rating</label>
				{/* <input
					type="number"
					id="rating"
					name="rating"
					min="1"
					max="5"
					className="rounded-sm border"
					required
				/> */}
				<select
					id="rating"
					name="rating"
					defaultValue="5"
					className="cursor-pointer rounded-sm p-1 text-star-rating"
				>
					<option value="1">&#9733;&#9734;&#9734;&#9734;&#9734;</option>
					<option value="2">&#9733;&#9733;&#9734;&#9734;&#9734;</option>
					<option value="3">&#9733;&#9733;&#9733;&#9734;&#9734;</option>
					<option value="4">&#9733;&#9733;&#9733;&#9733;&#9734;</option>
					<option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
				</select>
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
				<input type="text" id="headline" name="headline" className="rounded-sm border" required />
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
	);
};
