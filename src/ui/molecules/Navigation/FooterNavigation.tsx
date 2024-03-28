import { FOOTER_LEGAL_NAV_ITEMS } from "@/constants";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Heading } from "@/ui/atoms/Heading";

export const FooterNavigation = () => {
	return (
		<nav>
			<Heading level={2} className="text-xl font-bold">
				Legal
			</Heading>
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
