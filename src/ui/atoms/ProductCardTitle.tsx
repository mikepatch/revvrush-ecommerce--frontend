type ProductCardTitleProps = {
	title: string;
};

export const ProductCardTitle = ({ title }: ProductCardTitleProps) => {
	return <h2 className="grow font-semibold">{title}</h2>;
};
