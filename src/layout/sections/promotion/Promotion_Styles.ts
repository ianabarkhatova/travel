import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Promotion = styled.section`
    min-height: 790px;
    height: 100%;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
`

const PromotionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    min-height: 790px;
    position: relative;
    
    @media ${theme.media.large} {
        justify-content: center;
        align-items: center;
    }
`

const PromotionCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 56px;

    @media ${theme.media.large} {
        justify-content: center;
        align-items: center;
        max-width: 600px;
    }
`

export const S = {
    Promotion,
    ContentWrapper,
    PromotionWrapper,
    PromotionCardWrapper,
}