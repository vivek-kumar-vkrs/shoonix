import React from "react";
import cls from "./priceSelect.module.scss";

function PriceSelect({ filterData, setFilterData }) {
	function handleMinChange(e) {
		const newMin = e.target.value;
		const currentMax = filterData.priceRange.max;
		if (Number(newMin) < Number(currentMax)) {
			const newFilterData = { ...filterData };
			newFilterData.priceRange.min = e.target.value;
			setFilterData(newFilterData);
		}
	}
	function handleMaxChange(e) {
		const newMax = e.target.value;
		const currentMin = filterData.priceRange.min;
		if (Number(newMax) > Number(currentMin)) {
			const newFilterData = { ...filterData };
			newFilterData.priceRange.max = e.target.value;
			setFilterData(newFilterData);
		}
	}

	return (
		<div className={cls.priceSelect}>
			<div className={cls.formGroup}>
				<label className={cls.label} htmlFor={"priceRangeTextMin"}>
					Minimum
				</label>
				<input
					className={cls.formControl}
					onChange={handleMinChange}
					value={filterData.priceRange.min}
					type="text"
					id="priceRangeTextMin"
					name="priceRangeMinText"
					min={500}
					max={10000}
					step={100}
				/>
				<input
					className={cls.formControlSlider}
					onChange={handleMinChange}
					value={filterData.priceRange.min}
					type="range"
					id="priceRangeSliderMin"
					name="priceRangeMinSlider"
					min={500}
					max={10000}
					step={1000}
				/>
			</div>
			<div className={cls.formGroup}>
				<label className={cls.label} htmlFor={"priceRangeTextMax"}>
					Maximum
				</label>

				<input
					className={cls.formControl}
					onChange={handleMaxChange}
					value={filterData.priceRange.max}
					type="text"
					id="priceRangeTextMax"
					name="priceRangeMaxText"
					min={500}
					max={10000}
					step={100}
				/>
				<input
					className={cls.formControlSlider}
					onChange={handleMaxChange}
					value={filterData.priceRange.max}
					type="range"
					id="priceRangeSliderMAx"
					name="priceRangeMaxSlider"
					min={500}
					max={10000}
					step={1000}
				/>
			</div>
		</div>
	);
}

export default PriceSelect;
