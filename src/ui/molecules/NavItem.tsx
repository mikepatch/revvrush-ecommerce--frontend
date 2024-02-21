import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { type NavItemType } from "@/ui/types";

export type NavItemProps = {
	navItem: Pick<NavItemType, "href" | "label">;
};

export const NavItem = ({ navItem: { href, label } }: NavItemProps) => {
	return (
		<li>
			<ActiveLink
				href={href}
				className="border-brand-primary py-1 transition-all hover:border-b-2"
				activeClassName="border-b-2"
			>
				{label}
			</ActiveLink>
		</li>
	);
};
