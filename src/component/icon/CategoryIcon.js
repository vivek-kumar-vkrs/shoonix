import React from "react";

function CategoryIcon({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			width={size ? size : "2rem"}
			height={size ? size : "2rem"}
			viewBox="0 0 32 32"
		>
			<path d="M14 25h14v2H14z" fill="black" />
			<path
				d="M7.17 26l-2.58 2.58L6 30l4-4l-4-4l-1.42 1.41L7.17 26z"
				fill="black"
			/>
			<path d="M14 15h14v2H14z" fill="black" />
			<path
				d="M7.17 16l-2.58 2.58L6 20l4-4l-4-4l-1.42 1.41L7.17 16z"
				fill="black"
			/>
			<path d="M14 5h14v2H14z" fill="black" />
			<path
				d="M7.17 6L4.59 8.58L6 10l4-4l-4-4l-1.42 1.41L7.17 6z"
				fill="black"
			/>
			<rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" />
		</svg>
	);
}

export default CategoryIcon;
