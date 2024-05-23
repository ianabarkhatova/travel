import React from 'react';
import styled from "styled-components";
import {Image} from "../../../../components/image/Image";

type ServicePropsType = {
    imageSource: string
    imageWidth?: string
    imageHeight?: string
    imageAlt: string
    title: string
    text: string
}

export const Service = (props: ServicePropsType) => {
    return (
        <StyledService>
            <Image
                imageSource={props.imageSource}
                imageWidth={props.imageWidth}
                imageHeight={props.imageHeight}
                imageAlt={props.imageAlt}/>
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

