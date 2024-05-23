import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/common/FlexWrapper";

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
                      width={"47"}
                      height={"48"}
                      viewBox={"0 0 47 48"}/>
                <FlexWrapper direction={"column"}>
                    <FastTitle>{props.title}</FastTitle>
                    <FastText>{props.text}</FastText>
                </FlexWrapper>
            </StyledFavouriteCardWrapper>
        </StyledFavouriteCard>
    );
};

const StyledFavouriteCard = styled.div`
    background-color: rgba(255,202,186,0.79);
    min-width: 395px;
    min-height: 64px;
    margin: 10px
`

const FastTitle = styled.h4`
`

const FastText = styled.p`
`

const StyledFavouriteCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`

