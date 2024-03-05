import Link from "next/link";
import { Exo } from "next/font/google";
import { LucideGauge } from "lucide-react";

const exo = Exo({ subsets: ["latin"] });

type BrandLogoProps = {
	size?: "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
};

export const BrandLogo = ({ size = "2xl" }: BrandLogoProps) => {
	return (
		<figure className={`${exo.className} w-fit text-font-light`}>
			<Link href="/" className={`text-${size}`}>
				<span>Revv</span>
				<span className="text-brand-primary">Rush</span>
				<LucideGauge className="inline-block" />
			</Link>
		</figure>
	);
};
