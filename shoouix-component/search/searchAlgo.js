import { categories, forGenderData } from "./searchDataBase";

const searchAlgo = (searchString) => {
	let cate = null;
	let forGender = null;
	const tags = searchString.split(" ");

	for (let tag of tags) {
		if (forGender && cate) {
			return { forGender, cate };
		} else if (!forGender && tag in forGenderData) {
			forGender = forGenderData[tag];
		} else if (forGender) {
			if (tag in categories[forGender]) {
				cate = categories[forGender][tag];
			} else if (tag in categories["common"]) {
				cate = categories["common"][tag];
			}
		} else if (!cate) {
			if (tag in categories["common"]) {
				cate = categories["common"][tag];
			} else if (tag in categories["men"]) {
				cate = categories["men"][tag];
			} else if (tag in categories["women"]) {
				cate = categories["women"][tag];
			}
		}
	}

	if (forGender === "men" && !cate) {
		return {
			forGender: "men",
			cateSuggestions: ["tshirts", "jeans", "jackets"],
		};
	} else if (forGender === "women" && !cate) {
		return {
			forGender: "women",
			cateSuggestions: ["tshirts", "kurti", "shorts", "heels", "jackets"],
		};
	}
	if (cate && !forGender) {
		return {
			cate,
			genSuggestions: categories.common[cate]
				? ["men", "women"]
				: categories.men[cate]
				? ["men"]
				: ["women"],
		};
	} else {
		return { cate, forGender };
	}
};
export { searchAlgo };
