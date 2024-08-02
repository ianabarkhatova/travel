import {DropdownHover} from "../navBarDesktop/dropdownHover/DropdownHover";
import React from "react";
import {navBarItems} from "../Header";
import {S} from './NavBar_Styles'


export const NavBarItems = () => {
    return (
        <ul>
            {navBarItems.map((item, index) => {
                return (
                    <S.ListItem key={index}>
                        <S.NavLink to={item.href}
                                   smooth={true}
                                   activeClass={'active'}
                                   spy={true}>
                            {item.title}</S.NavLink>
                    </S.ListItem>
                )
            })}
            <DropdownHover/>
        </ul>
    );
};