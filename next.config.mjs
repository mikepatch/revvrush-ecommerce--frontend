import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
		optimizeCss: true,
	},
	redirects: async () => {
		return [
			{
				source: "/categories/:slug",
				destination: "/categories/:slug/1",
				permanent: false,
			},
			{
				source: "/products",
				destination: "/products/1",
				permanent: false,
			},
		];
	},
	transpilePackages: ["lucide-react"],
	images: {
		remotePatterns: [
			{
				hostname: "revvrush.vercel.app",
			},
		],
	},
};

export default withMDX()(nextConfig);
