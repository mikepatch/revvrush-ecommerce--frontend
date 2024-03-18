import { notFound } from "next/navigation";
import { type Metadata } from "next";

import { getProductById, getProductsByCategorySlug } from "@/api/products";
import { ProductDetails } from "@/ui/organisms/ProductDetails";
import { RelatedProductList } from "@/ui/organisms/RelatedProductList";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	try {
		const { product } = await getProductById(params.productId);

		return {
			title: product.name,
			description: product.description,
		};
	} catch (error) {
		throw notFound();
	}
};

type SingleProductPageProps = {
	params: { productId: string };
};

export default async function SingleProductPage({ params }: SingleProductPageProps) {
	const { product } = await getProductById(params.productId);
	if (!product) {
		throw notFound();
	}
	const {
		productsByCategorySlug: { data: relatedProducts },
	} = await getProductsByCategorySlug({
		slug: product.category?.slug as string,
		take: 4,
		skip: 0,
	});

	return (
		<>
			<ProductDetails product={product} />
			<RelatedProductList products={relatedProducts} title="Related products" />
		</>
	);
}
