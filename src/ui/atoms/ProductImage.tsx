import clsx from "clsx";
import NextImage from "next/image";

type ProductImageProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	resizeOnHover?: boolean;
};

export const ProductImage = ({
	src,
	alt,
	width = 300,
	height = 300,
	resizeOnHover = false,
}: ProductImageProps) => {
	return (
		<figure className="w-full grow-0 overflow-hidden p-4">
			<NextImage
				width={width}
				height={height}
				src={src}
				alt={alt}
				className={clsx(
					"aspect-square h-full w-full object-cover object-center transition-all",
					resizeOnHover && "md:group-hover:scale-105",
				)}
				loading="lazy"
			/>
		</figure>
	);
};
