import clsx from "clsx";

export const SearchInput = ({ className, ...props }: { className?: string }) => {
	return (
		<input
			{...props}
			className={clsx("w-full border-2 border-brand-primary px-2 py-1", className)}
		/>
	);
};
