import React from 'react'
import {Link} from '../../util/router'

import cls from './card.module.scss'

function Card(
    {   
        img,
        imgLink, 
        title, 
        content, 
        extraContent, 
        circleImg,
        linkTo,
        flexWidth,
        margin
    }) {
    if (linkTo){
        return (
            <div 
            className={ margin ?
                (flexWidth ? cls.card + " " + cls.margin + " " + cls.flexWidth :
                cls.card + " " + cls.margin) :
                cls.card
                }>
                <Link to = {linkTo}>
                    <div className={cls.wrapperFlex}>
                        <div className={cls.imgBlock} >
                            <img 
                                className={circleImg ? cls.circleImg : cls.img}
                                src = {imgLink ? imgLink : img }
                                alt=""
                            />
                        </div>
                        <p className={cls.title}>{title}</p>
                        <p className={cls.textContent}>{content}</p>
                        
                        {extraContent ? 
                            extraContent.map(xContent => (
                            <p className={cls.textContent}>{xContent}</p>
                            )) : 
                        ""}
                    </div>
                </Link>
            </div>
        )

    }
    else {
        return (
            <div 
            className={ margin ?
                (flexWidth ? cls.card + " " + cls.margin + " " + cls.flexWidth :
                cls.card + " " + cls.margin) :
                cls.card
                }>
                    <div className={cls.wrapperFlex}>
                        <div className={cls.imgBlock} >
                            <img 
                                className={circleImg ? cls.circleImg : cls.img}
                                src = {imgLink ? imgLink : img }
                                alt=""
                            />
                        </div>
                        <p className={cls.title}>{title ? title : "No title"}</p>
                        <p className={cls.textContent}>{content ? content : "No Content"}</p>
                        
                        {extraContent ? 
                            extraContent.map(xContent => (
                            <p className={cls.textContent}>{xContent}</p>
                            )) : 
                        ""}
                    </div>
            </div>
        )
    }
}

export default Card


// REquired Props:-
// 1. img
// 2. title
// 3. content

// Change properties:-
// 1. circleImg - makes image circular