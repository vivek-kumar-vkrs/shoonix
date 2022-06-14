import React from "react";
import { Link } from "../../util/router";

import cls from "./tabNav.module.scss";
import HomeIcon from "../icon/HomeIcon";
import WishlistIcon from "../icon/WishlistIcon";
import UserProfileIcon from "../icon/UserProfileIcon";
import CategoryIcon from "../icon/CategoryIcon";
import { v4 as uuidv4 } from "uuid";
function TabNav() {
	return (
		<div className={cls.tabNav}>
			<div className={cls.tabItem}>
				<Link activeClassName={cls.active} to="/">
					<HomeIcon />
				</Link>
			</div>
			<div className={cls.tabItem}>
				<Link activeClassName={cls.active} to="/categories/">
					<CategoryIcon />
				</Link>
			</div>
			<div className={cls.tabItem}>
				<Link activeClassName={cls.active} to="/dynamic/user/wishlist">
					<WishlistIcon />
				</Link>
			</div>
			<div className={cls.tabItem}>
				<Link activeClassName={cls.active} to="/dynamic/user/dash/">
					<UserProfileIcon />
				</Link>
			</div>
		</div>
	);
}

function TabNavTemplate({ tabItemArray }) {
	return (
		<div className={cls.tabNav}>
			{tabItemArray.map((item) => (
				<div key={uuidv4()} className={cls.tabItem}>
					{item}
				</div>
			))}
		</div>
	);
}
export default TabNav;
export { TabNavTemplate };
