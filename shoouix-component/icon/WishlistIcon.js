import React from "react";

function WishlistIcon({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			width={size ? size : "2rem"}
			height={size ? size : "2rem"}
			viewBox="0 0 16 16"
		>
			<g fill="#1a1a1a">
				<path
					fillRule="evenodd"
					d="M8 12l5 3V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12l5-3zm-4 1.234l4-2.4l4 2.4V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10.234z"
				/>
			</g>
			<rect x="0" y="0" width="16" height="16" fill="rgba(0, 0, 0, 0)" />
		</svg>
	);
}

export default WishlistIcon;
