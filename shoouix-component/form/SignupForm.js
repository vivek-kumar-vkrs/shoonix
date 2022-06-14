import React, { useState } from "react";

import { Button } from "../button/Button";

import cls from "./form.module.scss";

export default function SignupForm({ handleSignup }) {
	const [form, setForm] = useState({
		name: "",
		number: "",
		email: "",
		password: "",
	});

	function handleChange(e) {
		const keyName = e.target.name;
		let newForm = { ...form };
		newForm[keyName] = e.target.value;
		setForm(newForm);
	}

	function handleSubmit(e) {
		e.preventDefault();
		handleSignup(form);
		setForm({ name: "", number: "", email: "", password: "" });
	}

	return (
		<>
			<div className={cls.wrapperFlex}>
				<form className={cls.loginForm}>
					<p className={cls.title}>Signup</p>
					<div className={cls.formGroup}>
						<label className={cls.label}>
							Name
							<input
								className={cls.formControl}
								value={form.name}
								onChange={handleChange}
								type="text"
								name="name"
								placeholder="Enter Name"
							/>
						</label>
					</div>
					<div className={cls.formGroup}>
						<label className={cls.label}>
							Number
							<input
								className={cls.formControl}
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
							Email address
							<input
								className={cls.formControl}
								value={form.email}
								onChange={handleChange}
								type="email"
								name="email"
								placeholder="Enter email"
							/>
						</label>
					</div>
					<div className={cls.formGroup}>
						<label className={cls.label}>
							Password
							<input
								className={cls.formControl}
								value={form.password}
								onChange={handleChange}
								type="password"
								name="password"
								placeholder="Enter password"
							/>
						</label>
					</div>
					<Button onClick={handleSubmit} text="Signup" />
				</form>
			</div>
		</>
	);
}
