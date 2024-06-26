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
                            <DropdownLink href="#">{item}</DropdownLink>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledDropdownHover>
    );
};

const StyledDropdownHover = styled.li`
    position: relative;
    
    ul {
        display: none;
        position: absolute;
        top: 100%; 
        left: -16px;

        align-items: flex-start;
        flex-direction: column;
        padding: 20px 16px;
        gap: 10px;
        min-width: 228px;

        background: rgba(217, 217, 217, 0.34);
        border-radius: 16px;
        backdrop-filter: blur(100px);
    }

    &:hover ul {
        display: flex;

        @media ${theme.media.small} {
            display: none;
        }
    }
`

const DropdownLink = styled.a`
    color: ${theme.colors.lightFont};
    font-size: 14px;
    font-weight: 300;
    text-align: left;

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
        bottom: -4px;
        left: 8px;
        right: 8px;
`

const ListItem = styled.li`
    position: relative;
`

const Link = styled.a`
    color: ${theme.colors.lightFont};
    font-family: "Figtree", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 16px;

    position: relative;

    &:hover {
        &::before {
            height: 3px;

            @media ${theme.media.small} {
                display: none;
            }
        }
    }

    &::before {
        content: "";
        display: inline-block;
        background-color: ${theme.colors.accent};
        border-radius: 34px;

        position: absolute;
        bottom: -3px;
        left: 8px;
        right: 8px;
`



