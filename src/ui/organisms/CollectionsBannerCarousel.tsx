"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NextImage from "next/image";

import { Heading } from "@/ui/atoms/Heading";
import { type CollectionsGetListQuery } from "@/gql/graphql";

type CollectionsBannerProps = {
	collections: CollectionsGetListQuery["collections"];
	interval?: number;
};

export const CollectionsBanner = ({ collections, interval = 5000 }: CollectionsBannerProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % collections.length);
		}, interval);

		return () => {
			clearInterval(timer);
		};
	}, [collections.length, interval]);

	const goToPreviousBanner = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + collections.length) % collections.length);
	};

	const goToNextBanner = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % collections.length);
	};

	return (
		<div className="h-[250px] overflow-hidden rounded-md">
			<div className="relative h-full">
				{collections.map(({ id, name, slug, coverImage }, index) => (
					<Link key={id} href={`/collections/${slug}`}>
						<div
							className={`absolute inset-0 transition-opacity duration-500 ${
								index === currentIndex ? "opacity-100" : "-z-10 opacity-0"
							}`}
						>
							<Heading
								level={2}
								className="absolute inset-0 flex items-center justify-center bg-brand-background-dark bg-opacity-70 text-2xl font-bold text-font-light sm:text-6xl"
							>
								{name}
							</Heading>
							<NextImage
								loading="eager"
								src={`${coverImage}`}
								alt={`Banner ${name}`}
								width={1024}
								height={250}
								className="h-full w-full object-cover object-center"
							/>
						</div>
					</Link>
				))}

				<button
					aria-label="Previous collection banner"
					className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2 focus:outline-none"
					onClick={goToPreviousBanner}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</button>

				<button
					aria-label="Next collection banner"
					className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white bg-opacity-50 p-2 focus:outline-none"
					onClick={goToNextBanner}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>
		</div>
	);
};
