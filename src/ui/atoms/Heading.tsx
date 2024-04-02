import clsx from "clsx";

type HeadingProps = {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	children: React.ReactNode;
	className?: string;
};

export const Heading = ({ level, children, className = "" }: HeadingProps) => {
	const Tag = `h${level}` as const;

	return (
		<Tag
			className={clsx("font-semibold", className, {
				"text-3xl": level === 1,
				"text-2xl": level === 2,
				"text-xl": level === 3,
				"text-lg": level === 4,
				"text-md": level === 5,
				"text-base": level === 6,
			})}
		>
			{children}
		</Tag>
	);
};
