import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const DropdownSelect = (props: {dropdownItems: Array<string>}) => {
    return (
        <StyledDropdownSelect>
            {props.dropdownItems.map((item, index) => {
                return <Option key={index} value="">{item}
                </Option>
            })}
        </StyledDropdownSelect>
    );
};


const StyledDropdownSelect = styled.select`
    appearance: none;
    border: none;
    border-radius: 0;
    
    cursor: pointer;
    display: inline-block;
    
    background-color: transparent;
    color: ${theme.colors.lightFont};
    font-family: "Figtree", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 17px;
    line-height: 22px;
    text-align: center;
    margin-left: 50px;
`

const Option = styled.option`
    
`








