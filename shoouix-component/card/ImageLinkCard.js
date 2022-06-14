import React from "react";
import { Image } from "../layout/Image";

function ImageLinkCard({ img }) {
	return (
		<div style={{ padding: "0.5rem", margin: "0.5rem" }}>
			<Image img={img} />
		</div>
	);
}

export default ImageLinkCard;
