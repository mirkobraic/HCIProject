import React, { useState } from "react"
import { Link } from "gatsby"

import { slide as Menu } from "react-burger-menu"
import OutsideClickHandler from 'react-outside-click-handler'
import { navs as navigationTabs } from '../../../constants/const'
import Cart from '../CartIcon'

import burgerStyles from "./burgerMenuStyle.css"
import styles from './style.module.css'

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleStateChange = ({ isOpen }) => {
        setIsOpen(isOpen);
    }

    const closeMenu = () => {
        setIsOpen(false);
    }

	return (
		<OutsideClickHandler onOutsideClick={() => closeMenu()}>
            <Menu isOpen={isOpen} onStateChange={(menuState) => handleStateChange(menuState)} right>
                {navigationTabs.map(({ tab, to }) => (
                    <Link onClick={() => {closeMenu()}} to={to} key={tab}>
                        <div>{tab.toUpperCase()}</div>
                    </Link>
                ))}
				<Link to={'/cart'}>
					<div className={styles.cartBurger}>
            			<Cart/>
					</div>
        		</Link>
            </Menu>
        </OutsideClickHandler>
	)
}

export default BurgerMenu
