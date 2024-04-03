import { Heading } from "@/ui/atoms/Heading";

type ProductCardTitleProps = {
	title: string;
};

export const ProductCardTitle = ({ title }: ProductCardTitleProps) => {
	return (
		<Heading level={2} className="text-lg">
			{title}
		</Heading>
	);
};
