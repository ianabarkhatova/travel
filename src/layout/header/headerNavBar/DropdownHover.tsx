import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const DropdownHover = (props: {dropdownHoverItems: Array<string>}) => {
    return (
        <StyledDropdownHover>
            <Link href="#">Services</Link>
            <ul>
                {props.dropdownHoverItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="#">{item}</Link>
                        </ListItem>
                        )
                })}
            </ul>
        </StyledDropdownHover>
    );
};

const StyledDropdownHover = styled.li`
   
`

const ListItem = styled.li`
    display: none;
`

const Link = styled.a`
    color: ${theme.colors.lightFont};
     font-family: "Figtree", sans-serif;
     font-weight: 500;
     font-style: normal;
     font-size: 17px;
    // margin-left: 50px;
`



