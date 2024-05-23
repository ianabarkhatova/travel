import React from 'react';
import styled from "styled-components";
import image from "../../../../assets/images/favourite/favourite-3.png"
import {TripTitle} from "../../../../components/common/TripTitle";
import {FlexWrapper} from "../../../../components/common/FlexWrapper";

export const OngoingTripCard = () => {
    return (
        <StyledOngoingTripCard>
            <FlexWrapper>
                <StyledImage src={image}></StyledImage>
                <FlexWrapper direction={"column"}>
                    <StyledContext>Ongoing</StyledContext>
                    <TripTitle>Trip to Rome</TripTitle>
                </FlexWrapper>
            </FlexWrapper>

            <StyledPercent>40%</StyledPercent>
            <StyledCompleted>completed</StyledCompleted>
        </StyledOngoingTripCard>
    );
};

const StyledOngoingTripCard = styled.div`
    width: 263px;
    height: 129px;
    background-color: rgba(234,255,244,0.79);
    border-radius: 18px;
    position: absolute;
    top: 363px;
    left: 291px;
    z-index: 2;
`

const StyledImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
`

const StyledContext = styled.span`
`

const StyledPercent = styled.span`
    color: red;
`

const StyledCompleted = styled.span`
`

