import { type ProductType } from "@/app/(with-navigation)/product/[productId]/page";
import { ProductDetailsDescription } from "@/ui/molecules/ProductDetailsDescription";
import { ProductsDetailsHeader } from "@/ui/molecules/ProductDetailsHeader";

type ProductDetailsProps = {
	product: ProductType;
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
