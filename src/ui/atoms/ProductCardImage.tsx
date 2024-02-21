import Image from "next/image";

type ProductCardImageProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
};

export const ProductCardImage = ({
	src,
	alt,
	width = 300,
	height = 300,
}: ProductCardImageProps) => {
	return (
		<div className="w-full grow-0 overflow-hidden p-4">
			<Image
				width={width}
				height={height}
				src={src}
				alt={alt}
				className="aspect-square h-full w-full object-contain transition-all lg:group-hover:scale-105"
				loading="lazy"
			/>
		</div>
	);
};
