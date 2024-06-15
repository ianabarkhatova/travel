import React from 'react';
import styled from "styled-components";
import backgroundImage from "../../../assets/images/reviews/reviews-1.webp"
import {SectionDescription} from "../../../components/common/SectionDescription";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {Slider} from "./slider/Slider";
import {Container} from "../../../components/common/Container";
import {FlexWrapper} from "../../../components/common/FlexWrapper";

export const Reviews = () => {
    return (
        <StyledReviews>
            <SectionDescription>Reviews</SectionDescription>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle>See What Our Clients Say About Us</SectionTitle>
                    <Slider/>
                </FlexWrapper>
        </StyledReviews>
    );
};

const StyledReviews = styled.section`
    background-image: url(${backgroundImage});
    width: 100%;
    
    ${Container} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    ${SectionTitle} {
        max-width: 640px;
        padding-bottom: 35px;
    }
    
    ${SectionDescription} {
        padding-top: 50px;    }
    
`





