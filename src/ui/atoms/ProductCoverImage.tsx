import Image from "next/image";

type ProductCoverImageProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
};

export const ProductCoverImage = ({
	src,
	alt,
	width = 300,
	height = 300,
}: ProductCoverImageProps) => {
	return (
		<div className="aspect-square w-full grow-0 overflow-hidden p-8">
			<Image
				width={width}
				height={height}
				src={src}
				alt={alt}
				className="h-full w-full object-contain transition-all group-hover:scale-105"
				loading="lazy"
			/>
		</div>
	);
};
