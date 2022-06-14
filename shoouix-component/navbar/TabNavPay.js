import React, { useState } from "react";
import { Button, StatefullButtonW100 } from "../button/Button";
import cls from "./tabNavFilterSort.module.scss";
import TotalButton from "../button/bag/TotalButton";

function TabNavPay({
	defaultTotal,
	useCoin,
	coin,
	setCoin,
	defaultCoin,
	paymentHandler,
	canClickPaymentButton,
}) {
	const [total, setTotal] = useState(total);

	const clickHandler = () => {
		paymentHandler();
	};

	return (
		<>
			<div className={cls.addMarginTop}></div>
			<div className={cls.tabNav}>
				<div className={cls.tabItem}>
					<TotalButton
						total={total}
						setTotal={setTotal}
						defaultTotal={defaultTotal}
						useCoin={useCoin}
						coin={coin}
						defaultCoin={defaultCoin}
						setCoin={setCoin}
					/>
				</div>
				<div className={cls.tabItem}>
					<StatefullButtonW100
						active={canClickPaymentButton}
						width100={true}
						text={"Payment"}
						onClick={clickHandler}
					/>
				</div>
			</div>
		</>
	);
}

export default TabNavPay;
