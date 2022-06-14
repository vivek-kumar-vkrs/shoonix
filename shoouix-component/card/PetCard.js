import React from 'react'
import cls from './card.module.scss'

function PetCard({img, content, title, circleImg}) {
    return (
        <div 
        className={
            cls.card
            }>
            <div className={cls.wrapperFlex}>
                <div className={cls.imgBlock} >
                    <img 
                        className={circleImg ? cls.circleImg : cls.img}
                        src={img}
                        alt=""
                    />
                </div>
                <p className={cls.title}>{title}</p>
                <p className={cls.textContent}>{content}</p>
            </div>
        </div>
    )
}

export default PetCard
