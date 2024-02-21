import { Header } from "@/ui/organisms/Header";

type LayoutWithNavigationProps = {
	children: React.ReactNode;
};

export default function LayoutWithNavigation({ children }: LayoutWithNavigationProps) {
	return (
		<>
			<Header />
			<main className="mx-auto max-w-[1440px] p-6">{children}</main>
		</>
	);
}
