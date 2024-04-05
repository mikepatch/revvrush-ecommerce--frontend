import { Header } from "@/ui/organisms/Header";

type LayoutWithNavigationProps = {
	children: React.ReactNode;
};

export default function LayoutWithNavigation({ children }: LayoutWithNavigationProps) {
	return (
		<>
			<Header />
			<main className="mx-auto max-w-6xl px-8 py-6">{children}</main>
		</>
	);
}
