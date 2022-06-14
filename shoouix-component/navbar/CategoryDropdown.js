import React, { useState } from "react";
import { Link } from "../../util/router";

import cls from "./dropdown.module.scss";

function Dropdown({ header, links }) {
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<div className={cls.dropdown} onClick={showMenu}>
			<p className={cls.header}>{header}</p>

			<div className={showDropdown ? "" : cls.dnone}>
				<div className={cls.dropdownLink}>
					{links.map((link) => (
						<Link
							className={cls.dropdownLink}
							activeClassName="active"
							to={`${link}`}
						>
							{link}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default Dropdown;
