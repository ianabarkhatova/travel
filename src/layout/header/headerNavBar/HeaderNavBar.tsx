import React from 'react';
import styled from "styled-components";
import {DropdownSelect} from "../../../components/dropdownSelect/DropdownSelect";
import {theme} from "../../../styles/Theme";

const dropdownServicesItems = ["Services", "Honeymoon Packages", "Tours Packages", "Musical Events", "Build Package"]

export const HeaderNavBar = (props: {navBarItems: Array<string>}) => {
    return (
        <StyleHeaderNavBar>
            <ul>
                {props.navBarItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="#">{item}</Link>
                            {/*{index === 1 && <Dropdown dropdownItems={dropdownServicesItems}/>*/}
                            {/*}*/}
                        </ListItem>
                                )
                        })}
            </ul>
        </StyleHeaderNavBar>
    );
};

const StyleHeaderNavBar = styled.nav`
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
        line-height: 22px;
        text-align: left;
`

