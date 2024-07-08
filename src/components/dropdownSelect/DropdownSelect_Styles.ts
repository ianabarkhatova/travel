import styled from "styled-components";
import {theme} from "../../styles/Theme";

const SelectContainer = styled.div`
    position: relative;

    &::after {
        content: '▼'; 
        font-size: 14px;
        color: ${theme.colors.lightFont};
        position: absolute;
        right: -26px;
        top: 46%;
        transform: translateY(-50%);
        pointer-events: none; /* Prevents the arrow from interfering with clicks */

        @media screen and (max-width: 880px) {
            right: 0;
        }
    }
`

const DropdownSelect = styled.select`
    appearance: none;
    border: none;
    border-radius: 0;
    
    cursor: pointer;
    
    background-color: transparent;
    color: ${theme.colors.lightFont};
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 20px;
    margin-left: 50px;

    @media screen and (max-width: 880px) {
        margin-left: 0;
    }
    
    &:focus-visible {
        outline: 1px solid rgba(243, 243, 243, 0.6);
        border-radius: 5px;
    }
}
`

const Option = styled.option`
`

export const S = {
    SelectContainer,
    DropdownSelect,
    Option
}







