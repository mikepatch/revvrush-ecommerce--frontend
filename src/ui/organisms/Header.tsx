import { MAIN_NAV_ITEMS } from "@/ui/constants";
import { BrandLogo } from "@/ui/atoms/BrandLogo";
import { MainNavigation } from "@/ui/molecules/MainNavigation";

export const Header = () => {
	return (
		<header className="sticky left-0 top-0 z-50 flex items-center justify-evenly bg-brand-background-dark bg-gradient-to-b from-[#2d2d2d] p-6 shadow-sm">
			<BrandLogo size="3xl" />
			<MainNavigation navItems={MAIN_NAV_ITEMS} />
		</header>
	);
};
