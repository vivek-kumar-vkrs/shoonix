import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { cartSubtotal, cartTotalMRP, cartTotalDiscount } from "../../util/cart";
import { formatPrice } from "../../util/product/format";
import cls from "./priceDetails.module.scss";

function PriceDetails({ useCoin, coinBeingUsed }) {
	const cartCont = useContext(CartContext);
	const totalPrice = cartTotalMRP(cartCont.cart);
	const totalDiscount = cartTotalDiscount(cartCont.cart);
	const totalAmount = cartSubtotal(cartCont.cart);

	return (
		<div className={cls.priceDetails}>
			<div className={cls.textBlock}>
				<p className={cls.titleKey}>Total MRP: </p>
				<p className={cls.titleValue}>{formatPrice(totalPrice)}</p>
			</div>
			<div className={cls.textBlock}>
				<p className={cls.titleKey}>Total Discount: </p>
				<p className={cls.titleValue}>{formatPrice(totalDiscount)}</p>
			</div>
			{useCoin ? (
				<div className={cls.textBlock}>
					<p className={cls.titleKey}>Coin Used: </p>
					<p className={cls.titleValue}>{coinBeingUsed}</p>
				</div>
			) : (
				""
			)}
			<hr />
			<div className={cls.textBlock}>
				<p className={cls.finalKey}>Total Amount: </p>
				<p className={cls.finalValue}>
					{useCoin
						? formatPrice(totalAmount - coinBeingUsed)
						: formatPrice(totalAmount)}
				</p>
			</div>
		</div>
	);
}

export default PriceDetails;
