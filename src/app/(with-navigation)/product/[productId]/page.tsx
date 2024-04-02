import { notFound } from "next/navigation";

import { getProductById, getRelatedProducts } from "@/api/products";
import { ProductDetails } from "@/ui/organisms/ProductDetails";
import { RelatedProductList } from "@/ui/molecules/List/RelatedProductList";
import { ProductReviews } from "@/ui/organisms/ProductReviews";

type SingleProductPageProps = {
	params: { productId: string };
};

export default async function SingleProductPage({ params }: SingleProductPageProps) {
	const { productId } = params;
	const product = await getProductById(productId);

	if (!product) {
		throw notFound();
	}

	const relatedProducts = await getRelatedProducts(product.data);

	return (
		<>
			<ProductDetails product={product} />
			<hr className="border-brand-primary" />
			<RelatedProductList products={relatedProducts} title="Related products" />
			<hr className="border-brand-primary" />
			<ProductReviews productId={productId} />
		</>
	);
}
