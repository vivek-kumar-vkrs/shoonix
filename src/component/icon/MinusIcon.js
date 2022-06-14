import React from "react";

function MinusIcon({ size }) {
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
			<path fill="#626262" d="M19 13H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z" />
		</svg>
	);
}

export default MinusIcon;
