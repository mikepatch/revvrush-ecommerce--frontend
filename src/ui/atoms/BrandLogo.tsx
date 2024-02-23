import Link from "next/link";
import { Exo } from "next/font/google";
import { Icon } from "@/ui/atoms/Icon";

const exo = Exo({ subsets: ["latin"] });

type BrandLogoProps = {
	size?: "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
};

export const BrandLogo = ({ size = "2xl" }: BrandLogoProps) => {
	return (
		<figure className={`${exo.className} w-fit`}>
			<Link href="/" className={`text-${size}`}>
				<span className="">Revv</span>
				<span className="text-brand-primary">Rush</span>
				<Icon name="gauge" className="inline-block" />
			</Link>
		</figure>
	);
};
