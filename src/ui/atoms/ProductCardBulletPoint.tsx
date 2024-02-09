type ProductCardBulletPointProps = {
	bulletPoint: {
		id: string;
		label: string;
		value: string;
	};
};

export const ProductCardBulletPoint = ({ bulletPoint }: ProductCardBulletPointProps) => {
	return (
		<div>
			<dt className="inline">{bulletPoint.label}: </dt>
			<dd className="inline">{bulletPoint.value}</dd>
		</div>
	);
};
