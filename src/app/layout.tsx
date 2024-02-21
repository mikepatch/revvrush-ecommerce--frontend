import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import "../styles/globals.css";
import { Footer } from "@/ui/organisms/Footer";

const rubik = Rubik({ subsets: ["latin"] });

type RootLayoutProps = {
	children: React.ReactNode;
};

export const metadata: Metadata = {
	title: "RevvRush – Tune Up Your Car!",
	description: "RevvRush - the best car parts in the world!",
};

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={`${rubik.className} overflow-x-hidden bg-brand-background antialiased`}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
