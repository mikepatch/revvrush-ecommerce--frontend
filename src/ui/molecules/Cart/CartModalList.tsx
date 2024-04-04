import NextImage from "next/image";

import { RemoveFromCartButton } from "@/ui/atoms/RemoveFromCartButton";
import { formatPrice } from "@/utils";
import { type CartWithMetadataFragment } from "@/gql/graphql";

type CartModalListProps = {
	items: CartWithMetadataFragment["data"]["items"];
};

export const CartModalList = ({ items }: CartModalListProps) => {
	return (
		<ul className="no-scrollbar flex-1 divide-y overflow-y-scroll">
			{items.map(({ id, quantity, product }) => (
				<li key={product.id} className="flex gap-2 py-6">
					<div>
						<NextImage
							width={100}
							height={100}
							src={product.images[0] as string}
							alt={product.name}
							className="h-20 w-20 border object-cover p-2"
						/>
					</div>
					<div className="flex flex-1 flex-col">
						<header className="flex justify-between gap-2">
							<a
								href={`/product/${product.id}`}
								className="font-semibold transition-colors hover:text-brand-primary"
							>
								{product.name}
							</a>
							<p>{formatPrice(product.price)}</p>
						</header>
						<div className="flex flex-1 items-end justify-between">
							<small className="text-font-gray">Qty {quantity}</small>
							<RemoveFromCartButton itemId={id} />
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};
