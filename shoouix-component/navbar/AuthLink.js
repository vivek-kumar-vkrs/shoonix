import { Link } from "gatsby";
import React from "react";
import cls from "./authlink.module.scss";
function AuthLink({ auth }) {
	return (
		<div className={cls.authLink}>
			<hr className={cls.hr} />
			{auth.status ? (
				<div className={cls.authenticBlock}>
					<Link className={cls.authenticLink} to="/dynamic/user/order">
						Order
					</Link>
					<Link className={cls.authenticLink} to="/dynamic/auth/logout">
						Logout
					</Link>
				</div>
			) : (
				<div className={cls.unAuthenticBlock}>
					<Link className={cls.unAuthenticLink} to="/dynamic/auth/login">
						Login
					</Link>
					<Link className={cls.unAuthenticLink} to="/dynamic/auth/signup">
						Signup
					</Link>
				</div>
			)}
		</div>
	);
}

export default AuthLink;
