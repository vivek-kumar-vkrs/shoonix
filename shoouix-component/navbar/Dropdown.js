import React from "react";
import { Link } from "../../util/router";
import { replaceDashWithSpace } from "../../config/categoriesData";
import { v4 as uuidv4 } from "uuid";
import cls from "./dropdown.module.scss";

function Dropdown({ header, linksObject, showDropdown, clickHandler }) {
	const navlinks = [];

	for (let key in linksObject) {
		navlinks.push(
			<p key={uuidv4()} className={cls.subHeader}>
				{replaceDashWithSpace(key)}
			</p>
		);
		for (let item of linksObject[key]) {
			navlinks.push(
				<Link
					key={uuidv4()}
					className={cls.navlink}
					activeClassName="active"
					to={`${item}`}
				>
					{replaceDashWithSpace(item)}
				</Link>
			);
		}
	}

	return (
		<div className={cls.dropdown} style={{ display: "inline-block" }}>
			<button onClick={() => clickHandler(header)} className={cls.header}>
				{header}
			</button>
			<div className={showDropdown === header ? cls.dropdownLinks : cls.dnone}>
				{navlinks}
			</div>
		</div>
	);
}

export default Dropdown;
// 100871029941 //ashok mishra
