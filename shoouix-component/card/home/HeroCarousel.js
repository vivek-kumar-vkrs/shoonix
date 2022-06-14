import React from "react";
import cls from "./heroCarousel.module.scss";

import { navigate } from "../../../util/router";
import ImageSlider from "../../slider/ImageSlider";

function HeroCarousel({ imgs, header, subHeader, linkTo, duration }) {
	const clickHandler = () => {
		navigate(linkTo);
	};
	const slideData = imgs.map((img) => (
		<img className={cls.imgFluid} src={img} alt="" />
	));
	return (
		<>
			<div className={cls.heroCard}>
				<ImageSlider
					InfiniteLoop={true}
					slideData={slideData}
					duration={duration ? duration : 3000}
				/>
				{/* <div className={cls.headerBlock}>
					{header ? <p className={cls.header}>{header}</p> : ""}
					{subHeader ? <p className={cls.subHeader}>{subHeader}</p> : ""}
				</div> */}
				<button onClick={clickHandler} className={cls.linkToOverlay}></button>
			</div>
		</>
	);
}

export default HeroCarousel;
