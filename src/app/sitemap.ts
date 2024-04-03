import { type MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
	if (!baseUrl) {
		throw new Error("NEXT_PUBLIC_BASE_URL is not set");
	}

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/product/[productId]`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/products`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/collections`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/collections/[collectionId]`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/cart`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/categories/[pageNumber]`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/categories/[categoryId]/[pageNumber]`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/static/privacy-policy`,
			lastModified: new Date(),
		},
		{
			url: `${baseUrl}/static/tems-of-service`,
			lastModified: new Date(),
		},
	];
}
