import React, { useState } from "react";
// import { Link } from '../../util/router'
import SubCategory from "./SubCategory";

import cls from "./categoryImage.module.scss";

import downArrowImg from "../../images/icons/arrow-down-alt2.svg";
import rightArrowImg from "../../images/icons/arrow-right-alt2.svg";

//****NOTE */ use uuid

function CategoryImage({ title, subtitle, categories, img, genderFor }) {
	const [expand, setExpand] = useState(false);

	let dropdownItems = [];

	for (let item in categories) {
		dropdownItems.push(
			<SubCategory
				key={item}
				categories={categories}
				title={item}
				genderFor={genderFor}
			/>
		);
	}

	return (
		<>
			<div className={cls.heroImageCard}>
				<img className={cls.imgFluid} src={img} alt="" />
				<div className={cls.headerBlock}>
					<div>
						<p className={cls.title}>{title}</p>
						{subtitle ? <p className={cls.subtitle}>{subtitle}</p> : ""}
					</div>
					<img src={expand ? downArrowImg : rightArrowImg} alt="" />
				</div>
				<button
					onClick={() => setExpand(!expand)}
					className={cls.linkToOverlay}
				></button>
			</div>
			<div className={expand ? "" : cls.dnone}>{dropdownItems}</div>
		</>
	);
}

export default CategoryImage;
