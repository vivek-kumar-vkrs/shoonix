import React, { useState } from "react";
import { Button } from "../button/Button";

import cls from "./addressForm.module.scss";

export default function ProfileForm({ btnText, userProfile, updateProfile, closeModal }) {
	const [form, setForm] = useState(userProfile);

	function handleChange(e) {
		const keyName = e.target.name;
		let newForm = { ...form };
		newForm[keyName] = e.target.value;
		setForm(newForm);
	}

	function handleSubmit(e) {
		e.preventDefault();
		updateProfile(form)
		setForm({
			name: "",
			number: "",
			email: "",
		});
		closeModal()
	}

	return (
		<>
			<div className={cls.wrapperFlexP2}>
				<form className={cls.form}>
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
								type="number"
								name="number"
								placeholder="Enter contact number"
							/>
						</label>
					</div>
					<div className={cls.formGroup}>
						<label className={cls.label}>
							Email
							<input
								className={cls.formControl2}
								value={form.email}
								onChange={handleChange}
								type="email"
								name="email"
								placeholder="Enter email"
							/>
						</label>
					</div>
					<Button onClick={handleSubmit} text={btnText} />
				</form>
			</div>
		</>
	);
}
