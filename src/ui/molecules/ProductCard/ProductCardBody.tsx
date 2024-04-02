import { addProductToCartAction } from "@/app/actions";
import { type ProductListItemFragment } from "@/gql/graphql";
import { AddToCartButton } from "@/ui/atoms/AddToCartButton";
import { ProductCardPrice } from "@/ui/atoms/ProductCardPrice";
// import { ProductCardBulletPointList } from "@/ui/molecules/ProductCardBulletPointList";

type ProductCardBodyProps = {
	product: ProductListItemFragment;
};

export const ProductCardBody = ({ product }: ProductCardBodyProps) => {
	return (
		<article className="flex flex-wrap justify-between gap-4 px-4 pb-4">
			{/* <ProductCardBulletPointList product={product} /> */}
			<ProductCardPrice price={product.price} />
			<form
				action={addProductToCartAction}
				className="opacity-0 transition-opacity group-hover:opacity-100"
			>
				<input type="hidden" name="quantity" value="1" />
				<input type="hidden" name="productId" value={product.id} />
				<AddToCartButton variant="icon" />
			</form>
		</article>
	);
};
