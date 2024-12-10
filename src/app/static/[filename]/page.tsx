import { notFound } from "next/navigation";
import { type ComponentType } from "react";

export default async function StaticPage({ params }: { params: Promise<{ filename: string }> }) {
	const resolvedParams = await params;
	const Content = await import(`./${resolvedParams.filename}.mdx`).then(
		(m: { default: ComponentType }) => m.default,
		() => notFound(),
	);

	return (
		<article className="prose mt-8 rounded-sm bg-slate-200 p-8 text-font-dark prose-p:text-start">
			<Content />
		</article>
	);
}
