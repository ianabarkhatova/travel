import React from 'react';
import styled from "styled-components";

type DropdownPropsType = {
    dropdownDataId: string
    optionValue: string
    optionValue1?: string
    optionValue2?: string
    optionValue3?: string
    optionValue4?: string
}

export const Dropdown = (props: DropdownPropsType) => {
    return (
        <StyledDropdown id={props.dropdownDataId}>
            <option value="">{props.optionValue}</option>
            <option value="option1">{props.optionValue1}</option>
            <option value="option2">{props.optionValue2}</option>
            <option value="option3">{props.optionValue3}</option>
            <option value="option4">{props.optionValue4}</option>
        </StyledDropdown>
    );
};

const StyledDropdown = styled.select`
`








