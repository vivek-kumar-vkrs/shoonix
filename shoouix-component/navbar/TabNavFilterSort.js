import React, { useState } from "react";
// import {Link} from '../../util/router'
import { ButtonOutline } from "../button/ButtonChildren";
import Filter from "../FilterSort/Filter";
import FilterIcon from "../icon/FilterIcon";
import SortIcon from "../icon/SortIcon";
import Modal from "../modal/Modal";
import Sort from "../modal/Sort";

import cls from "./tabNavFilterSort.module.scss";

function TabNavFilterSort({
	dispatch,
	products,
	filterData,
	setFilterData,
	onlyForGender,
}) {
	const [showSortModal, setShowSortModal] = useState(0);
	const [showFilter, setShowFilter] = useState(0);
	const [sortDispatchType, setSortDispatchType] = useState(-1);

	const doSorting = () => {
		if (sortDispatchType !== -1) {
			dispatch({ type: sortDispatchType });
		}
		setShowSortModal(false);
	};
	return (
		<>
			<div className={cls.addMarginTop}></div>
			<div className={cls.tabNav}>
				<div className={cls.tabItem}>
					<ButtonOutline
						width100={true}
						onClick={() => setShowFilter(true)}
						text={"Filter"}
						Svg={FilterIcon}
					></ButtonOutline>
				</div>
				<div className={cls.tabItem}>
					<ButtonOutline
						width100={true}
						text={"Sort"}
						Svg={SortIcon}
						onClick={() => setShowSortModal(true)}
					></ButtonOutline>
				</div>
			</div>
			{showSortModal ? (
				<Modal
					modalId={"sort1"}
					show={showSortModal}
					resetShow={() => setShowSortModal(false)}
					title={"Sort By"}
				>
					<Sort
						sortMethod={[
							{ text: "Price Low to High", dispatchType: "price_asc" },
							{ text: "Price High to Low", dispatchType: "price_desc" },
							{ text: "Discount High to Low", dispatchType: "discount_desc" },
						]}
						sortDispatchType={sortDispatchType}
						setSortDispatchType={setSortDispatchType}
						doSorting={doSorting}
					/>
				</Modal>
			) : (
				""
			)}
			{showFilter ? (
				<Filter
					hideFilter={() => setShowFilter(false)}
					dispatch={dispatch}
					products={products}
					filterData={filterData}
					setFilterData={setFilterData}
					onlyForGender={onlyForGender}
				/>
			) : (
				""
			)}
		</>
	);
}

export default TabNavFilterSort;
