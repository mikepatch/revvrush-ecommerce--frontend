import { type Metadata } from "next";

import { getProductById } from "@/api/products";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const { data: product } = await getProductById(params.productId);

	if (!product) {
		return {
			title: "Product not found",
		};
	}

	return {
		title: product.name,
		description: product.description,
	};
};

type SingleProductLayoutProps = {
	children: React.ReactNode;
};

export default function SingleProductLayout({ children }: SingleProductLayoutProps) {
	return (
		<section className="mx-auto flex max-w-4xl flex-col gap-6 text-font-dark">{children}</section>
	);
}
