import React, { useState } from "react";
import { Button } from "../button/Button";
import SelectSingleCheck from "./SelectSingleCheck";

function ReturnForm({ handleRefund }) {
	const [form, setForm] = useState(-1);
	const checkData = [
		"Product is Defective",
		"Quality is not upto expectation",
		"Color is not same.",
		"Other reasons",
	];
	const handleSubmit = (e) => {
		e.preventDefault();
		handleRefund(form);
	};
	return (
		<div>
			<SelectSingleCheck
				check={form}
				setCheck={setForm}
				checkData={checkData}
			/>

			<Button text={"Refund"} onClick={handleSubmit} />
		</div>
	);
}

export default ReturnForm;
