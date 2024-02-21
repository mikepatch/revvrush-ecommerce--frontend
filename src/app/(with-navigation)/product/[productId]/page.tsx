import { type Metadata } from "next";
import Image from "next/image";

export async function generateStaticParams() {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products`);
	const products = (await res.json()) as { id: string; title: string }[];

	return products.map((product) => ({ productId: product.id }));
}

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products/" + params.productId);
	const product = (await res.json()) as { title: string; description: string };

	return {
		title: product.title,
		description: product.description,
	};
};

type SingleProductPageProps = {
	params: { productId: string };
};

export default async function SingleProductPage({ params }: SingleProductPageProps) {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products/" + params.productId);
	const product = (await res.json()) as {
		id: string;
		title: string;
		description: string;
		image: string;
		price: number;
	};

	return (
		<section className="mx-auto flex max-w-3xl flex-col gap-6 text-font-dark">
			<header className="flex flex-col justify-between gap-6 md:flex-row">
				<figure className="basis-1/2 bg-white">
					<Image
						src={product.image}
						alt={product.title}
						width={640}
						height={640}
						className="aspect-square h-full w-full object-contain"
					/>
				</figure>
				<section className="flex grow flex-col justify-between">
					<div className="flex w-full flex-col">
						<h1 className="mb-4 text-3xl font-bold">{product.title}</h1>
						<small className="text-xs text-gray-500">ID: {product.id}</small>
					</div>
					<div className="flex flex-wrap items-center justify-between  p-2">
						<p className=" text-2xl font-bold">${product.price}</p>
						<button className="rounded-md bg-brand-primary px-4 py-3 text-font-light shadow-sm transition-all hover:scale-105 hover:bg-opacity-95">
							Add to cart
						</button>
					</div>
				</section>
			</header>
			<hr />
			<article>
				<h2 className="text-2xl font-bold">Description</h2>
				<p>{product.description}</p>
			</article>
		</section>
	);
}
