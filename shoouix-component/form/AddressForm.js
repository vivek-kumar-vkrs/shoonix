import React, { useState } from "react";
import { Button } from "../button/Button";

import cls from "./addressForm.module.scss";
import SelectSingleCheck from "./SelectSingleCheck";
import SelectSingleItem from "./SelectSingleItem";

export default function AddressForm({ address, handler, handlerBtnText }) {
	const [form, setForm] = useState(
		address
			? address
			: {
					type: "",
					name: "",
					number: "",
					houseNo: "",
					locality: "",
					landmark: "",
					city: "",
					pincode: "",
					state: "",
			  }
	);

	const setCheck = (checkValue) => {
		let newForm = { ...form };
		newForm["type"] = checkValue;
		setForm(newForm);
	};

	function handleChange(e) {
		const keyName = e.target.name;
		let newForm = { ...form };
		newForm[keyName] = e.target.value;
		setForm(newForm);
	}

	function handleSubmit(e) {
		e.preventDefault();
		handler(form);
		setForm({
			id: "",
			type: "",
			name: "",
			number: "",
			houseNo: "",
			locality: "",
			landmark: "",
			city: "",
			pincode: "",
			state: "",
		});
	}

	return (
		<>
			<div className={cls.wrapperFlexP2}>
				<form className={cls.form}>
					<SelectSingleItem
						checkData={["Home", "Work"]}
						check={form.type}
						setCheck={setCheck}
					/>
					<div className={cls.formGroup}>
						<label className={cls.label}>
							Name
							<input
								className={cls.formControl2}
								value={form.name}
								onChange={handleChange}
								type="text"
								name="name"
								placeholder="Enter  Name"
							/>
						</label>
					</div>

					<div className={cls.formGroup}>
						<label className={cls.label}>
							Number
							<input
								className={cls.formControl2}
								value={form.number}
								onChange={handleChange}
								type="text"
								name="number"
								placeholder="Enter contact number"
							/>
						</label>
					</div>
					<div className={cls.formGroup}>
						<label className={cls.label}>
							Building/House No, Street
							<input
								className={cls.formControl2}
								value={form.houseNo}
								onChange={handleChange}
								type="text"
								name="houseNo"
								placeholder="Enter  Building/House No, Street"
							/>
						</label>
					</div>
					<div className={cls.formGroup}>
						<label className={cls.label}>
							Locality
							<input
								className={cls.formControl2}
								value={form.locality}
								onChange={handleChange}
								type="text"
								name="locality"
								placeholder="Enter Locality"
							/>
						</label>
					</div>
					<div className={cls.formGroup}>
						<label className={cls.label}>
							Landmark
							<input
								className={cls.formControl2}
								value={form.landmark}
								onChange={handleChange}
								type="text"
								name="landmark"
								placeholder="Enter Landmark"
							/>
						</label>
					</div>
					<div className={cls.formGroup}>
						<label className={cls.label}>
							City/District
							<input
								className={cls.formControl2}
								value={form.city}
								onChange={handleChange}
								type="text"
								name="city"
								placeholder="Enter City"
							/>
						</label>
					</div>
					<div className={cls.formGroup}>
						<label className={cls.label}>
							Pincode
							<input
								className={cls.formControl2}
								value={form.pincode}
								onChange={handleChange}
								type="text"
								name="pincode"
								placeholder="Enter Pincode"
							/>
						</label>
					</div>
					<div className={cls.formGroup}>
						<label className={cls.label}>
							State
							<input
								className={cls.formControl2}
								value={form.state}
								onChange={handleChange}
								type="text"
								name="state"
								placeholder="Enter State"
							/>
						</label>
					</div>
					<Button onClick={handleSubmit} text={handlerBtnText} />
				</form>
			</div>
		</>
	);
}
