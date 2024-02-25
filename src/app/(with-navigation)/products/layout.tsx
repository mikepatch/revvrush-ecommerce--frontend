// import { ProductsList } from "@/app/(with-navigation)/products/productsList";

export default async function ProductsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-auto w-full max-w-7xl grid-cols-12 gap-x-8 text-font-dark lg:grid">
			<aside className="col-span-3 h-fit rounded-sm bg-brand-background-lighter px-8 py-6 shadow-sm">
				<h2 className="mb-4 text-xl font-semibold">Recommended products</h2>
				<ul></ul>
			</aside>
			<section className="col-span-9 flex flex-grow flex-col gap-4 px-8 py-4">{children}</section>
		</div>
	);
}
