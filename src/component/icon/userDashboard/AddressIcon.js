import React from "react";

function AddressIcon({ size }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			width={size ? size : "2rem"}
			height={size ? size : "2rem"}
			viewBox="0 0 512 512"
		>
			<path
				fill="#662d91"
				d="M253.924 127.592a64 64 0 1 0 64 64a64.073 64.073 0 0 0-64-64zm0 96a32 32 0 1 1 32-32a32.037 32.037 0 0 1-32 32z"
			/>
			<path
				fill="#662d91"
				d="M376.906 68.515A173.922 173.922 0 0 0 108.2 286.426l120.907 185.613a29.619 29.619 0 0 0 49.635 0l120.911-185.613a173.921 173.921 0 0 0-22.747-217.911zm-4.065 200.444l-118.916 182.55l-118.917-182.55c-36.4-55.879-28.593-130.659 18.563-177.817a141.92 141.92 0 0 1 200.708 0c47.156 47.158 54.962 121.938 18.562 177.817z"
			/>
			<rect x="0" y="0" width="512" height="512" fill="rgba(0, 0, 0, 0)" />
		</svg>
	);
}

export default AddressIcon;
