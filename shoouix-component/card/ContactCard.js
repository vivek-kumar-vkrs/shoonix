import React from "react";
import cls from "./contactCard.module.scss";

function ContactCard({ img, href, imgText, Svg, title, contentArray }) {
	return (
		<div className={cls.contactCard}>
			<a className={cls.linkTo} href={`${href}`}>
				{Svg ? <Svg /> : <img className={cls.img} src={img} alt="address" />}
				<p className={cls.imgText}>{imgText}</p>
			</a>
			<p className={cls.title}>{title}</p>
			{contentArray.map((content) => (
				<p className={cls.content}>{content}</p>
			))}
		</div>
	);
}

export default ContactCard;
