import React from "react";
import BagIcon from "../../icon/BagIcon";
import { ButtonTransparentShadow } from "../ButtonChildren";
import cls from "./bag.module.scss";

function RemoveItem({ onClick }) {
	return (
		<ButtonTransparentShadow
			width100={true}
			onClick={onClick}
			text="Remove Item"
			Svg={BagIcon}
			svgFill={false}
		></ButtonTransparentShadow>
	);
}

export default RemoveItem;
