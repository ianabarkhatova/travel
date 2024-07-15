import React from 'react';
import {S} from "./DropdownHover_Styles"


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
            <S.Link href="#services">Services</S.Link>
            <ul>
                {dropdownHoverItems.map((item, index) => {
                    return (
                        <S.ListItem key={index}>
                            <S.DropdownLink href={`#${item.href}`}>{item.title}</S.DropdownLink>
                        </S.ListItem>
                    )
                })}
            </ul>
        </S.DropdownHover>
    );
};

