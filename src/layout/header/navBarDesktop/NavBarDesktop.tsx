import React from 'react';
import {DropdownHover} from "./dropdownHover/DropdownHover";
import {S} from "./NavBarDesktop_Styles"

const dropdownHoverItems = ["Honeymoon Packages", "Tours Packages", "Musical Events", "Build Package"]

export const NavBarDesktop = (props: { navBarItems: Array<string> }) => {
    return (
        <S.NavBar>
            <S.Ul>
                {props.navBarItems.map((item, index) => {
                    return (
                        <S.ListItem key={index}>
                            <S.Link href="#">{item}</S.Link>
                            {/*{index === 1 && <DropdownHover dropdownHoverItems={dropdownHoverItems}/>*/}
                            {/*}*/}
                        </S.ListItem>
                    )
                })}
                <DropdownHover dropdownHoverItems={dropdownHoverItems}/>
            </S.Ul>
        </S.NavBar>
    );
};

