import React from "react";
import { config } from "../../config/config";
import { isBrowser } from "../../util/ssrHelper";
import AddToCartButton from "../button/nav/AddToCartButton";
import ShareButton from "../button/ShareButton";

import cls from "./tabNavCart.module.scss";

function TabNavCart({ product, selectedSize, setSelectedSize }) {
	return (
		<>
			<div className={cls.tabNav}>
				<div className={cls.tabItem}>
					<ShareButton
						title={config.BRAND_NAME}
						url={!isBrowser() ? "" : document.location.href}
						text={product.title}
					/>
				</div>
				<div className={cls.tabItem}>
					<AddToCartButton
						product={product}
						selectedSize={selectedSize}
						setSelectedSize={setSelectedSize}
					/>
				</div>
			</div>
		</>
	);
}

export default TabNavCart;
