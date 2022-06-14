import React from "react"
import { setProductSize } from "../../../util/product/storage"
import SelectSizeButton from "../../button/product/SelectSizeButton"
import cls from "./selectSizes.module.scss"

function SelectSizes({selectedSize, setSelectedSize, stock, prodId, noTitle }) {
  const selectSize = (stock, size, prodId) => {
    if (stock > 0) {
      setSelectedSize(size)
      setProductSize(prodId, size)
    }
  }
  return (
    <div className={cls.selectSizes}>
      <div className={cls.titleBlock}>
        {noTitle ? "" :<p className={cls.title}>Select Size</p>}
        <ul className={cls.sizes}>
          {stock.map(item => (
            <li className={cls.sizeStockBlock} key={item.size}>
              <SelectSizeButton
                stock={item.stock}
                selected={item.size === selectedSize ? true : false}
                onClick={() => selectSize(item.stock, item.size, prodId)}
              >
                <p className={item.stock ? cls.size : cls.sizeDisabled}>
                  {item?.size}
                </p>
              </SelectSizeButton>
              <p className={cls.stock}>
                {item.stock < 10 && item.stock > 0 ? item.stock + " left" : " "}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SelectSizes
