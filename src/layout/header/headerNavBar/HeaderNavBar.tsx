import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {DropdownHover} from "./DropdownHover";

const dropdownHoverItems = ["Honeymoon Packages", "Tours Packages", "Musical Events", "Build Package"]

export const HeaderNavBar = (props: { navBarItems: Array<string> }) => {
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
        //align-items: center;
        //justify-content: center;
        gap: 50px;
    }
`

const ListItem = styled.li`
    position: relative;

`

const Link = styled.a`
    color: ${theme.colors.lightFont};
    font-family: "Figtree", sans-serif;
    font-weight: 500;
    font-size: 17px;

    &:hover {
        &::before {
            height: 3px;
        }
    }
    
    &::before {
        content: "";
        display: inline-block; 
        
        background-color: ${theme.colors.accent};
        border-radius: 34px;
       
        position: absolute;
        bottom: 0;
        left: 8px;
        right: 8px;
        
    }
    
    


`

