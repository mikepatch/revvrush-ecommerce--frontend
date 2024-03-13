import { type ProductWithDescriptionFragment } from "@/gql/graphql";

type ProductDetailsDescriptionProps = {
	product: ProductWithDescriptionFragment;
};

export const ProductDetailsDescription = ({ product }: ProductDetailsDescriptionProps) => {
	return (
		<article className="flex flex-col gap-2 text-justify">
			<h2 className="text-2xl font-semibold">Description</h2>
			<p>{product.description}</p>
		</article>
	);
};
