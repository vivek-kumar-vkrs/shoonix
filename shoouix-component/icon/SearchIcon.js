import React from "react";

function SearchIcon({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			preserveAspectRatio="xMidYMid meet"
			width={size ? size : "2rem"}
			height={size ? size : "2rem"}
			viewBox="0 0 24 24"
		>
			<path
				fill="#1a1a1a"
				d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6z"
			/>
			{/* <rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" /> */}
		</svg>
	);
}

export default SearchIcon;
