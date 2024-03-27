import { type MetadataRoute } from "next";

export default function Sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "http://localhost:3000",
			lastModified: new Date(),
		},
		{
			url: "http://localhost:3000/collections",
			lastModified: new Date(),
		},
		{
			url: "http://localhost:3000/products",
			lastModified: new Date(),
		},
	];
}
