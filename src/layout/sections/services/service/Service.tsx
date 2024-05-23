import React, {CSSProperties} from 'react';
import styled from "styled-components";
import {Image} from "../../../../components/image/Image";

type ServicePropsType = {
    imgSource: string,
    imgAlt: string,
    imgWidth?: string
    imgHeight?: string
    imgStyle?: CSSProperties & object
    title: string
    text: string
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <Image
                src={props.imgSource}
                alt={props.imgAlt}
                width={props.imgWidth}
                height={props.imgHeight}
                style={props.imgStyle}
            />
            <ServiceTitle>{props.title}</ServiceTitle>
            <ServiceText>{props.text}</ServiceText>
        </StyledService>
    );
};

const StyledService = styled.div`
    width: 25%;
    background-color: rgba(131,255,190,0.79);
    margin: 10px;
`
const ServiceTitle = styled.h3`
`
const ServiceText = styled.p`
`

