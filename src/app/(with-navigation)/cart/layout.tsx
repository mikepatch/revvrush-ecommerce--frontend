type CartLayoutProps = {
	children: React.ReactNode;
};

export default function CartLayout({ children }: CartLayoutProps) {
	return <section className="flex flex-col gap-4">{children}</section>;
}
