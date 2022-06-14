import React, { useState } from "react";
import {
	Button,
	ButtonOutline,
	ButtonTransparent,
} from "../button/ButtonChildren";
import Close from "../icon/Close";
import DiscountRange from "./DiscountRange";
import GenderSelect from "./GenderSelect";
import cls from "./filter.module.scss";
import SizeSelect from "./SizeSelect";
import PriceSelect from "./PriceSelect";
import ClearIcon from "../icon/ClearIcon";

function Filter({
	products,
	filterData,
	setFilterData,
	hideFilter,
	dispatch,
	onlyForGender,
}) {
	const [filter, setFilter] = useState("price");

	const handleFilteringProducts = () => {
		dispatch({ type: "filter", products, filterData });
		hideFilter();
	};

	const handleClearFiltering = () => {
		dispatch({
			type: "filter",
			products,
			filterData: {
				priceRange: { min: 500, max: 10000 },
				discountRange: 0,
				gender: 0,
				size: {},
			},
		});
		hideFilter();
	};

	return (
		<div className={cls.filter}>
			<div className={cls.headerBlock}>
				<p className={cls.title}>Filter Options</p>
				<Close clickHandler={hideFilter} />
			</div>
			<div className={cls.contentBlock}>
				<div className={cls.filterKeyBlock}>
					<div className={cls.filterKey}>
						<ButtonTransparent onClick={() => setFilter("price")}>
							<p className={cls.filterKeyText}>Price Range</p>
						</ButtonTransparent>
					</div>
					<div className={cls.filterKey}>
						<ButtonTransparent onClick={() => setFilter("discount")}>
							<p className={cls.filterKeyText}>Discount Range</p>
						</ButtonTransparent>
					</div>
					{!onlyForGender ? (
						<div className={cls.filterKey}>
							<ButtonTransparent onClick={() => setFilter("gender")}>
								<p className={cls.filterKeyText}>Gender</p>
							</ButtonTransparent>
						</div>
					) : (
						""
					)}
					<div className={cls.filterKey}>
						<ButtonTransparent onClick={() => setFilter("size")}>
							<p className={cls.filterKeyText}>Size</p>
						</ButtonTransparent>
					</div>
				</div>
				<div className={cls.filterValueBlock}>
					{filter === "price" ? (
						<PriceSelect
							filterData={filterData}
							setFilterData={setFilterData}
						/>
					) : (
						""
					)}
					{filter === "discount" ? (
						<DiscountRange
							filterData={filterData}
							setFilterData={setFilterData}
						/>
					) : (
						""
					)}
					{filter === "gender" && !onlyForGender ? (
						<GenderSelect
							filterData={filterData}
							setFilterData={setFilterData}
						/>
					) : (
						""
					)}
					{filter === "size" ? (
						<SizeSelect filterData={filterData} setFilterData={setFilterData} />
					) : (
						""
					)}
				</div>
			</div>
			<div className={cls.functionBlock}>
				<ButtonOutline
					text={"clear"}
					Svg={ClearIcon}
					onClick={handleClearFiltering}
				></ButtonOutline>
				<Button onClick={handleFilteringProducts}>
					<p>Done</p>
				</Button>
			</div>
		</div>
	);
}

export default Filter;
