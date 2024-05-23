import React from 'react';
import styled from "styled-components";
import {SectionDescription} from "../../../components/common/SectionDescription";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {FavouriteCard} from "./favouriteCard/FavouriteCard";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import image1 from "../../../assets/images/favourite/favourite-2.webp";
import image2 from "../../../assets/images/favourite/favourite-1.webp"
import {Image} from "../../../components/image/Image";
import {TripTitle} from "../../../components/common/TripTitle";
import {TripCard} from "./tripCard/TripCard";

const FavouriteCardsData = [
    {
        iconId: "destination",
        title: "Choose Destination",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
    },

    {
        iconId: "availability",
        title: "Check Availability",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
    },
    {
        iconId: "letsgo",
        title: "Let’s Go",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
    }
]

export const Favourite = () => {
    return (
        <StyledFavourite>
            <FlexWrapper justify={"space-between"}>
                <StyledFast>
                    <FlexWrapper direction={"column"}>
                        <SectionDescription align={"left"}>Fast & Easy</SectionDescription>
                        <SectionTitle align={"left"}>Get Your Favourite Resort Bookings</SectionTitle>
                        <FlexWrapper direction={"column"}>
                            {FavouriteCardsData.map((f, index) => {
                                return <FavouriteCard iconId={f.iconId} key={index}
                                                      width={"47"}
                                                      height={"48"}
                                                      viewBox={"0 0 47 48"}
                                                      title={f.title}
                                                      text={f.text}
                                />
                            })}
                        </FlexWrapper>
                    </FlexWrapper>
                </StyledFast>

                <StyledTrip>
                    <TripCard/>
                    <StyledOngoingTrip></StyledOngoingTrip>
                    <Image imageSource={image1}/>
                </StyledTrip>

            </FlexWrapper>

        </StyledFavourite>
    );
};

const StyledFavourite = styled.section`
    background-color: rgba(97,250,255,0.79);
    min-height: 600px;
`

const StyledFast = styled.div`
    width: 458px;
    height: 488px;
    background-color: rgba(54,255,166,0.79);
`

const StyledTrip = styled.div`
    width: 879px;
    height: 600px;
    background-color: rgba(141,212,255,0.79);
`

const StyledOngoingTrip = styled.div`
    width: 263px;
    height: 129px;
    background-color: rgba(234,255,244,0.79);
`




