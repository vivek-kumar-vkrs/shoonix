import React from 'react'
import cls from './empty.module.scss'

function Empty({text}) {
    return (
        <div>
            <p className = {cls.text} >{text}</p>
        </div>
    )
}

export default Empty
