type SingleProductLayoutProps = {
	children: React.ReactNode;
};

export default function SingleProductLayout({ children }: SingleProductLayoutProps) {
	return (
		<section className="mx-auto flex max-w-4xl flex-col gap-6 text-font-dark">{children}</section>
	);
}
