import { PageTitle } from "@/ui/atoms/PageTitle";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=4");
	const products = (await res.json()) as {
		id: string;
		title: string;
		description: string;
		image: string;
		price: number;
	}[];
	const productsMapped = products.map((product) => ({
		id: product.id,
		name: product.title,
		price: product.price,
		category: "test",
		coverImage: {
			src: product.image,
			alt: product.title,
		},
		bulletPoints: [
			{ id: "size", label: "Size", value: "18x10" },
			{ id: "offset", label: "Offset", value: "+22" },
			{ id: "bolt-pattern", label: "Bolt Pattern", value: "5x114.3" },
		],
	}));

	return (
		<section className="mt-4 flex flex-col gap-4">
			<PageTitle title="RevvRush" />
			<ProductList products={productsMapped} />
		</section>
	);
}
