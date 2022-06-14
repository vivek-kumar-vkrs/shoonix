import React from "react";
import { ButtonCircle } from "../button/ButtonChildren";
import cls from "./genderSelect.module.scss";

function GenderSelect({ filterData, setFilterData }) {
	const clickHandler = (gender) => {
		const newFilterData = { ...filterData };
		newFilterData.gender = gender;
		setFilterData(newFilterData);
	};
	const genderArray = ["unisex", "women", "men", "girl"];
	return (
		<div className={cls.genderSelect}>
			{genderArray.map((gender) => (
				<div className={cls.buttonBlock} key={gender} >
					<p className={cls.buttonTitle}>{`${gender}:`}</p>
					<ButtonCircle
						state={true}
						focus={filterData.gender === gender[0] ? true : false}
						onClick={() => clickHandler(gender[0])}
					>
						<p className={cls.genderText}>{gender[0]}</p>
					</ButtonCircle>
				</div>
			))}
		</div>
	);
}

export default GenderSelect;
