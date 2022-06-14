import React from "react";

function ProfileIcon({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			width={size ? size : "2rem"}
			height={size ? size : "2rem"}
			viewBox="0 0 24 24"
		>
			<g
				fill="none"
				stroke="#662d91"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
				<circle cx="12" cy="7" r="4" />
			</g>
			<rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
		</svg>
	);
}

export default ProfileIcon;
