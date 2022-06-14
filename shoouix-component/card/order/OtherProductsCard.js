import React from "react";
import { Link } from "../../../util/router";
import { formatPrice } from "../../../util/product/format";

import cls from "./orderCard.module.scss";

function OtherProductsCard({ orderData }) {
	return (
		<div className={cls.card}>
			<div className={cls.titleBlock}>
				<p className={cls.title}>{orderData.orderStatus}</p>
			</div>
			<div className={cls.productBlock}>
				<div className={cls.productImage}>
					<Link to={`/product/${orderData.productId}`}>
						{orderData.productImage ? (
							<img className={cls.img} src={orderData.productImage} alt="" />
						) : (
							""
						)}
					</Link>
				</div>
				<div className={cls.productDetails}>
					<p className={cls.brand}>{orderData.productBrand}</p>
					<p className={cls.title}>
						{orderData.productFor + " " + orderData.productCategory}
					</p>
					<p className={cls.brand}>{"Qty: " + orderData.productQty}</p>
					<p className={cls.brand}>{"Size: " + orderData.productSize}</p>
					<p className={cls.price}>{formatPrice(orderData.amount)}</p>
					<p className={cls.seller}>{`Seller: ${orderData.vendorName}`}</p>
				</div>
			</div>
		</div>
	);
}

export default OtherProductsCard;
