import React from 'react'
import { Link } from '../../../util/router'

import brandLogo from '../../../images/logo/logo.svg'

import cls from './navBrandLogo.module.scss'



function NavBrandLogo() {
    
    return (
        <Link to = "/">
            {/* <p className={cls.navLogoTxt}>KhushKarrt</p> */}
            <img className={cls.navLogoImg} src={brandLogo} alt="brand logo"/>
        </Link>
    )
}

export default NavBrandLogo
