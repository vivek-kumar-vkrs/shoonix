import React, { useState } from "react"
import MinusIcon from "../icon/MinusIcon"
import PlusIcon from "../icon/PlusIcon"
import cls from "./simpleExpand.module.scss"

function SimpleExpand({ title, children }) {
  const [show, setShow] = useState(0)
  return (
    <div className={cls.simplExpand}>
      <div className={cls.header}>
        <p className={cls.title}>{title}</p>
        <button
          onClick={() => {
            setShow(!show)
          }}
        >
          {show ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>
      <div className={show ? cls.show : cls.hide}>{children}</div>
    </div>
  )
}

export default SimpleExpand
