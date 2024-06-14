import React from 'react';
import styled from "styled-components";
import {SectionDescription} from "../../../components/common/SectionDescription";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {FavouriteCard} from "./favouriteCard/FavouriteCard";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import image1 from "../../../assets/images/favourite/favourite-2.webp";
import {TripCard} from "./tripCard/TripCard";
import {OngoingTripCard} from "./ongoingTripCard/OngoingTripCard";
import {Container} from "../../../components/common/Container";
import {theme} from "../../../styles/Theme";

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
            <Container>
                <FavouriteWrapper>
                    <StyledFast>
                        <FlexWrapper direction={"column"}>
                            <SectionDescription align={"left"}>Fast & Easy</SectionDescription>
                            <SectionTitle align={"left"}>Get Your Favourite Resort Bookings</SectionTitle>
                            <CardWrapper>
                                {FavouriteCardsData.map((f, index) => {
                                    return <FavouriteCard iconId={f.iconId} key={index}
                                                          title={f.title}
                                                          text={f.text}
                                    />
                                })}
                            </CardWrapper>
                        </FlexWrapper>
                    </StyledFast>

                    <StyledTrip>
                        <TripCard/>
                        <OngoingTripCard></OngoingTripCard>
                        <StyledImageOne src={image1}/>
                    </StyledTrip>
                </FavouriteWrapper>

            </Container>
        </StyledFavourite>
    );
};

const StyledFavourite = styled.section`
`

const FavouriteWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;

    @media ${theme.media.large} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const StyledFast = styled.div`
    flex: 1;
    max-width: 584px;
    
    ${SectionTitle} {
        margin: 15px 0 30px;
    }
`

const StyledTrip = styled.div`
    flex: 1;
    max-width: 650px;
    min-width: 800px; 
    min-height: 600px; 
    position: relative;

    @media ${theme.media.small} {
        justify-content: center;
        align-items: center;
        min-width: 100%;
    }
    
`

const StyledImageOne = styled.img`
    width: 500px;
    height: auto;
    object-fit: contain;
    position: absolute;
    top: 0;
    left: 42%;
    z-index: 0;

    @media ${theme.media.small} {
        display: none;
    }
`

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`










