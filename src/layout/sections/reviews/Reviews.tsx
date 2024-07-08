import React from 'react';
import {SectionDescription} from "../../../components/common/SectionDescription";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {Slider} from "./slider/Slider";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {S} from './Reviews_Styles'
import {Container} from "../../../components/common/Container";

export const Reviews = () => {
    return (
        <S.Reviews>
            <Container>
                <SectionDescription>Reviews</SectionDescription>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>See What Our Clients Say About Us</SectionTitle>
                    <Slider/>
                </FlexWrapper>
            </Container>

        </S.Reviews>
    );
};







