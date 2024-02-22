import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRs: true,
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
