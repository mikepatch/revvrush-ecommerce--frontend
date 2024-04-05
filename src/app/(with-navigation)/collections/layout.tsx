type CollectionsLayoutProps = {
	children: React.ReactNode;
};

export default function CollectionsLayout({ children }: CollectionsLayoutProps) {
	return <div className="flex flex-grow flex-col gap-4">{children}</div>;
}
