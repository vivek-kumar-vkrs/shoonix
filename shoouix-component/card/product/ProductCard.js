import React from "react";
import cls from "./productCard.module.scss";
import Slider from "../../slider/Slide";
import { formatDiscount, formatPrice } from "../../../util/product/format";
import WishlistButton from "../../button/user/WishlistButton";

function ProductCard({ id, brand, title, msp, discount, price, imgs }) {
	return (
		<>
			<div className={cls.card}>
				<div className={cls.wrapperFlex}>
					<div className={cls.imgBlock}>
						<Slider
							slideData={imgs.map((img) => (
								<img className={cls.imgFluid} src={img} alt="" />
							))}
						/>
						<div className={cls.wishlist}>
							{" "}
							<WishlistButton size={"2.5rem"} productId={id} />
						</div>
					</div>
					<p className={cls.title}>{title}</p>
					<div className={cls.flex}>
						<p className={cls.price}>{formatPrice(price)}</p>
						{Number(discount) > 0 ? (
							<p className={cls.msp}>{formatPrice(msp)}</p>
						) : (
							""
						)}
						{Number(discount) > 0 ? (
							<p className={cls.discount}>{formatDiscount(discount)}</p>
						) : (
							""
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductCard;
