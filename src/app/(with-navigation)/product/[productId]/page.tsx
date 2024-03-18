import { notFound } from "next/navigation";
import { type Metadata } from "next";

import { getAllProducts, getProductById } from "@/api/products";
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
		products: { data: relatedProducts },
	} = await getAllProducts({
		take: 4,
		where: {
			category: { is: { slug: { equals: product.category?.slug } } },
			id: { not: { equals: product.id } },
		},
	});

	return (
		<>
			<ProductDetails product={product} />
			<RelatedProductList products={relatedProducts} title="Related products" />
		</>
	);
}
