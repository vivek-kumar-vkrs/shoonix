import React from "react";
import cls from "./heroCard.module.scss";
function HeroCard({ subtitle, img }) {
	return (
		<div className={cls.heroCard}>
			<div className={cls.imgBlock}>
				<img className={cls.img} src={img} alt="" />
			</div>
			<div className={cls.contentBlock}>
				{" "}
				<p className={cls.title}>{"coin:"}</p>
				<p className={cls.subtitle}>{subtitle}</p>
			</div>
		</div>
	);
}

export default HeroCard;
