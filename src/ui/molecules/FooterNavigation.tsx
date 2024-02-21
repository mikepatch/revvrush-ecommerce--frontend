import { Heading } from "@/ui/atoms/Heading";
import { FOOTER_LEGAL_NAV_ITEMS } from "@/ui/constants";
import { NavList } from "@/ui/molecules/NavList";

export const FooterNavigation = () => {
	return (
		<nav>
			<Heading level={2} className="text-xl font-bold" text="Legal" />
			<NavList navItems={FOOTER_LEGAL_NAV_ITEMS} className="flex flex-col gap-2" />
		</nav>
	);
};
