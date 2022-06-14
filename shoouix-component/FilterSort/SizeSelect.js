import React from "react";
import { ButtonCircle } from "../button/ButtonChildren";
import cls from "./genderSelect.module.scss";

function SizeSelect({ filterData, setFilterData }) {
  console.log("render")
	const clickHandler = (size) => {
		const newFilterData = { ...filterData };
		const sizeObj = newFilterData.size;
		if (size in sizeObj) {
			delete sizeObj[size];
		} else {
			sizeObj[size] = true;
		}
		setFilterData(newFilterData);
	};

	const genderArray = ["S", "M", "L", "XL", "XXL"];
	return (
		<div className={cls.genderSelect}>
			{genderArray.map((size) => (
					<ButtonCircle
						state={true}
						focus={size in filterData.size ? true : false}
						onClick={() => clickHandler(size)}
						key={size}
					>
						<p className={cls.genderText}>{size}</p>
					</ButtonCircle>
			))}
		</div>
	);
}

export default SizeSelect;
