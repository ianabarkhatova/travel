import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const FavouriteCard = styled.div`
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

const FavouriteCardWrapper = styled.div`
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

export const S = {
    FavouriteCard,
    FastTitle,
    FastText,
    FavouriteCardWrapper,
    ContentWrapper
}