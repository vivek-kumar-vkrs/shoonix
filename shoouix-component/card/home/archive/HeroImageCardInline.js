import React from "react";
import { navigate } from "../../../util/router";

function HeroImageCardInline({ img, header, subHeader, linkTo }) {
	const clickHandler = () => {
		navigate(linkTo);
	};

	const style = {
		heroImageCard: {
			padding: "0",
			// width: "auto",
			width: "100%",
			// height: "auto",
			height: "400px",
			position: "relative",
		},
		headerBlock: {
			position: "absolute",
			cursor: "pointer",
			zIndex: "11",
			top: "0",
			width: "100%",
			height: "100%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			background: "rgba(0, 0, 0, 0.2)",
		},
		header: {
			paddingTop: "10%",
			color: "#e0e0e0",
			fontSize: "1.5rem",
			fontWeight: 800,
		},
		subHeader: {
			color: "#f2f2f2",
			fontSize: "1rem",
			fontWeight: 600,
		},
		imgFluid: {
			maxWidth: "100%",
			width: "100%",
			height: "auto",
		},
		linkToOverlay: {
			position: "absolute",
			zIndex: 12,
			width: "100%",
			height: "100%",
			left: 0,
			right: 0,
			top: 0,
		},
	};
	return (
		<div style={style.heroImageCard}>
			<img style={style.imgFluid} src={img} alt="" />
			<div style={style.headerBlock}>
				{header ? <p style={style.header}>{header}</p> : ""}
				{subHeader ? <p style={style.subHeader}>{subHeader}</p> : ""}
			</div>
			<button onClick={clickHandler} style={style.linkToOverlay}></button>
		</div>
	);
}

export default HeroImageCardInline;
