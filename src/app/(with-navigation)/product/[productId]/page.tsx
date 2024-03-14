import { notFound } from "next/navigation";
import { type Metadata } from "next";

import { getProductById, getProductsByCategorySlug } from "@/api/products";
import { ProductDetails } from "@/ui/organisms/ProductDetails";
import { CollectionProductList } from "@/ui/organisms/CollectionProductList";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const { product } = await getProductById(params.productId);

	return {
		title: product.name,
		description: product.description,
	};
};

type SingleProductPageProps = {
	params: { productId: string };
};

export default async function SingleProductPage({ params }: SingleProductPageProps) {
	const { product } = await getProductById(params.productId);
	const {
		productsByCategorySlug: { data: relatedProducts },
	} = await getProductsByCategorySlug({
		slug: product.category?.slug as string,
		take: 4,
		skip: 0,
	});

	if (!product) {
		throw notFound();
	}

	return (
		<>
			<ProductDetails product={product} />
			<CollectionProductList products={relatedProducts} title="Related products" />
		</>
	);
}
