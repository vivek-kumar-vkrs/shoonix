import React, { useState } from "react";
import { Link } from "gatsby";
import SearchIcon from "../../icon/SearchIcon";
import SearchInput from "../../search/SearchInput";
import SearchResults from "../../search/SearchResults";
import cls from "./NavSearch.module.scss";
import { searchAlgo } from "../../search/searchAlgo";

function NavSearch() {
	const [search, setSearch] = useState("");
	let results = searchAlgo(search);

	return (
		<div className={cls.navSearch}>
			<div className={cls.displayNone1200}>
				<Link to="/dynamic/search">
					<SearchIcon />
				</Link>
			</div>
			<div style={{ position: "relative" }} className={cls.display1200}>
				<SearchInput search={search} setSearch={setSearch} />
				<div
					style={{
						marginTop: "4rem",
						padding: "0.5rem",
						position: "absolute",
						top: "0",
						backgroundColor: "#f2f2f2",
						// height: "300px",
						// width: "300px",
					}}
				>
					<SearchResults results={results} />
				</div>
			</div>
		</div>
	);
}

export default NavSearch;
