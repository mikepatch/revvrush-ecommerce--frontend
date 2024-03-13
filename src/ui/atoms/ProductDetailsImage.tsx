import NextImage from "next/image";

type ProductDetailsImageProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
};

export const ProductDetailsImage = ({
	src,
	alt,
	width = 300,
	height = 300,
}: ProductDetailsImageProps) => {
	return (
		<div className="w-full grow-0 overflow-hidden p-4">
			<NextImage
				width={width}
				height={height}
				src={src}
				alt={alt}
				className="aspect-square h-full w-full object-cover object-center transition-all lg:group-hover:scale-105"
				loading="lazy"
			/>
		</div>
	);
};
