import React from 'react';
import image2 from "../../../../assets/images/favourite/favourite-1.webp";
import {TripTitle} from "../../../../components/common/TripTitle";
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/common/FlexWrapper";
import {font} from "../../../../styles/Common";
import {theme} from "../../../../styles/Theme";

const tripLinkData = [
    {
        iconId: "leaf",
    },

    {
        iconId: "map",
    },

    {
        iconId: "send",
    }
]

export const TripCard = () => {
    return (
        <StyledTripCard>
            <ContentWrapper>
                    <StyledImage src={image2} alt="city on the ocean shore"/>
                    <TripTitle>Trip to Hawaii </TripTitle>
                    <DetailsWrapper>
                        <StyledDate>14-29 June</StyledDate>
                        <StyledName>by JR Martin</StyledName>
                    </DetailsWrapper>

                    <StyledTripList>
                        {tripLinkData.map((i, index) => {
                            return(
                                <StyledTripLink>
                                    <Icon iconId={i.iconId}
                                          width={"14px"}
                                          height={"14px"}
                                          viewBox={"0 0 14 14"}/>
                                </StyledTripLink>
                            )
                        })}
                    </StyledTripList>

                    <FlexWrapper justify={"space-between"}>
                        <BottomWrapper>
                            <Icon iconId={"building"} width={"20px"} height={"18px"} viewBox={"0 0 20 18"}/>
                            <StyledText>60 people are interested</StyledText>
                        </BottomWrapper>

                        <StyledButton>
                            <Icon
                                iconId={"heart"}
                                width={"20px"}
                                height={"18px"}
                                viewBox={"0 0 20 18"}/>
                        </StyledButton>
                    </FlexWrapper>

            </ContentWrapper>
        </StyledTripCard>
    );
};

const StyledTripCard = styled.div`
    max-width: 370px;
    width: 100%;
    height: auto;
    background-color: #FFFFFFFF;
    border-radius: 26px;
    box-shadow: 0px 1.85px 3.15px 0px rgba(0, 0, 0, 0),0px 8.15px 6.52px 0px rgba(0, 0, 0, 0.01),0px 20px 13px 0px rgba(0, 0, 0, 0.01),0px 38.52px 25.48px 0px rgba(0, 0, 0, 0.01),0px 64.81px 46.85px 0px rgba(0, 0, 0, 0.02),0px 100px 80px 0px rgba(0, 0, 0, 0.02);
    position: absolute;
    top: 28%;
    left: 10%;
    z-index: 1;
    padding: 20px 24px 30px;

    @media ${theme.media.small} {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const ContentWrapper = styled.div`
    flex-direction: column;
`

const StyledImage = styled.img`
    //min-width: 320px;
    width: 100%;
    max-height: 162px;
    align-self: center;
    object-fit: cover;
    border-radius: 26px;
    margin-bottom: 26px;

    @media ${theme.media.small} {

    }
`

const DetailsWrapper = styled.div`
    display: flex;
    gap: 16px;
    padding: 12px 0 20px;
`

const StyledDate = styled.span`
    ${font({
        weight: 500,
        Fmax: 16,
    })}
    
    color: #84829A;
    text-align: left;
    
    position: relative;

    &::after {
        content: "";
        display: inline-block;

        background-color: #84829A;
        height: 16px;
        width: 1px;

        position: absolute;
        bottom: 4px;
        left: 94px;
        right: 0;
    }
`

const StyledName = styled.span`
    ${font({
        weight: 500,
        Fmax: 16,
    })};

    color: #84829A;
`

const StyledText = styled.span`
    ${font({
        weight: 500,
        Fmax: 16,
    })};
    
    color: #84829A;
`

const StyledTripLink = styled.a`
    position: relative;

    &::before {
        content: "";
        display: inline-block;
        width: 36px;
        height: 36px;
        background: #F5F5F5;
        border-radius: 50%;

        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
    }
`

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
`

const StyledTripList = styled.div`
    display: flex;
    gap: 36px;
    margin: 30px 0;
`

const BottomWrapper = styled.div`
    display: flex;
    gap: 8px;
    align-items: flex-start;
    
`







