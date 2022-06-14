import React, { useContext } from "react";
import { Link } from "../../../util/router";
import { CartContext } from "../../../context/CartContext";
import BagIcon from "../../icon/BagIcon";

import cls from "./navCart.module.scss";

function NavCart() {
	const cartCont = useContext(CartContext);

	return (
		<div className={cls.navCart}>
			<Link className={cls.navCartBag} to="/dynamic/user/bag">
				<BagIcon />

				{cartCont?.cart?.length > 0 ? (
					<p className={cls.cartCount}>{cartCont.cart.length}</p>
				) : (
					""
				)}
			</Link>
		</div>
	);
}

export default NavCart;
