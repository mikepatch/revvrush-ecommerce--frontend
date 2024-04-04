import { CloseCartModalButton } from "@/ui/atoms/CloseCartModalButton";
import { Heading } from "@/ui/atoms/Heading";

export const CartModalHeader = () => {
	return (
		<header className="flex justify-between">
			<Heading level={2}>Your cart</Heading>
			<CloseCartModalButton />
		</header>
	);
};
