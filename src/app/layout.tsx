import type { Metadata } from "next";
import { Rubik } from "next/font/google";

import "../styles/globals.css";
import { Footer } from "@/ui/organisms/Footer";

const rubik = Rubik({ subsets: ["latin"] });

type RootLayoutProps = {
	children: React.ReactNode;
	modal: React.ReactNode;
};

export const metadata: Metadata = {
	title: "RevvRush – Tune Up Your Car!",
	description: "RevvRush - the best car parts in the world!",
};

export default function RootLayout({ children, modal }: RootLayoutProps) {
	return (
		<html lang="en">
			<body
				className={`${rubik.className} min-h-screen overflow-x-hidden bg-brand-background text-font-dark antialiased`}
			>
				{children}
				<Footer />
				{modal}
			</body>
		</html>
	);
}
