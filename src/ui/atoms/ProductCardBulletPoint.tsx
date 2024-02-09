type ProductCardBulletPointProps = {
	bulletPoint: {
		id: string;
		label: string;
		value: string;
	};
};

export const ProductCardBulletPoint = ({ bulletPoint }: ProductCardBulletPointProps) => {
	return (
		<li>
			<p>
				{bulletPoint.label}: {bulletPoint.value}
			</p>
		</li>
	);
};
