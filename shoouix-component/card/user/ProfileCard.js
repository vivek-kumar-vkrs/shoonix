import React from "react";
import { ButtonTransparentShadow } from "../../button/ButtonChildren";
import cls from "./profileCard.module.scss";

function ProfileCard({ userProfile, editProfile }) {
	return (
		<div className={cls.card}>
			<p className={cls.cardTitle}>{"Personal Details"}</p>
			<div className={cls.textBlock}>
				<p className={cls.textKey}>name: </p>
				<p className={cls.textValue}>{userProfile.name}</p>
			</div>
			<div className={cls.textBlock}>
				<p className={cls.textKey}>number: </p>
				<p className={cls.textValue}>{userProfile.number}</p>
			</div>
			<div className={cls.textBlock}>
				<p className={cls.textKey}>email: </p>
				<p className={cls.textValue}>{userProfile.email}</p>
			</div>

			<div className={cls.functionBlock}>
				<ButtonTransparentShadow
					width100={true}
					className={cls.wishlistBlock}
					onClick={editProfile}
				>
					Edit Profile
				</ButtonTransparentShadow>
			</div>
		</div>
	);
}

export default ProfileCard;
