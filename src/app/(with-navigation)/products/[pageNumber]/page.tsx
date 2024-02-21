import { ProductList } from "@/ui/organisms/ProductList";
import { Pagination } from "@/ui/molecules/Pagination";
import { PageTitle } from "@/ui/atoms/PageTitle";

type ProductType = {
	id: string;
	title: string;
	description: string;
	image: string;
	price: number;
};

type PageNumberPageProps = {
	params: {
		pageNumber: string;
	};
};

export async function generateStaticParams() {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=-1");
	const products = (await res.json()) as { id: string; title: string }[];

	const totalItems = products.length;
	const limit = 12;
	const totalPages = Math.ceil(totalItems / limit);

	return Array.from({ length: totalPages }, (_, i) => ({ pageNumber: (i + 1).toString() }));
}

export default async function PageNumberPage({ params }: PageNumberPageProps) {
	const limit = 12;
	const pageNumber = Number(params.pageNumber);
	const allProductsRes = await fetch("https://naszsklep-api.vercel.app/api/products?take=-1");
	const allProducts = (await allProductsRes.json()) as ProductType[];
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products?take=${limit}&offset=${(pageNumber - 1) * limit}`,
	);
	const products = (await res.json()) as ProductType[];
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
		<>
			<header>
				<PageTitle title="All products" />
			</header>
			<ProductList products={productsMapped} />
			<footer>
				<Pagination pageNumber={pageNumber} totalItems={allProducts.length} limit={limit} />
			</footer>
		</>
	);
}
