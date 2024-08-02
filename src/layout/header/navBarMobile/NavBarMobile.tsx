import React, {useState} from 'react';
import {navBarItemPropsType} from "../Header"
import {S} from '../navBar/NavBar_Styles'
import {NavBarItems} from "../navBar/NavBar";


export const NavBarMobile = (props: { navBarItems: navBarItemPropsType[] }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}

    return (
        <S.NavBarMobile>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.UlPopUp isOpen={menuIsOpen} onClick={ () =>{setMenuIsOpen(false)}}>
                <NavBarItems/>
            </S.UlPopUp>
        </S.NavBarMobile>
    );
};

