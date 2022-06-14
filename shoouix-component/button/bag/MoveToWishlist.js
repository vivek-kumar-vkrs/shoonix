import React from "react";
import HeartWishlist from "../../icon/HeartWishlist";
import { ButtonTransparentShadow } from "../ButtonChildren";

import cls from "./bag.module.scss";

function MoveToWishlist({ onClick }) {
	return (
		<ButtonTransparentShadow
			width100={true}
			onClick={onClick}
			text="Move to wishlist"
			Svg={HeartWishlist}
		></ButtonTransparentShadow>
	);
}

export default MoveToWishlist;
