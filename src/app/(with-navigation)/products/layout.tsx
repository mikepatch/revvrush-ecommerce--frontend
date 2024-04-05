type ProductsLayoutProps = {
	children: React.ReactNode;
};

export default function ProductsLayout({ children }: ProductsLayoutProps) {
	return <section className="flex flex-grow flex-col gap-4">{children}</section>;
}
