import { type ProductWithDescriptionFragment } from "@/gql/graphql";
import { ProductDetailsDescription } from "@/ui/molecules/ProductDetailsDescription";
import { ProductsDetailsHeader } from "@/ui/molecules/ProductDetailsHeader";

type ProductDetailsProps = {
	product: ProductWithDescriptionFragment;
};

export const ProductDetails = ({ product }: ProductDetailsProps) => {
	return (
		<section className="mx-auto flex max-w-3xl flex-col gap-6 text-font-dark">
			<ProductsDetailsHeader product={product} />
			<hr className="border-brand-primary" />
			<ProductDetailsDescription product={product} />
		</section>
	);
};
