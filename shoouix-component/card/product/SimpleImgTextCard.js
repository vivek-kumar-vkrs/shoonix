import React from "react";
import { formatPrice } from "../../../util/product/format";
import cls from "./simpleImgTextCard.module.scss";

function SimpleImgTextCard({ img, delivery, price }) {
	return (
		<div className={cls.simpleImgTextCard}>
			<div className={cls.imgBlock}>
				<img className={cls.img} src={img} alt="" />
			</div>
			<div className={cls.textBlock}>
				<p className={cls.normal}>{formatPrice(price)}</p>
				<p className={cls.bold}>{delivery}</p>
			</div>
		</div>
	);
}

export default SimpleImgTextCard;
