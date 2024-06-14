import React from 'react';
import styled from "styled-components";
import image from "../../../../assets/images/favourite/favourite-3.png"
import {TripTitle} from "../../../../components/common/TripTitle";
import {FlexWrapper} from "../../../../components/common/FlexWrapper";
import {font} from "../../../../styles/Common";
import {theme} from "../../../../styles/Theme";

export const OngoingTripCard = () => {
    return (
        <StyledOngoingTripCard>
            <FlexWrapper>
                <StyledImage src={image}></StyledImage>
                <OngoingWrapper>
                    <StyledContext>Ongoing</StyledContext>
                    <TripTitle>Trip to Rome</TripTitle>

                    <PercentWrapper>
                        <StyledPercent>40%</StyledPercent>
                        <StyledCompleted>completed</StyledCompleted>
                    </PercentWrapper>

                </OngoingWrapper>
            </FlexWrapper>
        </StyledOngoingTripCard>
    );
};

const StyledOngoingTripCard = styled.div`
    width: 262px;
    height: 128px;
    background-color: #FFFFFFFF;
    border-radius: 18px;
    box-shadow: 0px 1.85px 3.15px 0px rgba(0, 0, 0, 0),0px 8.15px 6.52px 0px rgba(0, 0, 0, 0.01),0px 20px 13px 0px rgba(0, 0, 0, 0.01),0px 38.52px 25.48px 0px rgba(0, 0, 0, 0.01),0px 64.81px 46.85px 0px rgba(0, 0, 0, 0.02),0px 100px 80px 0px rgba(0, 0, 0, 0.02);
    
    position: absolute;
    top: 388px;
    left: 310px;
    z-index: 2;
    
    padding: 16px 20px 22px;
    display: flex;
    flex-direction: column;

    @media ${theme.media.small} {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        //display: none;
    }
`

const StyledImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 8px;
`

const OngoingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const StyledContext = styled.span`
    ${font({
        weight: 500,
        Fmax: 14,
    })};
    
    color: #84829A;
    
`

const PercentWrapper = styled.div`
    display: flex;
    gap: 4px;
    margin-top: 10px;
    position: relative;

    &::after {
        content: "";
        display: inline-block;
        width: 156px;
        height: 5px;
        background: ${theme.colors.accent};
        border-radius: 30px;

        position: absolute;
        left: 0;
        bottom: -12px;
        z-index: -1;
    }
    
`

const StyledPercent = styled.span`
    ${font({
        weight: 500,
        Fmax: 14,
        color: theme.colors.accent,
    })};
`

const StyledCompleted = styled.span`
    ${font({
        weight: 500,
        Fmax: 14,
        color: theme.colors.darkSmallerFont,
    })};
`

