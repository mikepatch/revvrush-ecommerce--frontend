import dynamic from "next/dynamic";
import { type LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

type IconProps = LucideProps & {
	name: keyof typeof dynamicIconImports;
};

export const Icon = ({ name, ...props }: IconProps) => {
	const LucideIcon = dynamic(dynamicIconImports[name]);

	return <LucideIcon {...props} />;
};
