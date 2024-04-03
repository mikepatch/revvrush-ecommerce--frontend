import { Heading } from "@/ui/atoms/Heading";

type PageTitleProps = {
	children: React.ReactNode;
};

export const PageTitle = ({ children }: PageTitleProps) => {
	return (
		<Heading level={1} className="text-4xl font-semibold text-font-dark">
			{children}
		</Heading>
	);
};
