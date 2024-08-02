import React, {useState} from 'react';
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

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const onDropdownLinkClick = () => {
        setDropdownOpen(false);
    };

    return (
        <S.DropdownHover
            isDropdownOpen={isDropdownOpen}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}>

            <S.NavLink to={''}
                       smooth={true}
                       activeClass={'active'}
                       spy={true}>Services
            </S.NavLink>
            <ul>
                {dropdownHoverItems.map((item, index) => {
                    return (
                        <S.ListItem key={index}>
                            <S.DropdownMenuLink to={item.href}
                                                smooth={true}
                                                activeClass={'active'}
                                                spy={true}
                                                onClick={onDropdownLinkClick}
                            >
                                {item.title}
                            </S.DropdownMenuLink>
                        </S.ListItem>
                    )
                })}
            </ul>
        </S.DropdownHover>
    );
};

