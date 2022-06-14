import React from "react";
import { Link, navigate } from "../../../util/router";
import { formatPrice } from "../../../util/product/format";
import cls from "./orderCard.module.scss";
import {
	ButtonTransparentShadow,
	ButtonTransparent,
} from "../../button/ButtonChildren";
import { isEligibleForRefund } from "../../../util/order/order";
import { getImgKey, getOptimizedImgUrl } from "../../../config/aws";

function OrdersCard({ orderData }) {
	const returnHandler = () => {
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
				{orderData.orderType === "replacement" ? (
					<p className={cls.title}>{"Replacement"}</p>
				) : (
					<p className={cls.title}>{orderData.orderStatus}</p>
				)}
			</div>
			<div className={cls.productBlock}>
				<div className={cls.productImage}>
					<Link to={`/product/${orderData.productId}`}>
						{orderData.productImage ? (
							<img
								className={cls.img}
								src={getOptimizedImgUrl(400, getImgKey(orderData.productImage))}
								alt=""
							/>
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
					<p className={cls.price}>{formatPrice(orderData.orderAmount)}</p>
					<p className={cls.seller}>{`Seller: ${orderData.vendorName}`}</p>
					<Link to={`/dynamic/user/order/${orderData.id}`}>
						<ButtonTransparent>
							<p style={{ color: "#1a1a1a" }}>More Details</p>
						</ButtonTransparent>
					</Link>
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

export default OrdersCard;
