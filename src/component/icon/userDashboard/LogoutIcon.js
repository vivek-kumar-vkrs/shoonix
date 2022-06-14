import React from "react";

function LogoutIcon({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			width={size ? size : "2rem"}
			height={size ? size : "2rem"}
			viewBox="0 0 1188 1000"
		>
			<path
				d="M912 236l276 266l-276 264V589H499V413h413V236zM746 748l106 107q-156 146-338 146q-217 0-365.5-143.5T0 499q0-135 68-250T251.5 67.5T502 1q184 0 349 148L746 255Q632 151 503 151q-149 0-251.5 104T149 509q0 140 105.5 241T502 851q131 0 244-103z"
				fill="#662d91"
			/>
			<rect x="0" y="0" width="1188" height="1000" fill="rgba(0, 0, 0, 0)" />
		</svg>
	);
}

export default LogoutIcon;
