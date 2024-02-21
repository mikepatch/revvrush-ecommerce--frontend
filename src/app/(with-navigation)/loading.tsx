import "@/styles/loader.css";

export default function Loading() {
	return (
		<div
			className=" fixed bottom-0 left-0 right-0 top-0 flex  items-center justify-center bg-brand-background-dark"
			aria-busy={true}
		>
			<span className="loader" />
		</div>
	);
}
