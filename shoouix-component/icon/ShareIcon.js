import React from "react";

function ShareIcon({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			focusable="false"
			width={size ? size : "2rem"}
			height={size ? size : "2rem"}
			preserveAspectRatio="xMidYMid meet"
			viewBox="0 0 512 512"
		>
			<path
				fill="#1a1a1a"
				d="M404 344a75.9 75.9 0 0 0-60.208 29.7l-163.923-93.036a75.693 75.693 0 0 0 0-49.328L343.792 138.3a75.937 75.937 0 1 0-13.776-28.976L163.3 203.946a76 76 0 1 0 0 104.108l166.717 94.623A75.991 75.991 0 1 0 404 344zm0-296a44 44 0 1 1-44 44a44.049 44.049 0 0 1 44-44zM108 300a44 44 0 1 1 44-44a44.049 44.049 0 0 1-44 44zm296 164a44 44 0 1 1 44-44a44.049 44.049 0 0 1-44 44z"
			/>
		</svg>
	);
}

export default ShareIcon;
