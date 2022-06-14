import React from "react";
import { navigate } from "../../../util/router";
import { Image } from "../../layout/Image";
import ImageSliderInline from "../../slider/ImageSliderInline";
import cls from "./heroCarousel.module.scss";

function HeroCarouselInline({ imgs, linkTo, duration, height }) {
	const clickHandler = () => {
		navigate(linkTo);
	};

	const style = {
		heroCard: {
			padding: "0",
			width: "100%",
			height: `${height}`,
			position: "relative",
		},
		linkToOverlay: {
			position: "absolute",
			cursor: "pointer",
			zIndex: 12,
			width: "100%",
			height: "auto",
			left: 0,
			right: 0,
			top: 0,
			padding: 0,
		},
	};

	const slideData = imgs.map((img) => <Image img={img} />);

	return (
		<>
			<div style={style.heroCard}>
				<ImageSliderInline
					InfiniteLoop={true}
					slideData={slideData}
					duration={duration ? duration : 3000}
				/>
				<button onClick={clickHandler} style={style.linkToOverlay}></button>
			</div>
		</>
	);
}

export default HeroCarouselInline;
