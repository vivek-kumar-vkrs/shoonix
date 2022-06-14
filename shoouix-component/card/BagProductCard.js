import React from "react";
import { Link } from "../../util/router";
import { formatDiscount, formatPrice } from "../../util/product/format";
import cls from "./bagProductCard.module.scss";
import Counter from "../tools/Counter";
import MoveToWishlist from "../button/bag/MoveToWishlist";
import RemoveItem from "../button/bag/RemoveItem";
import Select from "../tools/Select";
import { getImgKey, getOptimizedImgUrl } from "../../config/aws";

function BagProductCard({
	id,
	brand,
	gender,
	category,
	msp,
	qty,
	stock,
	size,
	discount,
	price,
	img,
	vendorName,
	removeItem,
	moveToWishlist,
}) {
	return (
		<div className={cls.card}>
			<div className={cls.wrapperFlex}>
				<div className={cls.flexJustifyCenter}>
					<div className={cls.flexwidth50}>
						<Link to={`/product/${id}`}>
							<img
								className={cls.img}
								src={getOptimizedImgUrl(300, getImgKey(img))}
								alt=""
							/>
						</Link>
					</div>
					<div className={cls.flexwidth50}>
						<p className={cls.brand}>{brand}</p>
						<p className={cls.title}>{gender + " " + category}</p>
						<p className={cls.seller}>
							<span>Seller: </span>
							{vendorName}
						</p>
						<div className={cls.wrapperFlex}>
							<Select prodId={id} defaultValue={size} stock={stock} />
							<div>
								<Counter prodId={id} qty={qty} limit={stock[size]} />
							</div>
						</div>
					</div>
				</div>
				<div className={cls.flex}>
					<p className={cls.price}>{formatPrice(price)}</p>
					<p className={cls.msp}>{formatPrice(msp)}</p>
					<p className={cls.discount}>{formatDiscount(discount)}</p>
				</div>
				<div className={cls.flexSpBtwn}>
					<div className={cls.wishlistBlock}>
						<MoveToWishlist onClick={() => moveToWishlist(id)} />
					</div>
					<div className={cls.removeBlock}>
						<RemoveItem onClick={() => removeItem(id)} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default BagProductCard;
