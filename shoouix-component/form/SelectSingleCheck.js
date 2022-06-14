import React from "react";
import { v4 as uuidv4 } from "uuid";
import cls from "./selectSingleCheck.module.scss";

function SelectSingleCheck({ check, setCheck, checkData }) {
	const handleChange = (e) => {
		setCheck(Number(e.target.name[5]));
	};
	const checkBlocks = [];

	for (let i in checkData) {
		const checkId = uuidv4();
		checkBlocks.push(
			<div key={uuidv4()} className={cls.fgCheck}>
				<input
					id={checkId}
					className={cls.customCheckInput}
					value={Number(i) === check ? true : false}
					checked={Number(i) === check ? true : false}
					onChange={handleChange}
					type="checkbox"
					name={`check${i}`}
				/>
				<label htmlFor={checkId} className={cls.label}>
					{checkData[i]}
				</label>
			</div>
		);
	}
	return <div className={cls.selectSingleCheck}>{checkBlocks}</div>;
}

export default SelectSingleCheck;
