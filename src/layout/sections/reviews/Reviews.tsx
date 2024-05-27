import React from 'react';
import styled from "styled-components";
import backgroundImage from "../../../assets/images/reviews/reviews-1.webp"
import {SectionDescription} from "../../../components/common/SectionDescription";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {Slider} from "./slider/Slider";
import {FlexWrapper} from "../../../components/common/FlexWrapper";

export const Reviews = () => {
    return (
        <StyledReviews>
            <FlexWrapper direction={"column"} justify={"center"} align={"center"}>
                <SectionDescription>Reviews</SectionDescription>
                <SectionTitle>See What Our Clients Say About Us</SectionTitle>
                <Slider/>
            </FlexWrapper>

        </StyledReviews>
    );
};

const StyledReviews = styled.section`
    background-image: url(${backgroundImage});
    min-height: 768px;
    width: 100%;
`


