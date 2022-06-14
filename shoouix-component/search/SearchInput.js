import React from "react";
import cls from "./search.module.scss";

function SearchInput({ search, setSearch }) {
	const handleChange = (e) => {
		e.preventDefault();
		setSearch(e.target.value);
	};
	return (
		<div style={{ paddingTop: "1rem" }} className={cls.display1200}>
			<input
				className={cls.formControl}
				value={search}
				placeholder="Search Your Joy"
				onChange={handleChange}
				type="text"
				name="search"
			/>
		</div>
	);
}

export default SearchInput;
