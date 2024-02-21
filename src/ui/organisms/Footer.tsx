import { BrandLogo } from "@/ui/atoms/BrandLogo";
import { FooterNavigation } from "@/ui/molecules/FooterNavigation";

export const Footer = () => {
	return (
		<footer className="bg-brand-background-dark bg-gradient-to-b from-[#2d2d2d] p-4 text-sm text-font-light">
			<section className="flex justify-end">
				<FooterNavigation />
			</section>
			<section className="flex flex-col items-center gap-2">
				<BrandLogo />
				<p>&copy; 2024</p>
			</section>
		</footer>
	);
};
