import React from "react";
import cls from "./text.module.scss";

function Text({ text, active }) {
	return <p className={active ? cls.activeText : cls.text}>{text}</p>;
}

export { Text };
