import { Heading } from "@/ui/atoms/Heading";

type ProductCardTitleProps = {
	title: string;
};

export const ProductCardTitle = ({ title }: ProductCardTitleProps) => {
	return (
		<Heading level={3} className="font-normal">
			{title}
		</Heading>
	);
};
