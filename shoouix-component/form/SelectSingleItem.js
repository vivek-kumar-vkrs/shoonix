import React from "react";
import { v4 as uuidv4 } from "uuid";
import cls from "./selectSingleItem.module.scss";

function SelectSingleItem({ check, setCheck, checkData }) {
	const handleChange = (e) => {
		setCheck(e.target.name);
	};
	return (
		<div className={cls.selectSingleItem}>
			{checkData.map((item) => {
				const checkId = uuidv4();
				return (
					<div key={uuidv4()} className={cls.formGroup}>
						<input
							id={checkId}
							className={cls.inputControl}
							value={item === check ? true : false}
							checked={item === check ? true : false}
							onChange={handleChange}
							type="checkbox"
							name={item}
						/>
						<label htmlFor={checkId} className={cls.label}>
							{item}
						</label>
					</div>
				);
			})}
		</div>
	);
}

export default SelectSingleItem;
