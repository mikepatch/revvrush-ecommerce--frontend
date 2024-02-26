import { MAIN_NAV_ITEMS } from "@/ui/constants";
import { BrandLogo } from "@/ui/atoms/BrandLogo";
import { MainNavigation } from "@/ui/molecules/MainNavigation";
import { CategoriesNavigation } from "@/ui/molecules/CategoriesNavigation";
import { type NavItemType } from "@/ui/types";

type HeaderProps = {
	categories: NavItemType[];
};

export const Header = ({ categories }: HeaderProps) => {
	return (
		<header className="sticky left-0 top-0 z-50 flex flex-col items-center bg-brand-background-dark bg-gradient-to-b from-[#2d2d2d] shadow-sm">
			<div className="flex w-full items-center justify-evenly py-2">
				<BrandLogo size="3xl" />
				<MainNavigation navItems={MAIN_NAV_ITEMS} />
			</div>
			<CategoriesNavigation categories={categories} />
		</header>
	);
};
