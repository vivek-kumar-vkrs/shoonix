import React, { useState } from "react";
import { Link } from "../../util/router";

// import { capitalize } from '../../util/product/format';

import downArrowImg from "../../images/icons/arrow-down-alt2.svg";
import rightArrowImg from "../../images/icons/arrow-right-alt2.svg";
import cls from "./category.module.scss";
import { replaceDashWithSpace } from "../../config/categoriesData";

//****NOTE */ use uuid
let i = 10000;

function SubCategory({ title, categories, subtitle, genderFor }) {
	const [expand, setExpand] = useState(false);

	let dropdownItems = categories[title].map((subcategory) => (
		<Link
			className={cls.subcategoryLink}
			key={" " + i++}
			to={`/dynamic/products/${genderFor}/${subcategory}`}
		>
			{replaceDashWithSpace(subcategory)}
		</Link>
	));

	return (
		<>
			<button className={cls.btnSub} onClick={() => setExpand(!expand)}>
				<div className={cls.flexSpBtwn}>
					<div>
						<p className={cls.categoryTitle}>{replaceDashWithSpace(title)}</p>
						{subtitle ? <p className={cls.subtitle}>{subtitle}</p> : ""}
					</div>
					<img src={expand ? downArrowImg : rightArrowImg} alt="" />
				</div>
			</button>
			<div className={expand ? "" : cls.dnone}>{dropdownItems}</div>
		</>
	);
}

export default SubCategory;
