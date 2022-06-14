import React from "react";

function HeartPlus({ size }) {
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
				d="M12.67 20.74l-.67.61l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11c-.62-.3-1.31-.5-2.03-.57C19.5 10.8 20 9.65 20 8.5c0-2-1.5-3.5-3.5-3.5c-1.54 0-3.04 1-3.57 2.36h-1.86C10.54 6 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.89 10.05l.11.1l.04-.04c.08.76.3 1.48.63 2.13M17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z"
				fill="#626262"
			/>
		</svg>
	);
}

export default HeartPlus;