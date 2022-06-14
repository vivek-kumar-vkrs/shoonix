import React, { useState, useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

import NavButton from "../button/nav/NavButton";
import NavBrandLogo from "../button/nav/NavBrandLogo";
import NavLogin from "../button/nav/NavLogin";
import NavBack from "../button/nav/NavBack";
import NavSearch from "../button/nav/NavSearch";
import NavCart from "../button/nav/NavCart";
import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";
import { FlexSpaceBtwn, JustifyAlignCenter } from "../layout/Flex";

import cls from "./navBar.module.scss";

export default function Navbar(props) {
	const [navToggle, setNavToggle] = useState(false);

	const auth = useContext(AuthContext);

	const navToggleClickHandler = () => setNavToggle(!navToggle);

	return (
		<nav
			className={!navToggle ? cls.addNavShadow + " " + cls.navbar : cls.navbar}
		>
			<FlexSpaceBtwn>
				<JustifyAlignCenter>
					{props.title ? (
						<NavBack />
					) : (
						<NavButton cross={true} clickHandler={navToggleClickHandler} />
					)}
					{props.title ? (
						<p className={cls.title}>{props.title}</p>
					) : (
						<NavBrandLogo />
					)}
					<DeskNav />
				</JustifyAlignCenter>

				<JustifyAlignCenter>
					<NavSearch />
					<NavCart />
					<NavLogin auth={auth} />
				</JustifyAlignCenter>
			</FlexSpaceBtwn>
			<MobileNav auth={auth} navToggle={navToggle} />
		</nav>
	);
}
