import React, { useState } from "react";
import SelectSizeHandler from "../../handler/SelectSizeHandler";
import { Button } from "../button/Button";
import SelectSingleCheck from "./SelectSingleCheck";

function ReplacementForm({ prodId, handleReplacement }) {
	const [selectedSize, setSelectedSize] = useState(0);
	const [form, setForm] = useState(-1);
	const checkData = [
		"Product is Defective",
		"Quality is not upto expectation",
		"Color is not same",
		"Other reasons",
	];
	const handleSubmit = (e) => {
		e.preventDefault();
		if (selectedSize) {
			handleReplacement(form, selectedSize);
		} else {
			alert("Select ProductSize");
		}
	};
	return (
		<div>
			<SelectSingleCheck
				check={form}
				setCheck={setForm}
				checkData={checkData}
			/>
			<SelectSizeHandler
				id={prodId}
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
			/>
			<Button text={"Submit"} onClick={handleSubmit} />
		</div>
	);
}

export default ReplacementForm;
