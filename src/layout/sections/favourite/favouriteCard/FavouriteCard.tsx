import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

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
        <StyledFavouriteCard>
            <StyledFavouriteCardWrapper>
                <Icon iconId={props.iconId}
                      width={"55"}
                      height={"55"}
                      viewBox={"0 0 55 55"}/>
                <ContentWrapper>
                    <FastTitle>{props.title}</FastTitle>
                    <FastText>{props.text}</FastText>
                </ContentWrapper>
            </StyledFavouriteCardWrapper>
        </StyledFavouriteCard>
    );
};

const StyledFavouriteCard = styled.div`
    max-width: 100%;
`

const FastTitle = styled.h4`
    font-weight: 700;
    font-size: 16px;
    color: ${theme.colors.darkSmallFont};
`

const FastText = styled.p`
    font-weight: 400;
    font-size: 16px;
    color: ${theme.colors.darkSmallFont};
    text-align: left;
`

const StyledFavouriteCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: flex-start;

    @media ${theme.media.large} {
        width: 100%;
    }
`

const ContentWrapper = styled.div`
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 4px;

    @media ${theme.media.large} {
        max-width: 100%;
    }
`

