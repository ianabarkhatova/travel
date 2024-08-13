import React from 'react';
import image1 from "../../../assets/images/favourite/heading.png"
import {S} from './Holiday_Styles'


export const Holiday = () => {
    return (
        <S.Holiday>
            <S.ImageWrapper>
                <S.Image src={image1}/>
            </S.ImageWrapper>
        </S.Holiday>
    );
};

