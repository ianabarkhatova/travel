import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";

type ButtonPropsType = {
    big?: boolean
    small?: boolean
    smaller?: boolean
}


export const Button = styled.button<ButtonPropsType>`
    background-color: ${theme.colors.accent};
    color: ${theme.colors.lightFont};
    border-radius: 10px;
    box-shadow: 0 20px 35px 0 rgba(223, 105, 81, 0.15);

    ${props => props.small && css<ButtonPropsType>`
        font-family: "Figtree", sans-serif;
        font-weight: 500;
        font-style: normal;
        font-size: 17px;
        width: 152px;
        height: 58px;
    `}

    ${props => props.big && css<ButtonPropsType>`
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-style: normal;
        font-size: 16px;
        width: 176px;
        height: 56px;
        text-align: left;
        margin-top: 30px;
    `}

    ${props => props.smaller && css<ButtonPropsType>`
        font-family: "Manrope", sans-serif;
        font-optical-sizing: auto;
        font-weight: 500;
        font-style: normal;
        font-size: 16px;
        width: 148px;
        height: 52px;
    `}
    
    `


