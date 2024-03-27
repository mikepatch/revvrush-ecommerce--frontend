import { HeartCrack } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center gap-4">
			<header className="flex flex-col items-center">
				<HeartCrack size={44} className="text-brand-primary" />
				<h2 className="text-2xl">Not Found</h2>
			</header>
			<p>Sorry, the product does not exist.</p>
			<Link
				href="/"
				className="rounded-md bg-brand-primary px-4 py-2 text-font-light shadow-sm transition-shadow hover:shadow-lg"
			>
				Go to the homepage
			</Link>
		</div>
	);
}
