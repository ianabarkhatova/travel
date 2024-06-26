import React from 'react';
import {SectionDescription} from "../../../components/common/SectionDescription";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {FavouriteCard} from "./favouriteCard/FavouriteCard";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import image1 from "../../../assets/images/favourite/favourite-2.webp";
import {TripCard} from "./tripCard/TripCard";
import {OngoingTripCard} from "./ongoingTripCard/OngoingTripCard";
import {Container} from "../../../components/common/Container";
import {S} from "./Favourite_Styles"
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
        <S.Favourite>
            <Container>
                <S.FavouriteWrapper>
                    <S.Fast>
                        <FlexWrapper direction={"column"}>
                            <SectionDescription align={"left"}>Fast & Easy</SectionDescription>
                            <SectionTitle align={"left"}>Get Your Favourite Resort Bookings</SectionTitle>
                            <S.CardWrapper>
                                {FavouriteCardsData.map((f, index) => {
                                    return <FavouriteCard iconId={f.iconId} key={index}
                                                          title={f.title}
                                                          text={f.text}
                                    />
                                })}
                            </S.CardWrapper>
                        </FlexWrapper>
                    </S.Fast>

                    <S.Trip>
                        <TripCard/>
                        <OngoingTripCard></OngoingTripCard>
                        <S.ImageOne src={image1}/>
                    </S.Trip>
                </S.FavouriteWrapper>

            </Container>
        </S.Favourite>
    );
};

