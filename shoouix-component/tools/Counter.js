import React, { useState, useContext } from "react";
import MinusIcon from "../icon/MinusIcon";
import PlusIcon from "../icon/PlusIcon";
import cls from "./counter.module.scss";
import { CartContext } from "../../context/CartContext"
// import { getProductQty } from "../../util/cart";

function Counter({ prodId, qty, limit }) {
	const [counter, setCounter] = useState(qty);
  const cartCont = useContext(CartContext)

	const incHandler = () => {
		console.log("counter", counter);
		if (counter < limit) {

			setCounter(counter + 1);
			cartCont.updateProductQty(prodId, counter+1)
		}
		console.log("counter", counter);
	};

	const decHandler = () => {
		console.log("counter", counter);
		if (counter > 1) {
			setCounter(counter - 1);
			cartCont.updateProductQty(prodId, counter-1)
		}
		console.log("counter", counter);
	};


	return (
		<div className={cls.counter}>
			<p className={cls.qty}>Qty: </p>
			<button className={cls.decrement} onClick={decHandler}>
				<MinusIcon />
			</button>
			<p className={cls.qty}>{counter}</p>
			<button className={cls.increment} onClick={incHandler}>
				<PlusIcon />
			</button>
		</div>
	);
}

export default Counter;
