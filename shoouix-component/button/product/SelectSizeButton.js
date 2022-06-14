import React from "react"
import cls from "./selectSizeButton.module.scss"
function SelectSizeButton({ children, size, stock, selected, onClick }) {
  return (
    <button
      style={{ height: size ? size : "3rem", width: size ? size : "3rem" }}
      className={
        stock
          ? selected
            ? cls.selected + " " + cls.btnCircle
            : cls.btnCircle
          : cls.btnCircleDisabled
      }
      selected={selected}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default SelectSizeButton
