import clsx from "clsx";

type HeadingProps = {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	text: string;
	className?: string;
};

export const Heading = ({ level, text, className }: HeadingProps) => {
	const Tag = `h${level}` as const;

	return (
		<Tag
			className={clsx(className, {
				"text-4xl": level === 1,
				"text-3xl": level === 2,
				"text-2xl": level === 3,
				"text-xl": level === 4,
				"text-lg": level === 5,
				"text-base": level === 6,
			})}
		>
			{text}
		</Tag>
	);
};
