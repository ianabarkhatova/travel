import React from 'react';
import image2 from "../../../../assets/images/favourite/favourite-1.webp";
import {TripTitle} from "../../../../components/common/TripTitle";
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/common/FlexWrapper";
import {S} from "./TripCard_Styles"

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
        <S.TripCard>
            <S.ContentWrapper>
                <S.Image src={image2} alt="city on the ocean shore"/>
                <TripTitle>Trip to Hawaii </TripTitle>
                <S.DetailsWrapper>
                    <S.Date>14-29 June</S.Date>
                    <S.Name>by JR Martin</S.Name>
                </S.DetailsWrapper>

                <S.TripList>
                    {tripLinkData.map((i, index) => {
                        return (
                            <S.TripLink>
                                <Icon iconId={i.iconId}
                                      width={"14px"}
                                      height={"14px"}
                                      viewBox={"0 0 14 14"}/>
                            </S.TripLink>
                        )
                    })}
                </S.TripList>

                <FlexWrapper justify={"space-between"}>
                    <S.BottomWrapper>
                        <Icon iconId={"building"} width={"20px"} height={"18px"} viewBox={"0 0 20 18"}/>
                        <S.Text>60 people are interested</S.Text>
                    </S.BottomWrapper>

                    <S.TripButton>
                        <Icon
                            iconId={"heart"}
                            width={"20px"}
                            height={"18px"}
                            viewBox={"0 0 20 18"}/>
                    </S.TripButton>
                </FlexWrapper>
            </S.ContentWrapper>
        </S.TripCard>
    );
};

