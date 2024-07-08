import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

const Slider = styled.div`
    max-width: 538px;
    width: 100%;
    min-height: 338px;
`

const Slide = styled.div`
    width: 100%;
    height: auto;
    min-height: 338px;
    margin-top: 20px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: relative;
`

const Photo = styled.img`
    position: absolute;
    top: -10%;
    z-index: 1;
`

const Text = styled.p`
    color: ${theme.colors.darkSmallerFont};
    font-size: 12px;
    letter-spacing: 1px;
    text-align: center;
`

const Name = styled.span`
    font-weight: 700;
    font-size: 12px;
`

const MainContent = styled.div`
    background-color: white;
    border-radius: 18px;
    
    height: 100%;
    max-width: 538px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    
`

const Icon = styled.div`
    position: absolute;
    top: 42%;
    left: 7%;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 92px 72px 30px;
`

const Pagination = styled.div`
    
    span {
        display: inline-block;
        width: 30px;
        height: 2px;
        
        background-color: white;
        border-radius: 40px;
        
        & + span {
            margin-left: 18px;
        }
        
        &.active {
            background-color: ${theme.colors.accent};
        }
    }
`

export const S = {
    Slider,
    Slide,
    Photo,
    Text,
    Name,
    MainContent,
    Icon,
    ContentWrapper,
    Pagination
}
