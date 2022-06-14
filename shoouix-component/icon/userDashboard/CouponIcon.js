import React from "react";

function CouponIcon({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			width={size ? size : "2rem"}
			height={size ? size : "2rem"}
			viewBox="0 0 24 24"
		>
			<path
				d="M11 21a1.5 1.5 0 0 0-3 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a1.5 1.5 0 0 0 3 0h10a1 1 0 0 1 1 1v5.5a2.5 2.5 0 1 0 0 5V20a1 1 0 0 1-1 1H11zM9.5 10.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3zm0 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z"
				fill="#662d91"
			/>
			<rect x="0" y="0" width="24" height="24" fill="rgba(0, 0, 0, 0)" />
		</svg>
	);
}

export default CouponIcon;
