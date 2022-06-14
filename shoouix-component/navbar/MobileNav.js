import React from "react";
import Category from "../Accordion/Category";
import { menCategories, womenCategories } from "../../config/categoriesData";

import cls from "./mobileNav.module.scss";
import { Link } from "gatsby";
import AuthLink from "./AuthLink";

function MobileNav({ navToggle, auth }) {
	return (
		<div className={navToggle ? cls.mobileNav : cls.dNone}>
			<Category key={"1"} title="Men" categories={menCategories} />
			<Category key={"2"} title="WoMen" categories={womenCategories} />
			<Category key={"3"} title="Boy" categories={menCategories} />
			<Category key={"4"} title="Girl" categories={menCategories} />

			<AuthLink auth={auth} />
			<Link className={cls.navLinkMuted} to="/contact">
				Contact Us
			</Link>
		</div>
	);
}

export default MobileNav;
