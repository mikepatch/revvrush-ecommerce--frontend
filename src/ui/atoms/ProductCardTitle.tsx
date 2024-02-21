type ProductCardTitleProps = {
	title: string;
};

export const ProductCardTitle = ({ title }: ProductCardTitleProps) => {
	return <h2 className="grow px-4 font-semibold">{title}</h2>;
};
