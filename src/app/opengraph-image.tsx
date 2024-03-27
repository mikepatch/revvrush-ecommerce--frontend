import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "RevvRush the cart part shop";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function og() {
	return new ImageResponse(
		(
			<div
				tw="w-full text-white h-full flex flex-col gap-4 items-center justify-center text-8xl"
				style={{
					background: `
                linear-gradient(
                  90deg,
                rgba(247,118,110) 0%,
                  rgb(0,0,0) 20%,
                  rgb(0,0,0) 80%,
                  rgb(235,99,91) 100%
                )`,
				}}
			>
				<p tw="font-sans m-0 p-0 text-[101px]">RevvRush</p>
				<p tw="font-serif m-0 p-0 font-black">tuning</p>
				<p tw="m-0 mt-2">parts</p>
			</div>
		),
	);
}
