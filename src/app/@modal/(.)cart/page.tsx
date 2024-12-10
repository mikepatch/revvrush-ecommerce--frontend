import { Overlay } from "@/ui/atoms/Overlay";
import { CartModal } from "@/ui/molecules/Cart/CartModal";

export const dynamic = "force-dynamic";

export default function ModalCart() {
	return (
		<>
			<Overlay />
			<CartModal />
		</>
	);
}
