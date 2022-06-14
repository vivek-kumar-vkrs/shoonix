import React from "react";

function PlusIcon({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
			width={size ? size : "2rem"}
			height={size ? size : "2rem"}
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 16 16"
		>
			<g fill="#626262">
				<path
					fillRule="evenodd"
					d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
				/>
				<path
					fillRule="evenodd"
					d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
				/>
			</g>
		</svg>
	);
}

export default PlusIcon;
