import { ProductCardBulletPoint } from "@/ui/atoms/ProductCardBulletPoint";

type ProductCardBulletPointListProps = {
	product: {
		bulletPoints?: {
			id: string;
			label: string;
			value: string;
		}[];
		suitableFor?: string[];
		category: string;
	};
};

export const ProductCardBulletPointList = ({ product }: ProductCardBulletPointListProps) => {
	return (
		<dl className="w-full text-sm">
			{product.bulletPoints?.map((bulletPoint) => (
				<ProductCardBulletPoint bulletPoint={bulletPoint} key={bulletPoint.id} />
			))}
			{product.suitableFor && (
				<ProductCardBulletPoint
					bulletPoint={{
						id: "suitable-for",
						label: "Suitable for",
						value: product.suitableFor.join(", "),
					}}
				/>
			)}
			<ProductCardBulletPoint
				bulletPoint={{ id: "category", label: "Category", value: product.category }}
			/>
		</dl>
	);
};
