import React from "react";
import cls from "./divider.module.scss";

function HorizontalDivider() {
	return <div className={cls.hDivider}></div>;
}

function VerticalDivider() {
	return <div className={cls.vDivider}></div>;
}

function Divider({ w2, w3, w75 }) {
	return w2 ? (
		<div className={cls.dividerW2}></div>
	) : w3 ? (
		<div className={cls.dividerW3}></div>
  ) : w75?  (
		<div className={cls.dividerW75}></div>
	): 
  (
		<div className={cls.divider}></div>
	);
}
function DividerWithTitle({ title }) {
	return (
		<div className={cls.dividerWithTitle}><p className={cls.title}>{title}</p></div>
	)
}
export default Divider;
export { HorizontalDivider, VerticalDivider, DividerWithTitle };
