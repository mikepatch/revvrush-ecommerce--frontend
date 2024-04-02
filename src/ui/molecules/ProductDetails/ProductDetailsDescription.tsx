import { type ProductWithDescriptionFragment } from "@/gql/graphql";
import { Heading } from "@/ui/atoms/Heading";

type ProductDetailsDescriptionProps = {
	product: ProductWithDescriptionFragment;
};

export const ProductDetailsDescription = ({ product }: ProductDetailsDescriptionProps) => {
	const { data: productData } = product;
	
	return (
		<article className="flex flex-col gap-2">
			<Heading level={2}>Description</Heading>
			<p>{productData.description}</p>
		</article>
	);
};
