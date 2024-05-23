import {CSSProperties} from 'react';
import styled from "styled-components";

type ImagePropsType = {
    imgSource?: string,
    imgAlt?: string,
    imgWidth?: string
    imgHeight?: string
    imgStyle?: CSSProperties & object
}

export const Image = styled.img<ImagePropsType>`
    width: ${props => props.imgWidth || "72"};
    height: ${props => props.imgHeight || "65"};
`


