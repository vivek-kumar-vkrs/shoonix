import React from "react";
import cls from "./address.module.scss";
import { ButtonTransparentShadow } from "../button/ButtonChildren";
import { v4 as uuidv4 } from "uuid";

function AddressCard({ title, textObj, functionArray }) {
	const textArray = [];
	for (const [objKey, value] of Object.entries(textObj)) {
		if (
			objKey !== "id" &&
			objKey !== "_id" &&
			objKey !== "ID" &&
			value !== title
		) {
			textArray.push(
				<div key={uuidv4()} className={cls.textBlock}>
					<p className={cls.textKey}>{objKey} </p>
					<p className={cls.textValue}>{value}</p>
				</div>
			);
		}
	}

	const functionArrays = [];
	for (let item of functionArray) {
		functionArrays.push(
			<ButtonTransparentShadow
				key={uuidv4()}
				onClick={item.onClick}
				width100={true}
				style={item.style ? item.style : {}}
				highlight={item.active}
			>
				{item.text}
			</ButtonTransparentShadow>
		);
	}
	return (
		<div className={cls.card}>
			<p className={cls.title}>{title}</p>
			{textArray}
			<div className={cls.functionBlock}>{functionArrays}</div>
		</div>
	);
}

export default AddressCard;
