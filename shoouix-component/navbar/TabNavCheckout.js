import React from 'react'
// import {Link} from '../../util/router'
import  {Button, ButtonOutline} from '../button/Button'
import {formatPrice} from '../../util/product/format'
import cls from './tabNavFilterSort.module.scss'
import { navigate } from '../../util/router'


function TabNavCheckout({total}) {

    const checkoutHandler = () =>{
        navigate('/dynamic/pay/checkout')
    }

    return (
        <>
            <div className = {cls.addMarginTop}></div>
            <div className={cls.tabNav}>
                    <div className = {cls.tabItem}>
                        <ButtonOutline
                            width100 = {true}
                            text = {formatPrice(total)}
                        />
                    </div>
                    <div className = {cls.tabItem}>
                        <Button
                            width100 = {true}
                            text = {"Checkout"}
                            onClick = {checkoutHandler}
                        />
                    </div>
            </div>
        </>
    )
}

export default TabNavCheckout
