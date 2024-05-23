import React from 'react';
import image2 from "../../../../assets/images/favourite/favourite-1.webp";
import {TripTitle} from "../../../../components/common/TripTitle";
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/common/FlexWrapper";

export const TripCard = () => {
    return (
        <StyledTripCard>
            <FlexWrapper direction={"column"}>
                <StyledImage src={image2} alt="city on the ocean shore"/>
                <TripTitle>Trip to Hawaii </TripTitle>
                <StyledDate>14-29 June</StyledDate>
                <StyledName>by JR Martin</StyledName>

                <StyledTripList>
                    <StyledTripLink>
                        <Icon iconId={"leaf"}
                              width={"14px"}
                              height={"14px"}
                              viewBox={"0 0 14 14"}/>
                    </StyledTripLink>
                    <StyledTripLink>
                        <Icon
                            iconId={"map"}
                            width={"14px"}
                            height={"14px"}
                            viewBox={"0 0 14 14"}/>
                    </StyledTripLink>
                    <StyledTripLink>
                        <Icon
                            iconId={"send"}
                            width={"14px"}
                            height={"14px"}
                            viewBox={"0 0 14 14"}/>
                    </StyledTripLink>
                </StyledTripList>

                <FlexWrapper justify={"space-between"}>
                    <FlexWrapper>
                        <Icon iconId={"building"} width={"16px"} height={"16px"} viewBox={"0 0 16 16"}/>
                        <StyledText>60 people are interested</StyledText>
                    </FlexWrapper>

                    <StyledButton>
                        <Icon
                            iconId={"heart"}
                            width={"20px"}
                            height={"19px"}
                            viewBox={"0 0 20 19"}/>
                    </StyledButton>
                </FlexWrapper>

            </FlexWrapper>
        </StyledTripCard>
    );
};

const StyledTripCard = styled.div`
    width: 370px;
    height: 400px;
    background-color: rgba(217,255,196,0.79);
    border-radius: 26px;
    box-shadow: 0px 1.85px 3.15px 0px rgba(0, 0, 0, 0),0px 8.15px 6.52px 0px rgba(0, 0, 0, 0.01),0px 20px 13px 0px rgba(0, 0, 0, 0.01),0px 38.52px 25.48px 0px rgba(0, 0, 0, 0.01),0px 64.81px 46.85px 0px rgba(0, 0, 0, 0.02),0px 100px 80px 0px rgba(0, 0, 0, 0.02);
    //background: rgb(255, 255, 255);
    position: absolute;
    top: 144px;
    left: 69px;
    z-index: 1;
`

const StyledImage = styled.img`
    width: 321px;
    align-self: center;
    height: 161px;
    object-fit: cover;
    border-radius: 26px;
    
`

const StyledDate = styled.span`
`

const StyledName = styled.span`
`

const StyledText = styled.span`
`

const StyledTripLink = styled.a`
`

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
`

const StyledTripList = styled.div`
    display: flex;
    gap: 18px;
    margin: 30px 0;
`







