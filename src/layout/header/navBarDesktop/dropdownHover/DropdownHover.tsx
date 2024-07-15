import React from 'react';
import {S} from "../../navBar/NavBar_Styles"


const dropdownHoverItems = [
    {
        title: "Honeymoon Packages",
        href: "honeymoon-packages"
    },
    {
        title: "Tours Packages",
        href: "tours-packages"
    },
    {
        title: "Musical Events",
        href: "music-events"
    },
    {
        title: "Build Package",
        href: "build-package"
    }
]

export const DropdownHover = () => {
    return (
        <S.DropdownHover>
            <S.NavLink to={''}
                       smooth={true}
                       activeClass={'active'}
                       spy={true}>Services
            </S.NavLink>
            <ul>
                {dropdownHoverItems.map((item, index) => {
                    return (
                        <S.ListItem key={index}>
                            <S.DropdownMenuLink href={`#${item.href}`}>{item.title}</S.DropdownMenuLink>
                        </S.ListItem>
                    )
                })}
            </ul>
        </S.DropdownHover>
    );
};

