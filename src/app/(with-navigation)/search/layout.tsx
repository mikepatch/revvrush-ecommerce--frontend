type SearchLayoutProps = {
	children: React.ReactNode;
};

export default function SearchLayout({ children }: SearchLayoutProps) {
	return <div className="flex flex-grow flex-col gap-4 px-8">{children}</div>;
}
