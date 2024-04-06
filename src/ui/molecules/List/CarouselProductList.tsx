"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { type ProductListItemFragment } from "@/gql/graphql";
import { Heading } from "@/ui/atoms/Heading";
import { ProductCard } from "@/ui/molecules/ProductCard/ProductCard";

type CarouselProductListProps = {
	items: ProductListItemFragment[];
	title?: string;
};

export const CarouselProductList = ({ items, title }: CarouselProductListProps) => {
	const carouselRef = useRef<HTMLUListElement>(null);
	const [canScroll, setCanScroll] = useState({
		left: false,
		right: false,
	});

	const checkScrollButtons = () => {
		const { current: carousel } = carouselRef;
		if (carousel) {
			const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
			setCanScroll({
				left: carousel.scrollLeft > 0,
				right: carousel.scrollLeft < maxScrollLeft,
			});
		}
	};

	const scroll = (direction: "left" | "right") => {
		const carousel = carouselRef.current;
		if (!carousel) return;

		const itemWidth = carousel.querySelector("li")?.offsetWidth || 300;
		const currentScrollPosition = carousel.scrollLeft;
		const scrollAmount = itemWidth;
		carousel.scrollTo({
			left: currentScrollPosition + (direction === "left" ? -scrollAmount : scrollAmount),
			behavior: "smooth",
		});
	};

	useEffect(() => {
		checkScrollButtons();
		window.addEventListener("resize", checkScrollButtons);
		return () => {
			window.removeEventListener("resize", checkScrollButtons);
		};
	}, [items]);

	useEffect(() => {
		const { current: carousel } = carouselRef;
		if (carousel) {
			carousel.addEventListener("scroll", checkScrollButtons);
			return () => {
				carousel.removeEventListener("scroll", checkScrollButtons);
			};
		}
	}, []);

	return (
		<section>
			<header>{title && <Heading level={2}>{title}</Heading>}</header>
			<section className="relative w-fit">
				{canScroll.left && (
					<button
						onClick={() => scroll("left")}
						className="absolute left-0 top-1/2 z-10 flex aspect-square w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-sm bg-brand-primary text-font-light transition-colors hover:bg-brand-primary-dark"
					>
						<ArrowLeft />
					</button>
				)}
				<ul
					ref={carouselRef}
					className="flex w-full snap-x justify-between gap-4 overflow-x-auto py-6"
				>
					{items.map((item) => (
						<li key={item.id} className="w-full max-w-[260px] flex-none snap-center">
							<ProductCard product={item} />
						</li>
					))}
				</ul>
				{canScroll.right && (
					<button
						onClick={() => scroll("right")}
						className="absolute right-0 top-1/2 z-10 flex aspect-square w-12 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-sm bg-brand-primary text-font-light transition-colors hover:bg-brand-primary-dark"
					>
						<ArrowRight />
					</button>
				)}
			</section>
		</section>
	);
};
