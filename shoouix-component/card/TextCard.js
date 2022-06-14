import React from "react";
import cls from "./address.module.scss";
import { ButtonTransparentShadow } from "../button/ButtonChildren";
import { v4 as uuidv4 } from "uuid";

function TextCard({ title, textObj, functionArray }) {
	const textArray = [];
	for (const [key, value] of Object.entries(textObj)) {
		if (key !== "id" && key !== "_id" && key !== "ID" && value !== title) {
			textArray.push(
				<div key={uuidv4()} className={cls.textBlock}>
					<p className={cls.textKey}>{key} </p>
					<p className={cls.textValue}>{value}</p>
				</div>
			);
		}
	}
	return (
		<div className={cls.card}>
			<p className={cls.title}>{title}</p>
			{textArray}
			<div className={cls.functionBlock}>
				{functionArray.map((func) => (
					<ButtonTransparentShadow
						key={uuidv4()}
						onClick={func.onClick}
						width100={true}
						style={func.style ? func.style : {}}
					>
						<div style={{ display: "flex", justifyContent: "center" }}>
							{func.Svg ? <func.Svg /> : ""}
							{func.text ? (
								<p style={func.Svg ? { paddingLeft: "0.5rem" } : {}}>
									{func.text}
								</p>
							) : (
								""
							)}
						</div>
					</ButtonTransparentShadow>
				))}
			</div>
		</div>
	);
}

export default TextCard;
