import { type Metadata } from "next";

import { getProductById } from "@/api/products";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const resolvedParams = await params;
	const { data: product } = await getProductById(resolvedParams.productId);

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
	return <section className="mx-auto flex flex-col gap-6 text-font-dark">{children}</section>;
}
