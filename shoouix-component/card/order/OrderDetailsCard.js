import React from "react";
import { Link, navigate } from "../../../util/router";
import { formatPrice } from "../../../util/product/format";
import cls from "./orderCard.module.scss";
import { ButtonTransparentShadow } from "../../button/ButtonChildren";
import { isEligibleForRefund } from "../../../util/order/order";

function OrderDetailsCard({ orderData }) {
	const dateToTimestamp = (dateData) =>
		Math.round(new Date(dateData).getTime() / 1000);

	console.log("orderData.createdAt\n", orderData.createdAt);
	console.log(
		"orderData.createdAt ts \n",
		dateToTimestamp(orderData.createdAt)
	);

	const returnHandler = (orderData) => {
		navigate(`/dynamic/user/refund/${orderData.id}`);
	};
	const exchangeHandler = () => {
		navigate(
			`/dynamic/user/replacement/${orderData.id}/${orderData.productId}`
		);
	};

	return (
		<div className={cls.card}>
			<div className={cls.titleBlock}>
				<p className={cls.cardTitle}>{orderData.orderStatus}</p>
				<p className={cls.cardTitle}>{orderData.createdAt.slice(0, 10)}</p>
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
					<p className={cls.price}>{formatPrice(orderData.orderAmount)}</p>
					<p className={cls.seller}>{`Seller: ${orderData.vendorName}`}</p>
				</div>
			</div>
			{isEligibleForRefund(orderData) ? (
				<div className={cls.functionBlock}>
					<ButtonTransparentShadow
						width100={true}
						className={cls.wishlistBlock}
						onClick={exchangeHandler}
					>
						Exchange
					</ButtonTransparentShadow>
					<ButtonTransparentShadow
						className={cls.removeBlock}
						width100={true}
						onClick={returnHandler}
					>
						Return
					</ButtonTransparentShadow>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default OrderDetailsCard;
