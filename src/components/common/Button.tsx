import styled from "styled-components";
import {CSSProperties} from "react";

type ButtonPropsType = {
    style?: CSSProperties & object
}


export const Button = styled.button<ButtonPropsType>`
    background-color: rgb(223, 105, 81);
    color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 20px 35px 0 rgba(223, 105, 81, 0.15);
    width: 176px;
    height: 56px;
`

