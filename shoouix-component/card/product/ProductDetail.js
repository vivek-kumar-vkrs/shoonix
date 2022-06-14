import React from "react";
import cls from "./productDetail.module.scss";

function ProductDetail({
	fabric,
	originCountry,
	vendor,
	brand,
	wash,
	color,
	description,
}) {
	return (
		<div className={cls.productDetail}>
			<p className={cls.title}>Product Details</p>
			<p className={cls.content}>Fabric: {fabric}</p>
			<p className={cls.content}>color: {color}</p>
			<p className={cls.content}>
				Wash:{" "}
				{wash ? (wash === "machineWash" ? "Machine Wash" : "Hand Wash") : ""}
			</p>
			<p className={cls.content}>Country of Origin: {originCountry}</p>
			<p className={cls.content}>Seller: {vendor}</p>
			<p className={cls.content}>Brand: {brand}</p>
			{description ? (
				<>
					{" "}
					<p className={cls.content} style={{ fontWeight: 600 }}>
						description:
					</p>
					<div
						className={cls.content}
						dangerouslySetInnerHTML={{ __html: description }}
					/>
				</>
			) : (
				""
			)}
		</div>
	);
}

export default ProductDetail;
