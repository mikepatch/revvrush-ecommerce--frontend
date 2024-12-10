import { LucideMenu } from "lucide-react";

type CategoriesNavToggleButtonProps = {
	onToggle: () => void;
};

export const CategoriesNavToggleButton = ({ onToggle }: CategoriesNavToggleButtonProps) => {
	return (
		<button onClick={onToggle} className="p-1 text-font-dark" aria-label="Categories navigation">
			<LucideMenu className="p-1 text-font-dark" />
		</button>
	);
};
