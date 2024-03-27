"use client";

import { useEffect } from "react";

type GlobalErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function GlobalError({ error, reset }: GlobalErrorProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<html lang="en">
			<body>
				<div>
					<h2>There was an error!</h2>
					<button onClick={() => reset()}>Reset</button>
				</div>
			</body>
		</html>
	);
}
