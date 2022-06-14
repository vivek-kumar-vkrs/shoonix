import React from "react";

function LoginIcon({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			width={size ? size : "2rem"}
			height={size ? size : "2rem"}
			viewBox="0 0 32 32"
		>
			<path d="M16 8a5 5 0 1 0 5 5a5 5 0 0 0-5-5z" fill="#1a1a1a" />
			<path
				d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2zm7.992 22.926A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926a12 12 0 1 1 15.985 0z"
				fill="#1a1a1a"
			/>
			<rect x="0" y="0" width="32" height="32" fill="rgba(0, 0, 0, 0)" />
		</svg>
	);
}

export default LoginIcon;
