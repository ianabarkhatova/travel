import React from 'react';
import {S} from "../navBar/NavBar_Styles"
import {navBarItemPropsType} from "../Header"
import {NavBarItems} from "../navBar/NavBar";


export const NavBarDesktop = (props: { navBarItems: navBarItemPropsType[] }) => {
    return (
        <S.NavBarDesktop>
            <NavBarItems/>
        </S.NavBarDesktop>
    );
};

