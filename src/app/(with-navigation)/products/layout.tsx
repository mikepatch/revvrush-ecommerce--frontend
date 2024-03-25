type ProductsLayoutProps = {
	children: React.ReactNode;
};

export default function ProductsLayout({ children }: ProductsLayoutProps) {
	return <div className="flex flex-grow flex-col gap-4 px-8">{children}</div>;
}
