import { Link } from "gatsby";
import React, { useState } from "react";

import { Button } from "../button/Button";

import cls from "./loginForm.module.scss";

export default function LoginForm({ signupCompleted, handleLogIn }) {
	const [form, setForm] = useState({ email: "", password: "" });

	function handleChange(e) {
		const keyName = e.target.name;
		let newForm = { ...form };
		newForm[keyName] = e.target.value;
		setForm(newForm);
	}

	function handleSubmit(e) {
		e.preventDefault();
		handleLogIn(form);
		setForm({ email: "", password: "" });
	}

	return (
		<>
			<div className={cls.wrapperFlex}>
				<form className={cls.loginForm}>
					<div className={cls.titleBlock}>
						{signupCompleted ? (
							<p className={cls.title}>Signup Completed</p>
						) : (
							<>
								<p className={cls.title}>Login</p>
								<hr />
								<Link to="/dynamic/auth/signup">
									<p className={cls.title}>Signup</p>
								</Link>
							</>
						)}
					</div>
					<div className={cls.formGroup}>
						<label className={cls.label}>
							{" "}
							email
							<input
								className={cls.formControl}
								value={form.email}
								onChange={handleChange}
								type="email"
								name="email"
								placeholder="Enter username not email"
							/>
						</label>
					</div>
					<div className={cls.formGroup}>
						<label className={cls.label}>
							{" "}
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
					<Button
						// type={"submit"}
						onClick={handleSubmit}
						text="Login"
					/>
				</form>
			</div>
		</>
	);
}
