import React from "react";
import cls from "./image.module.scss";

const ResponsiveImages = ({ imgs }) => {
	return (
		<picture>
			<img></img>
		</picture>
	);
};

const Image = ({ img, alt }) => {
	return <img src={img} className={cls.imgFluid} alt={alt ? alt : ""} />;
};

export { Image, ResponsiveImages };
