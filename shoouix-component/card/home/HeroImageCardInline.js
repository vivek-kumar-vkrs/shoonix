import React from "react";
import { navigate } from "../../../util/router";

function HeroImageCardInline({ img, header, subHeader, linkTo }) {
	const clickHandler = () => {
		navigate(linkTo);
	};

	const style = {
		heroImageCard: {
			padding: "0",
			width: "100%",
			height: "400px",
			position: "relative",
		},
		imgFluid: {
			maxWidth: "100%",
			width: "100%",
			height: "auto",
			maxHeight: "80%",
		},
	};
	return (
		<div onClick={clickHandler} style={style.heroImageCard}>
			<img style={style.imgFluid} src={img} alt="" />
		</div>
	);
}

export default HeroImageCardInline;
