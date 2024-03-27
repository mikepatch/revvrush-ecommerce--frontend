import { type NavItemType } from "@/types";
import { HeaderBottomNavbar } from "@/ui/molecules/HeaderBottomNavbar";
import { HeaderTopNavbar } from "@/ui/molecules/HeaderTopNavbar";

type HeaderProps = {
	categories: NavItemType[];
};

export const Header = ({ categories }: HeaderProps) => {
	return (
		<header className="sticky left-0 right-0 top-0 z-20 flex h-header-height flex-col items-center justify-between bg-brand-background-dark bg-gradient-to-b from-[#2d2d2d] text-font-light shadow-sm">
			<HeaderTopNavbar />
			<HeaderBottomNavbar categories={categories} />
		</header>
	);
};
