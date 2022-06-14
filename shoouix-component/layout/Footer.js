import React from "react";
import { contactData } from "../../config/contactData";
import { FlexColM12Row } from "../../components/layout/Flex";
import FacebookIcon from "../icon/social/FacebookIcon";
import TwitterIcon from "../icon/social/TwitterIcon";
import YoutubeIcon from "../icon/social/YoutubeIcon";
import cls from "./footer.module.scss";
export default function Footer({ noFooterContact }) {
	return (
		<section className={cls.footer}>
			<div className={cls.container}>
				<FlexColM12Row>
					{noFooterContact ? (
						""
					) : (
						<div className={cls.contactBlock}>
							<p className={cls.contactBlockTitle}>Contact Us</p>
							<p className={cls.contactBlockText}>
								Address: {contactData.address}
							</p>
							<hr width="100%" />
							<p className={cls.contactBlockText}>
								{" "}
								Email Address: {contactData.email}
							</p>
							<hr width="80%" />
							<p className={cls.contactBlockText}>
								{" "}
								Contact Number: {(contactData.phoneNo1, contactData.phoneNo2)}
							</p>
							<hr width="60%" />
						</div>
					)}

					<div className={cls.connectBlock}>
						<p className={cls.connectBlockTitle}>Connect with us</p>
						<div className={cls.socialButtons}>
							<a className={cls.socialButton} href={contactData.facebookLink}>
								<FacebookIcon />
							</a>
							<a className={cls.socialButton} href={contactData.twitterLink}>
								<TwitterIcon />
							</a>
							<a className={cls.socialButton} href={contactData.youtubeLink}>
								<YoutubeIcon />
							</a>
						</div>
					</div>
				</FlexColM12Row>

				<div className={cls.copyrightBlock}>
					<p className={cls.copyrightText}>
						Copyright&copy; {contactData.companyName} {new Date().getFullYear()}{" "}
					</p>
				</div>
			</div>
		</section>
	);
}
