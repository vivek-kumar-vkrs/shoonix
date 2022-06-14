import React from "react";
import { navigate } from "../../../util/router";

import cls from "./heroImageCard.module.scss";

function HeroImageCard({ img, header, subHeader, linkTo }) {
	const clickHandler = () => {
		navigate(linkTo);
	};
	return (
		<div className={cls.heroImageCard}>
			<img className={cls.imgFluid} src={img} alt="" />
			<div className={cls.headerBlock}>
				{header ? <p className={cls.header}>{header}</p> : ""}
				{subHeader ? <p className={cls.subHeader}>{subHeader}</p> : ""}
			</div>
			<button onClick={clickHandler} className={cls.linkToOverlay}></button>
		</div>
	);
}

export default HeroImageCard;
