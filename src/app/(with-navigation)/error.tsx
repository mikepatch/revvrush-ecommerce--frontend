"use client";

import { useEffect } from "react";

type ErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div>
			<h2>There was an error!</h2>
			<button onClick={() => reset()}>Reset</button>
		</div>
	);
}
