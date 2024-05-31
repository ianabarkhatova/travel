import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const DropdownSelect = (props: {dropdownItems: Array<string>}) => {
    return (
        <SelectContainer>
            <StyledDropdownSelect>
                {props.dropdownItems.map((item, index) => {
                    return <Option key={index} value="">{item}
                    </Option>
                })}
            </StyledDropdownSelect>
        </SelectContainer>
    );
};

const SelectContainer = styled.div`
    position: relative;

    &::after {
        content: '▼'; /* Unicode character for a down arrow */
        font-size: 14px;
        color: ${theme.colors.lightFont};
        position: absolute;
        right: -14px;
        top: 36%;
        transform: translateY(-50%);
        pointer-events: none; /* Prevents the arrow from interfering with clicks */
    }
`


const StyledDropdownSelect = styled.select`
    appearance: none;
    border: none;
    border-radius: 0;
    
    cursor: pointer;
    //text-align: center;
    
    background-color: transparent;
    color: ${theme.colors.lightFont};
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 20px;
    margin-left: 50px;
    
    &:focus-visible {
        outline: 1px solid rgba(243, 243, 243, 0.6);
        border-radius: 5px;
    }
}
`

const Option = styled.option`
`








