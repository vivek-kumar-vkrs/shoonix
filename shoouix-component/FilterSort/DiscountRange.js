import React from "react";
import { ButtonTransparentShadow } from "../button/ButtonChildren";
import cls from "./discountRange.module.scss";

function DiscountRange({ filterData, setFilterData }) {
	const clickHandler = (range) => {
		const newFilterData = { ...filterData };
		newFilterData.discountRange = range;
		setFilterData(newFilterData);
	};
	return (
		<div className={cls.discountRange}>
			<ButtonTransparentShadow onClick={() => clickHandler(20)}>
				<p className={cls.discountText}>Discount upto 20%</p>
			</ButtonTransparentShadow>
			<ButtonTransparentShadow onClick={() => clickHandler(30)}>
				<p className={cls.discountText}>Discount upto 30%</p>
			</ButtonTransparentShadow>{" "}
			<ButtonTransparentShadow onClick={() => clickHandler(40)}>
				<p className={cls.discountText}>Discount upto 40%</p>
			</ButtonTransparentShadow>{" "}
			<ButtonTransparentShadow onClick={() => clickHandler(50)}>
				<p className={cls.discountText}>Discount upto 50%</p>
			</ButtonTransparentShadow>{" "}
			<ButtonTransparentShadow onClick={() => clickHandler(60)}>
				<p className={cls.discountText}>Discount upto 60%</p>
			</ButtonTransparentShadow>
		</div>
	);
}

export default DiscountRange;
