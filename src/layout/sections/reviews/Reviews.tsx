import React from 'react';
import {SectionDescription} from "../../../components/common/SectionDescription";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {Slider} from "./slider/Slider";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {S} from './Reviews_Styles'

export const Reviews = () => {
    return (
        <S.Reviews>
            <SectionDescription>Reviews</SectionDescription>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>See What Our Clients Say About Us</SectionTitle>
                    <Slider/>
                </FlexWrapper>
        </S.Reviews>
    );
};







