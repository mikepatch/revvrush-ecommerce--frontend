import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Heading } from "@/ui/atoms/Heading";
import { FOOTER_LEGAL_NAV_ITEMS } from "@/ui/constants";

export const FooterNavigation = () => {
	return (
		<nav>
			<Heading level={2} className="text-xl font-bold" text="Legal" />
			<ul className="flex flex-col gap-2">
				{FOOTER_LEGAL_NAV_ITEMS.map(({ id, href, label }) => (
					<li key={id}>
						<ActiveLink
							href={href}
							className="border-brand-primary py-1 transition-all hover:border-b-2"
							activeClassName="border-b-2"
						>
							{label}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
