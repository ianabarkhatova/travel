import {DropdownHover} from "../navBarDesktop/dropdownHover/DropdownHover";
import React from "react";
import {navBarItems} from "../Header";


export const NavBarItems = () => {
    return (
        <ul>
            {navBarItems.map((item, index) => {
                return (
                    <li key={index}>
                        <a href={`#${item.href}`}>{item.title}</a>
                        {/*{index === 1 && <DropdownHover dropdownHoverItems={dropdownHoverItems}/>*/}
                        {/*}*/}
                    </li>
                )
            })}
            <DropdownHover/>
        </ul>
    );
};