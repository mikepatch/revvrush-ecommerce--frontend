import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/products";

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

type SingleProductLayoutProps = {
	children: React.ReactNode;
};

export default function SingleProductLayout({ children }: SingleProductLayoutProps) {
	return (
		<section className="mx-auto flex max-w-4xl flex-col gap-6 text-font-dark">{children}</section>
	);
}
