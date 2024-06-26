import React from 'react';
import image from "../../../../assets/images/favourite/favourite-3.png"
import {TripTitle} from "../../../../components/common/TripTitle";
import {FlexWrapper} from "../../../../components/common/FlexWrapper";
import {S} from "./OngoingTripCard_Styles"

export const OngoingTripCard = () => {
    return (
        <S.OngoingTripCard>
            <FlexWrapper>
                <S.Image src={image}></S.Image>
                <S.OngoingWrapper>
                    <S.Context>Ongoing</S.Context>
                    <TripTitle>Trip to Rome</TripTitle>

                    <S.PercentWrapper>
                        <S.Percent>40%</S.Percent>
                        <S.Completed>completed</S.Completed>
                    </S.PercentWrapper>
                </S.OngoingWrapper>
            </FlexWrapper>
        </S.OngoingTripCard>
    );
};

