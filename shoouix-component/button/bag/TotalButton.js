import React, { useEffect } from "react";
import { formatPrice } from "../../../util/product/format";
import { ButtonOutline } from "../Button";

function TotalButton({
	total,
	setTotal,
	defaultTotal,
	useCoin,
	coin,
	setCoin,
	defaultCoin,
}) {
	useEffect(() => {
		const cartSubtotalUseCoin = (total, useCoin, coin, setCoin) => {
			if (useCoin) {
				return coinManage(total, coin, setCoin);
			} else {
				return total;
			}
		};

		const coinManage = (total, coin, setCoin) => {
			if (coin < total) {
				setCoin(0);
				return total - coin;
			} else {
				setCoin(coin - total);
				return 0;
			}
		};

		if (useCoin) {
			setTotal(cartSubtotalUseCoin(total, useCoin, coin, setCoin));
		} else {
			setCoin(defaultCoin);
			setTotal(defaultTotal);
		}
	}, [total, setTotal, useCoin, coin, setCoin]);

	return <ButtonOutline width100={true} text={formatPrice(total)} />;
}

export default TotalButton;
