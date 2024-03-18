"use client";

import { Suspense, useState } from "react";
import clsx from "clsx";
import { LucideMenu } from "lucide-react";
import { BrandLogo } from "@/ui/atoms/BrandLogo";
import { MainNavigation } from "@/ui/molecules/MainNavigation";
import { CategoriesNavigation } from "@/ui/molecules/CategoriesNavigation";
import { type NavItemType } from "@/types";
import { SearchInput } from "@/ui/atoms/SearchInput";

type HeaderProps = {
	categories: NavItemType[];
};

export const Header = ({ categories }: HeaderProps) => {
	const [isCategoriesNavVisible, setIsCategoriesNavVisible] = useState(false);

	const handleOpenCategoriesNav = () => {
		setIsCategoriesNavVisible(!isCategoriesNavVisible);
	};

	return (
		<header className="sticky left-0 right-0 top-0 z-50 flex h-header-height flex-col items-center justify-between bg-brand-background-dark bg-gradient-to-b from-[#2d2d2d] text-font-light shadow-sm">
			<div className="flex w-full grow items-center justify-evenly">
				<BrandLogo size="3xl" />
				<div className="hidden items-center sm:flex">
					<Suspense>
						<SearchInput />
					</Suspense>
				</div>
				<MainNavigation />
			</div>
			<div className="flex w-full bg-brand-background-lighter sm:hidden">
				<button onClick={handleOpenCategoriesNav} className="p-1 text-font-dark">
					<LucideMenu className="p-1 text-font-dark" />
				</button>
				<div className="h-full w-full">
					<Suspense>
						<SearchInput />
					</Suspense>
				</div>
			</div>
			<CategoriesNavigation
				categories={categories}
				className={clsx(
					"absolute left-0 top-full z-50 transition-all sm:static sm:w-full",
					isCategoriesNavVisible ? "translate-x-0" : "-translate-x-full sm:translate-x-0",
				)}
			/>
		</header>
	);
};
