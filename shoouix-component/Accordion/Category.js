import React, { useState } from "react";
import SubCategory from "./SubCategory";

import cls from "./category.module.scss";

import downArrowImg from "../../images/icons/arrow-down-alt2.svg";
import rightArrowImg from "../../images/icons/arrow-right-alt2.svg";

//****NOTE */ use uuid

function Category({ title, subtitle, categories }) {
	const [expand, setExpand] = useState(false);

	let dropdownItems = [];

	for (let item in categories) {
		dropdownItems.push(
			<SubCategory key={item} categories={categories} title={item} />
		);
	}

	return (
		<>
			<button className={cls.btn} onClick={() => setExpand(!expand)}>
				<div className={cls.flexSpBtwn}>
					<div>
						<p className={cls.title}>{title}</p>
						{subtitle ? <p className={cls.subtitle}>{subtitle}</p> : ""}
					</div>
					<img src={expand ? downArrowImg : rightArrowImg} alt="" />
				</div>
			</button>
			<div className={expand ? "" : cls.dnone}>{dropdownItems}</div>
		</>
	);
}

export default Category;
