import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {DropdownHover} from "../DropdownHover";

const dropdownHoverItems = ["Honeymoon Packages", "Tours Packages", "Musical Events", "Build Package"]

export const HeaderNavBar = (props: {navBarItems: Array<string>}) => {
    return (
        <StyleHeaderNavBar>
            <ul>
                {props.navBarItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="#">{item}</Link>
                            {/*{index === 1 && <DropdownHover dropdownHoverItems={dropdownHoverItems}/>*/}
                            {/*}*/}
                        </ListItem>
                    )
                })}
                <DropdownHover dropdownHoverItems={dropdownHoverItems}/>
            </ul>
        </StyleHeaderNavBar>
    );
};

const StyleHeaderNavBar = styled.nav`
    margin: 0 208px 0 308px;
    
    ul {
        display: flex;
        padding: 18px 0;
        gap: 50px;
    }
`

const ListItem = styled.li`
    
`

const Link = styled.a`
        color: ${theme.colors.lightFont};
        font-family: "Figtree", sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 17px;
`

