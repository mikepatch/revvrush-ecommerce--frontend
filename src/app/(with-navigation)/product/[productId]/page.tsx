import { notFound } from "next/navigation";

import { getAllProducts, getProductById } from "@/api/products";
import { ProductDetails } from "@/ui/organisms/ProductDetails";
import { RelatedProductList } from "@/ui/organisms/RelatedProductList";
import { StarRating } from "@/ui/molecules/StarRating";

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
			<hr className="border-brand-primary" />
			<RelatedProductList products={relatedProducts} title="Related products" />
			<hr className="border-brand-primary" />
			<section>
				<header>
					<h2>Reviews</h2>
				</header>
				<section>
					<StarRating rating={4} />
				</section>
			</section>
		</>
	);
}
