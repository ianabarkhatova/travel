import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";


export const NavItemList = (props: {NavItems: Array<string>}) => {
    return (
        <StyledNavItems>
            <NavItemsList>
                {props.NavItems.map((i, index) => {
                    return <NavItem>
                        <NavItemLink href=""
                                     key={index}>{i}
                        </NavItemLink>
                    </NavItem>
                })}
            </NavItemsList>
        </StyledNavItems>
    );
};

const StyledNavItems = styled.nav`
    display: flex;
    flex-direction: column;
`

const NavItemsList = styled.ul`
    list-style: none;
`

const NavItem = styled.li`
    &:not(:first-child) {
        padding-top: 18px;
    }
`

const NavItemLink = styled.a`
    font-family: "Manrope", sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.darkFooterFont};
`



