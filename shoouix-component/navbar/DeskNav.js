import React, { useState } from "react";
import { menCategories, womenCategories } from "../../config/categoriesData";
import cls from "./deskNav.module.scss";
import Dropdown from "./Dropdown";

function DeskNav() {
	const [showDropdown, setShowDropdown] = useState(false);
	const closeMenu = () => {
		setShowDropdown(false);
		document.removeEventListener("click", closeMenu);
	};
	const clickHandler = (header) => {
		if (showDropdown == false) {
			setShowDropdown(header);
			setTimeout(() => {
				document.addEventListener("click", closeMenu);
			}, 50);
		}
	};

	return (
		<div className={cls.deskNav}>
			<Dropdown
				header="men"
				linksObject={menCategories}
				showDropdown={showDropdown}
				setShowDropdown={setShowDropdown}
				clickHandler={clickHandler}
			/>
			<Dropdown
				header="women"
				linksObject={womenCategories}
				showDropdown={showDropdown}
				setShowDropdown={setShowDropdown}
				clickHandler={clickHandler}
			/>
		</div>
	);
}

export default DeskNav;
