import React from "react";

function UserProfileIcon({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			width={size ? size : "2rem"}
			height={size ? size : "2rem"}
			viewBox="0 0 32 32"
		>
			<path
				d="M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z"
				fill="black"
			/>
			<path
				d="M22 30h-2v-5a5 5 0 0 0-5-5H9a5 5 0 0 0-5 5v5H2v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"
				fill="black"
			/>
			<path d="M22 4h10v2H22z" fill="black" />
			<path d="M22 9h10v2H22z" fill="black" />
			<path d="M22 14h7v2h-7z" fill="black" />
			<rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" />
		</svg>
	);
}

export default UserProfileIcon;
