import React, {useState} from 'react';
import {DropdownHover} from "../navBarDesktop/dropdownHover/DropdownHover";
import {S} from "./NavBarMobile_Styles"

const dropdownHoverItems = ["Honeymoon Packages", "Tours Packages", "Musical Events", "Build Package"]

export const NavBarMobile = (props: { navBarItems: Array<string> }) => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {  setmenuIsOpen( !menuIsOpen ) }

    return (
        <S.NavBarMobile>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.UlPopUp isOpen={menuIsOpen} onClick={ () =>{setmenuIsOpen(false)}}>
                <S.Ul>
                    {props.navBarItems.map((item, index) => {
                        return (
                            <S.ListItem key={index}>
                                <S.Link href="#">{item}</S.Link>
                            </S.ListItem>
                        )
                    })}
                    <DropdownHover dropdownHoverItems={dropdownHoverItems}/>
                </S.Ul>
            </S.UlPopUp>
        </S.NavBarMobile>
    );
};

