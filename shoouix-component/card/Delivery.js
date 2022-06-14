import React, { useState } from "react";
import { deliveryDatabase } from "../../config/deliverData";
import SuccessIcon from "../icon/SuccessIcon";
import cls from "./delivery.module.scss";
function Delivery() {
	const [form, setForm] = useState("");
	const [staus, setStatus] = useState(-1);

	function handleChange(e) {
		// e.preventDefaut();
		if (e.target.value.split(0, 7) in deliveryDatabase) {
			setStatus(true);
		} else {
			setStatus(-1);
		}
		if (e.target.value.length < 7) {
			setForm(e.target.value);
		}
	}

	const checkDelivery = () => {
		if (form in deliveryDatabase) {
			setStatus(true);
		} else {
			setStatus(false);
		}
	};

	return (
		<div className={cls.delivery}>
			<div className={cls.formGroup}>
				<label className={cls.label}>
					{"delivery services"}
					<input
						className={cls.formControl}
						value={form}
						onChange={handleChange}
						type="text"
						name="delivery"
						placeholder="Check delivery"
					/>
					{staus === -1 ? (
						<button
							onClick={checkDelivery}
							style={{ color: "black" }}
							className={cls.check}
						>
							Check
						</button>
					) : staus ? (
						<button className={cls.success}>
							<SuccessIcon size={"2rem"} />
						</button>
					) : (
						<button className={cls.fail}>fail</button>
					)}
				</label>
			</div>
			<p className={cls.textInfo}>Free delivery on order above 999</p>
			<p className={cls.textInfo}>Easy 30 Day returns</p>
			<p className={cls.textInfo}>Delivery within 3-5 days</p>
		</div>
	);
}

export default Delivery;
