import React, {CSSProperties} from 'react';
import {Image} from "../../../../components/image/Image";
import {FlexWrapper} from "../../../../components/common/FlexWrapper";
import {S} from './Service_Styles'

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
        <S.Service>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.ImageWrapper>
                    <Image
                        src={props.imgSource}
                        alt={props.imgAlt}
                        width={props.imgWidth}
                        height={props.imgHeight}
                        style={props.imgStyle}
                    />
                </S.ImageWrapper>

                <S.ServiceTitle>{props.title}</S.ServiceTitle>
                <S.ServiceText>{props.text}</S.ServiceText>
            </FlexWrapper>
        </S.Service>
    );
};

