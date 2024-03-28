import { notFound } from "next/navigation";

import { getProductById, getRelatedProducts } from "@/api/products";
import { ProductDetails } from "@/ui/organisms/ProductDetails";
import { RelatedProductList } from "@/ui/molecules/List/RelatedProductList";
import { ProductRating } from "@/ui/organisms/ProductRating";

type SingleProductPageProps = {
	params: { productId: string };
};

export default async function SingleProductPage({ params }: SingleProductPageProps) {
	const product = await getProductById(params.productId);

	if (!product) {
		throw notFound();
	}

	const relatedProducts = await getRelatedProducts(product);

	return (
		<>
			<ProductDetails product={product} />
			<hr className="border-brand-primary" />
			<RelatedProductList products={relatedProducts} title="Related products" />
			<hr className="border-brand-primary" />
			<ProductRating />
		</>
	);
}
