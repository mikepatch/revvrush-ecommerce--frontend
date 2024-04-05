"use client";

import NextImage from "next/image";
import { Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { type BannerSliderItemType } from "@/types";

type BannerSliderProps = {
	items: BannerSliderItemType[];
};

export const BannerSlider = ({ items }: BannerSliderProps) => {
	const duration: number = 5000;

	const itemsRef = useRef<HTMLDivElement>(null);
	const frame = useRef<number>(0);
	const firstFrameTime = useRef(performance.now());

	const [active, setActive] = useState<number>(0);
	const [progress, setProgress] = useState<number>(0);

	useEffect(() => {
		firstFrameTime.current = performance.now();
		frame.current = requestAnimationFrame(animate);
		return () => {
			cancelAnimationFrame(frame.current);
		};
	}, [active]);

	const animate = (now: number) => {
		let timeFraction = (now - firstFrameTime.current) / duration;
		if (timeFraction <= 1) {
			setProgress(timeFraction * 100);
			frame.current = requestAnimationFrame(animate);
		} else {
			timeFraction = 1;
			setProgress(0);
			setActive((active + 1) % items.length);
		}
	};

	// const heightFix = () => {
	// 	if (itemsRef.current && itemsRef.current.parentElement) {
	// 		itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
	// 	}
	// };

	// useEffect(() => {
	// 	heightFix();
	// }, []);

	return (
		<div className={`mx-auto max-h-fit w-full max-w-7xl overflow-hidden rounded-sm text-center`}>
			{/* Item image */}
			<div className="h-fit transition-all delay-300 duration-150 ease-in-out">
				<div className="relative flex h-[270px] flex-col" ref={itemsRef}>
					{items.map((item, index) => (
						<Transition
							key={item.name}
							show={active === index}
							enter="transition ease-in-out duration-500 delay-200 order-first"
							enterFrom="opacity-0 scale-105"
							enterTo="opacity-100 scale-100"
							leave="transition ease-in-out duration-300 absolute"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Link href={item.href}>
								<NextImage
									className="h-[270px] w-full object-cover"
									src={item.img}
									width={1024}
									height={576}
									alt={item.name}
								/>
							</Link>
						</Transition>
					))}
				</div>
			</div>
			{/* Buttons */}
			<ul className="mx-auto grid w-full grid-cols-3 bg-brand-background-dark text-font-light">
				{items.map((item, index) => (
					<li key={item.name} className="max-w-xs sm:max-w-sm md:max-w-3xl">
						<button
							className="group w-full focus:outline-none focus-visible:ring focus-visible:ring-brand-primary"
							onClick={() => {
								if (active === index) return;

								setActive(index);
								setProgress(0);
							}}
						>
							<span
								className={`relative flex flex-col items-center text-center transition-colors ${active !== index && "hover:text-brand-primary"}`}
							>
								<span className="relative z-10 block p-2 text-sm font-medium">{item.name}</span>
								<span
									className="absolute inset-0 block w-full "
									role="progressbar"
									aria-valuenow={active === index ? progress : 0}
								>
									<span
										className="absolute inset-0 rounded-[inherit] bg-brand-primary bg-opacity-50"
										style={{ width: active === index ? `${progress}%` : 0 }}
									></span>
								</span>
							</span>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};
