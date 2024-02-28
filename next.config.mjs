import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
	},
	redirects: async () => {
		return [
			{
				source: "/categories/:slug",
				destination: "/categories/:slug/1",
				permanent: true,
			},
		];
	},
	transpilePackages: ["lucide-react"],
	images: {
		remotePatterns: [
			{
				hostname: "naszsklep-api.vercel.app",
			},
			{
				hostname: "static-ourstore.hyperfunctor.com",
			},
		],
	},
};

export default withMDX()(nextConfig);
