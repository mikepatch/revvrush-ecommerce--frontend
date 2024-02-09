import { PageTitle } from "@/ui/atoms/PageTitle";
import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

const PRODUCTS: ProductItemType[] = [
	{
		id: "1",
		category: "Wheels",
		name: "Volk Racing TE37 Ultra M-Spec",
		price: 1249,
		coverImage: {
			src: "/images/wheels/te37-ultra-mspec.png",
			alt: "Volk Te37 ultra m-spec",
		},
		bulletPoints: [
			{ id: "size", label: "Size", value: "18x10" },
			{ id: "offset", label: "Offset", value: "+22" },
			{ id: "bolt-pattern", label: "Bolt Pattern", value: "5x114.3" },
		],
	},
	{
		id: "2",
		category: "Wheels",
		name: "Work Meister S1",
		price: 699,
		coverImage: {
			src: "/images/wheels/work-meister-s1.png",
			alt: "Work Meister S1",
		},
		bulletPoints: [
			{ id: "size", label: "Size", value: "18x9.5" },
			{ id: "offset", label: "Offset", value: "+15" },
			{ id: "bolt-pattern", label: "Bolt Pattern", value: "5x100 / 5x114.3" },
		],
	},
	{
		id: "3",
		category: "Wheels",
		name: "Enkei Raijin",
		price: 499,
		coverImage: {
			src: "/images/wheels/enkei-raijin.png",
			alt: "Enkei Raijin",
		},
		bulletPoints: [
			{ id: "size", label: "Size", value: "17x8" },
			{ id: "offset", label: "Offset", value: "+22" },
			{ id: "bolt-pattern", label: "Bolt Pattern", value: "5x114.3" },
		],
	},
	{
		id: "4",
		category: "Wheels",
		name: "Weds Maverick 1410s",
		price: 3399,
		coverImage: {
			src: "/images/wheels/weds-maverick-1410s.png",
			alt: "Weds Maverick 1410s",
		},
		bulletPoints: [
			{ id: "size", label: "Size", value: "19x10" },
			{ id: "offset", label: "Offset", value: "+22" },
			{ id: "bolt-pattern", label: "Bolt Pattern", value: "5x114.3" },
		],
	},
	{
		id: "5",
		category: "Suspensions",
		name: "BC Racing BR Series Coilovers",
		price: 1299,
		coverImage: {
			src: "/images/suspensions/bc-racing-br-series-coilovers.png",
			alt: "BC Racing BR Series Coilovers",
		},
		bulletPoints: [
			{ id: "spring-rate", label: "Spring Rate", value: "8k/6k" },
			{ id: "top-hats", label: "Top Hats", value: "Standard" },
			{ id: "dampening", label: "Dampening", value: "30-way adjustable" },
		],
		suitableFor: ["BMW E46"],
	},
	{
		id: "6",
		category: "Suspensions",
		name: "BC Racing BR Series Coilovers",
		price: 1299,
		coverImage: {
			src: "/images/suspensions/bc-racing-br-series-coilovers.png",
			alt: "BC Racing BR Series Coilovers",
		},
		bulletPoints: [
			{ id: "spring-rate", label: "Spring Rate", value: "8k/6k" },
			{ id: "top-hats", label: "Top Hats", value: "Standard" },
			{ id: "dampening", label: "Dampening", value: "30-way adjustable" },
		],
		suitableFor: ["BMW E30"],
	},
	{
		id: "7",
		category: "Exhaust systems",
		name: "Invidia Q300 Catback Exhaust",
		price: 899,
		coverImage: {
			src: "/images/exhausts/invidia-q300-lexus-rc350.png",
			alt: "Invidia Q300 Catback Exhaust",
		},
		bulletPoints: [
			{ id: "piping-diameter", label: "Piping Diameter", value: "70mm" },
			{ id: "tip-diameter", label: "Tip Diameter", value: "110mm" },
			{ id: "material", label: "Material", value: "Stainless Steel" },
		],
		suitableFor: ["Lexus RC350", "Lexus RC200t"],
	},
	{
		id: "8",
		category: "Exhaust systems",
		name: "Malian Exhausts Catback Performance Exhaust",
		price: 399,
		coverImage: {
			src: "/images/exhausts/catback-performance-e46.png",
			alt: "Malian Exhausts Catback Performance Exhaust",
		},
		bulletPoints: [
			{ id: "piping-diameter", label: "Piping Diameter", value: "60mm" },
			{ id: "tip-diameter", label: "Tip Diameter", value: "100mm" },
			{ id: "material", label: "Material", value: "Stainless Steel" },
		],
		suitableFor: ["BMW E46"],
	},
	{
		id: "9",
		category: "Interior",
		name: "Bride Zeta III",
		price: 799,
		coverImage: {
			src: "/images/interior/bride-zeta-iii.png",
			alt: "Bride Zeta III",
		},
		bulletPoints: [
			{ id: "material", label: "Material", value: "Aramid Black" },
			{ id: "weight", label: "Weight", value: "6.5kg" },
			{ id: "rails", label: "Rails", value: "Not included" },
		],
	},
	{
		id: "10",
		category: "Interior",
		name: "Depo Gauge 85mm Speedometer",
		price: 119,
		coverImage: {
			src: "/images/interior/depo-gauge-speedometer.png",
			alt: "Depo Gauge 85mm Speedometer",
		},
		bulletPoints: [
			{ id: "diameter", label: "Diameter", value: "85mm" },
			{ id: "display", label: "Display", value: "Digital" },
			{ id: "material", label: "Material", value: "Plastic" },
		],
	},
];

export default function Home() {
	return (
		<section className="mt-4 flex flex-col gap-4">
			<PageTitle title="Products" />
			<ProductList products={PRODUCTS} />
		</section>
	);
}
