import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {DropdownHover} from "./DropdownHover";

const dropdownHoverItems = ["Honeymoon Packages", "Tours Packages", "Musical Events", "Build Package"]

export const NavBar = (props: { navBarItems: Array<string> }) => {
    return (
        <StyleNavBar>
            <StyledUl>
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
            </StyledUl>
        </StyleNavBar>
    );
};

const StyledUl = styled.ul`
    display: flex;
    gap: calc(2vw + 30px);

    @media ${theme.media.medium} {
        gap: calc(1vw + 10px);
    }

    @media ${theme.media.small} {
        display: none;
    }
`

const StyleNavBar = styled.nav`
    margin: 0 calc(5% + 50px);

    @media ${theme.media.large} {
        margin: 0 calc(4% + 40px); 
    }

    @media ${theme.media.medium} {
        margin: 0 calc(3% + 30px); 
    }

    @media ${theme.media.small} {
        margin: 0 calc(2% + 20px); 
    }
`

const ListItem = styled.li`
    position: relative;
`

const Link = styled.a`
    color: ${theme.colors.lightFont};
    font-family: "Figtree", sans-serif;
    font-weight: 500;
    font-size: 16px;

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
        bottom: -2px;
        left: 8px;
        right: 8px;
    }
`

