import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {SectionTitle} from "../../../components/common/SectionTitle";

const Favourite = styled.section`
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

const Fast = styled.div`
    flex: 1;
    max-width: 584px;
    
    ${SectionTitle} {
        margin: 15px 0 30px;
    }
`

const Trip = styled.div`
    flex: 1;
    max-width: 650px;
    width: 100%; 
    min-height: 600px; 
    position: relative;

    @media ${theme.media.small} {
        justify-content: center;
        align-items: center;
        min-width: 100%;
    }
    
`

const ImageOne = styled.img`
    max-width: 440px;
    width: 100%;
    height: auto;
    object-fit: contain;
    position: absolute;
    top: -10%;
    right: 0;
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

export const S = {
    Favourite,
    FavouriteWrapper,
    Fast,
    Trip,
    ImageOne,
    CardWrapper
}










