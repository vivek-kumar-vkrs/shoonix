import { Link } from "gatsby";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import DoubleRightArrowIcon from "../icon/arrow/DoubleRightArrowIcon";

function SearchResults({ results }) {
	const forGender = results.forGender;
	const cateSuggestions = results.cateSuggestions;
	const genSuggestions = results.genSuggestions;
	const cate = results.cate;

	if (forGender && !cate) {
		return (
			<>
				<LinkCard
					linkto={`/dynamic/products/${forGender}`}
					title={`${forGender} categories`}
				/>
				{cateSuggestions.map((suggestedCategory) => (
					<LinkCard
						key={uuidv4()}
						linkto={`/dynamic/products/${forGender}/${suggestedCategory}`}
						title={`${forGender} ${suggestedCategory}`}
					/>
				))}
			</>
		);
	} else if (!forGender && cate) {
		return (
			<>
				{genSuggestions.map((suggestedGender) => (
					<LinkCard
						key={uuidv4()}
						linkto={`/dynamic/products/${suggestedGender}/${cate}`}
						title={`${suggestedGender} ${cate}`}
					/>
				))}
			</>
		);
	} else if (forGender && cate) {
		return (
			<LinkCard
				linkto={`/dynamic/products/${forGender}/${cate}`}
				title={`${forGender} ${cate}`}
			/>
		);
	} else return null;
}
const style = {
	linkcard: {
		marginBottom: "0.2rem",
		background: "#e0e0e0",
		padding: "0.25rem",
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	resultLink: {
		padding: "0.25rem",
		display: "block",
		color: "#1a1a1a",
		textTransform: "capitalize",
		fontSize: "1.1rem",
		letterSpacing: "0.1rem",
		fontWeight: "600",
	},
};
const LinkCard = ({ linkto, title }) => {
	return (
		<Link style={style.linkcard} to={linkto}>
			<p style={style.resultLink}>{title}</p>
			<DoubleRightArrowIcon />
		</Link>
	);
};

export default SearchResults;
