import React, {CSSProperties} from 'react';
import styled from "styled-components";
import {Image} from "../../../../components/image/Image";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/common/FlexWrapper";

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
            <FlexWrapper direction={"column"} align={"center"}>
                <ImageWrapper>
                    <Image
                        src={props.imgSource}
                        alt={props.imgAlt}
                        width={props.imgWidth}
                        height={props.imgHeight}
                        style={props.imgStyle}
                    />
                </ImageWrapper>

                <ServiceTitle>{props.title}</ServiceTitle>
                <ServiceText>{props.text}</ServiceText>
            </FlexWrapper>
        </StyledService>
    );
};

const StyledService = styled.div`
    width: 195px;
    flex-grow: 1;
    padding: 34px 24px;
`

const ImageWrapper = styled.div`
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        width: 50px;
        height: 49px;

        border-radius: 18px 5px 10px 5px;
        background-color: rgb(255, 241, 218);
        transform: rotate(180.00deg);
        
        position: absolute;
        left: 33px;
        top: 25px;
        z-index: -1;
    }
`

const ServiceTitle = styled.h3`
    color: ${theme.colors.darkSecondaryFont};
    font-size: 20px;
    font-weight: 600;
    white-space: nowrap;
    margin: 30px 0 12px;
`

const ServiceText = styled.p`
    color: ${theme.colors.darkSmallFont};
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`

