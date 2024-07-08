import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const Service = styled.div`
    width: 195px;
    flex-grow: 1;
    padding: 34px 24px;
`

const ImageWrapper = styled.div`
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        width: 50px;
        height: 49px;

        border-radius: 18px 5px 10px 5px;
        background-color: rgb(255, 241, 218);
        transform: rotate(180.00deg);
        
        position: absolute;
        left: 33px;
        top: 25px;
        z-index: -1;
    }
`

const ServiceTitle = styled.h3`
    color: ${theme.colors.darkSecondaryFont};
    font-size: 20px;
    font-weight: 600;
    white-space: nowrap;
    margin: 30px 0 12px;
`

const ServiceText = styled.p`
    color: ${theme.colors.darkSmallFont};
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`

export const S = {
    Service,
    ImageWrapper,
    ServiceTitle,
    ServiceText
}

