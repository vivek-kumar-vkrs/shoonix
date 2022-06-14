import React from "react";

function HeartWishlist({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
			width={size ? size : "2rem"}
			height={size ? size : "2rem"}
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 24 24"
		>
			<path
				d="M19 22V4c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v18l7-4.666L19 22zM8.006 8.056c0-.568.224-1.083.585-1.456c.361-.372.86-.603 1.412-.603c0 0 .996-.003 1.997 1.029c1.001-1.032 1.997-1.029 1.997-1.029c.552 0 1.051.23 1.412.603s.585.888.585 1.456s-.224 1.084-.585 1.456L12 13.203L8.591 9.512a2.083 2.083 0 0 1-.585-1.456z"
				fill="#626262"
			/>
		</svg>
	);
}

export default HeartWishlist;
