import { notFound } from "next/navigation";
import { type ComponentType } from "react";

export default async function StaticPage({ params }: { params: { filename: string } }) {
	const Content = await import(`./${params.filename}.mdx`).then(
		(m: { default: ComponentType }) => m.default,
		() => notFound(),
	);

	return (
		<article className="prose prose-p:text-start mt-8 rounded-sm bg-slate-200 p-8 text-font-dark">
			<Content />
		</article>
	);
}
