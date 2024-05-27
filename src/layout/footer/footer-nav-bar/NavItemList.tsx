import React from 'react';
import styled from "styled-components";

type NavItemListPropsType = {
    itemName: string
    // data: object
}

export const NavItemList = (props: NavItemListPropsType) => {
    return (
        <StyledNavItemList >
            <ul>
                <li>
                    <a href="">{props.itemName}</a>
                </li>
            </ul>
        </StyledNavItemList>
    );
};

const StyledNavItemList = styled.nav`
    ul {
        list-style: none;
    }
`



