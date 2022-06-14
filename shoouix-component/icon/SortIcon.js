import React from "react";

function SortIcon({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
			preserveAspectRatio="xMidYMid meet"
			width={size ? size : "2rem"}
			height={size ? size : "2rem"}
			viewBox="0 0 24 24"
		>
			<path d="M8 16H4l6 6V2H8zm6-11v17h2V8h4l-6-6z" fill="#626262" />
		</svg>
	);
}

export default SortIcon;
