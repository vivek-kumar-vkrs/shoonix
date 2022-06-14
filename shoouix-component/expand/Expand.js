import { Link } from "gatsby";
import React from "react";

import rightArrowImg from "../../images/icons/bx-right-arrow.svg";
import RightArrowBoxIcon from "../icon/arrow/RightArrowBoxIcon";
import cls from "./expand.module.scss";

function Expand({ title, subtitle, img, Svg, link }) {
	return (
		<div className={cls.expand}>
			<Link to={link}>
				<div className={cls.wrapperFlex}>
					<div className={cls.block1}>
						{Svg ? <Svg /> : ""}
						{img ? <img className={cls.imgFluid} src={img} alt="" /> : ""}
						<div className={cls.text}>
							<p className={cls.title}>{title}</p>
							<p className={cls.subtitle}>{subtitle}</p>
						</div>
					</div>

					<div className={cls.block2}>
						<RightArrowBoxIcon />
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Expand;
