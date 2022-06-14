import React from "react";

function ClearIcon({ size }) {
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
				d="M6 13h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1s.45 1 1 1zm-2 4h12c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm3-9c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1z"
				fill="#626262"
			/>
		</svg>
	);
}

export default ClearIcon;
