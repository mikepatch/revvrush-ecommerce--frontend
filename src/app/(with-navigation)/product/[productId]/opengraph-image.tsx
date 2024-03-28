/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { getProductById } from "@/api/products";

export const runtime = "edge";

export const alt = "RevvRush the cart part shop";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function og({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);

	if (!product) {
		return;
	}

	return new ImageResponse(
		(
			<div
				tw="w-full text-black h-full flex flex-col items-center justify-center text-8xl"
				style={{
					background: "white",
				}}
			>
				<img
					src={`http://localhost:3000/${product.images[0]}`}
					alt={product.name}
					width={200}
					height={200}
				/>
				<p tw="m-0 p-0 text-center text-[101px]">{product.name}</p>
				<p tw="m-0 mt-2 text-[64px]">{product.category?.name}</p>
				<p tw="m-0 p-0 font-black text-[16px]">{product.description.slice(0, 150)}</p>
			</div>
		),
		{
			...size,
		},
	);
}
