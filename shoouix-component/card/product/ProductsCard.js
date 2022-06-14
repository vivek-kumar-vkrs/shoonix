import { Link } from "../../../util/router";
import React from "react";
import cls from "./productsCard.module.scss";
import {
	formatDiscount,
	formatPrice,
	formatTitle,
} from "../../../util/product/format";
import { ButtonTransparentShadow } from "../../button/ButtonChildren";
import { getImgKey, getOptimizedImgUrl } from "../../../config/aws";
import WishlistButton from "../../button/user/WishlistButton";
function ProductsCard({
	id,
	brand,
	title,
	msp,
	discount,
	price,
	img,
	btnText,
	btnClickHandler,
}) {
	return (
		<div className={cls.card}>
			<div className={cls.wrapperFlex}>
				<div className={cls.imgBlock}>
					<Link to={`/product/${id}`}>
						<img
							className={cls.img}
							src={getOptimizedImgUrl(300, getImgKey(img))}
							alt=""
						/>
					</Link>

					<div className={cls.wishlist}>
						{" "}
						<WishlistButton size={"1.5rem"} productId={id} />
					</div>
				</div>
				{/* <Link to={`/product/${id}`}> */}
				<p className={cls.brand}>{brand}</p>
				<p className={cls.title}>{formatTitle(title)}</p>
				<div className={cls.priceBlock}>
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
				{/* </Link> */}
				{btnText ? (
					<ButtonTransparentShadow onClick={btnClickHandler}>
						<p>{btnText}</p>
					</ButtonTransparentShadow>
				) : (
					""
				)}
			</div>
		</div>
	);
}

export default ProductsCard;
