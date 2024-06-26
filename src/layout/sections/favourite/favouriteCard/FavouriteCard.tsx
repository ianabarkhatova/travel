import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "./FavouriteCard_Styles"

type FavouriteCardPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    title: string
    text: string
}

export const FavouriteCard = (props: FavouriteCardPropsType) => {
    return (
        <S.FavouriteCard>
            <S.FavouriteCardWrapper>
                <Icon iconId={props.iconId}
                      width={"55"}
                      height={"55"}
                      viewBox={"0 0 55 55"}/>
                <S.ContentWrapper>
                    <S.FastTitle>{props.title}</S.FastTitle>
                    <S.FastText>{props.text}</S.FastText>
                </S.ContentWrapper>
            </S.FavouriteCardWrapper>
        </S.FavouriteCard>
    );
};

