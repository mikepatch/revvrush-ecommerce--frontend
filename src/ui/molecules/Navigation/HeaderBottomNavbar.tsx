"use client";

import { Suspense, useState } from "react";

import { SearchInput } from "@/ui/atoms/SearchInput";
import { CategoriesNavigation } from "@/ui/molecules/Navigation/CategoriesNavigation";
import { type NavItemType } from "@/types";
import { CategoriesNavToggleButton } from "@/ui/atoms/CategoriesNavToggleButton";

type HeaderBottomNavbarProps = {
	categories: NavItemType[];
};

export const HeaderBottomNavbar = ({ categories }: HeaderBottomNavbarProps) => {
	const [isCategoriesNavVisible, setIsCategoriesNavVisible] = useState(false);

	const handleOpenCategoriesNav = () => {
		setIsCategoriesNavVisible(!isCategoriesNavVisible);
	};

	return (
		<>
			<div className="flex w-full bg-brand-background-lighter sm:hidden">
				<CategoriesNavToggleButton onToggle={handleOpenCategoriesNav} />
				<div className="h-full w-full">
					<Suspense>
						<SearchInput variant="mobile" />
					</Suspense>
				</div>
			</div>
			<CategoriesNavigation categories={categories} isVisible={isCategoriesNavVisible} />
		</>
	);
};
