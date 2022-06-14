import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext"
import cls from './select.module.scss'

function Select({ prodId, defaultValue, stock }) {
  const [size, setSize] = useState(defaultValue)
  const cartCont = useContext(CartContext)

  const sizeArray = ["S", "M", "L", "XL", "XXL"];
  const handleChange = e =>{
    setSize(e.target.value)
    cartCont.updateProductSize(prodId, e.target.value)
  }

	return (
		<>
			<label htmlFor="sizeSelect">Size:   
			<select name="size" id="sizeSelect" value={size} onChange={handleChange}>
				<option value={defaultValue}>{defaultValue}</option>
				{sizeArray.map((item) => {
					if (item !== defaultValue && stock[item]>0) {
						return (
							<option className={cls.selectOption} key={item} value={item}>
								{item}
							</option>
						);
					}else{
						return null
					}
				})}
			</select>
      </label>
		</>
	);
}

export default Select;
