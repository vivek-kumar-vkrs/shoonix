import React from "react";
import { Link } from "../../../util/router";

import cls from "./navLogin.module.scss";

function NavLogin({ auth }) {
	return (
		<div>
			<Link
				className={cls.authNavLink + " " + cls.display1200}
				activeClassName="active"
				to={auth.status ? "/logout" : "/login"}
			>
				{auth.status ? "Logout" : "Login"}
			</Link>
		</div>
	);
}

export default NavLogin;
