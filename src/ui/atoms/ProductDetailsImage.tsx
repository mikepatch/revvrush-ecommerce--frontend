import clsx from "clsx";
import NextImage from "next/image";

type ProductDetailsImageProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	resizeOnHover?: boolean;
};

export const ProductDetailsImage = ({
	src,
	alt,
	width = 300,
	height = 300,
	resizeOnHover = false,
}: ProductDetailsImageProps) => {
	return (
		<figure className={`grow-0 overflow-hidden p-4`}>
			<NextImage
				width={width}
				height={height}
				src={src}
				alt={alt}
				className={clsx(
					`aspect-square h-[${height}px] w-[${width}px] object-cover object-center transition-all`,
					resizeOnHover && "group-hover:scale-105",
				)}
				loading="eager"
			/>
		</figure>
	);
};
