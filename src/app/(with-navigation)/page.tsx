import { type Route } from "next";

import { getAllCategories, getAllProducts } from "@/api/products";
import { getAllCollections } from "@/api/collections";
import { Heading } from "@/ui/atoms/Heading";
import { BannerSlider } from "@/ui/molecules/BannerSlider";
import { type BannerSliderItemType } from "@/types";
import { CategoriesList } from "@/ui/molecules/List/CategoriesList";
import { CarouselProductList } from "@/ui/molecules/List/CarouselProductList";

export default async function HomePage() {
	const recommendedProducts = await getAllProducts({
		take: 4,
		where: { avgRating: { equals: 5 } },
	});
	const categories = await getAllCategories();
	const collections = await getAllCollections();
	const bannerItems = collections.map(
		({ coverImage, name, slug }): BannerSliderItemType => ({
			img: coverImage,
			name,
			href: `/collections/${slug}` as Route,
		}),
	);

	return (
		<>
			<section className="flex flex-col gap-8">
				<div>
					<BannerSlider items={bannerItems} />
				</div>
				<div className="flex flex-col gap-4">
					<Heading level={2}>Shop by Category</Heading>
					<CategoriesList categories={categories} />
				</div>
				<div>
					<CarouselProductList items={recommendedProducts.data} title="Recommended Products" />
				</div>
			</section>
		</>
	);
}
