import styled from "styled-components";
import background from "../../../assets/images/header/background-1.webp";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";
import {Button} from "../../../components/common/Button";

const Main = styled.section`
    background-image: url(${background});
    background-size: cover;
`

const MainContent = styled.div`
    min-height: 442px;
    margin-top: 300px;
`

const MainTitle = styled.h2`
    ${font({
    weight: 700,
    Fmax: 58,
    Fmin: 36,
    color: theme.colors.lightFont
})}
    
    text-align: left;
    max-width: 630px;

    @media ${theme.media.small} {
        font-size: 46px;
    }

    @media ${theme.media.xSmall} {
        font-size: 40px;
    }
`

const Form = styled.form`
    width: 100%;
    max-width: 860px;
    border-radius: 5px;

    backdrop-filter: blur(14px);
    background-color: rgba(243, 243, 243, 0.6);
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(50px + 2vw);
    margin: 35px 0 80px 0;
    padding: 39px 28px 35px;

    ${Button} {
        min-width: 176px;
        text-align: center;
        margin: 0;
        padding: 0;
    }

    @media screen and (max-width: 880px) {
        flex-direction: column;
        gap: 10px;
        
        ${Button} {
            width: 100%;
        }
    }
`

const Fields = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;

    @media screen and (max-width: 880px) {
        flex-direction: column;
        gap: 10px;
    }
`

const FieldWrapper = styled.div`
    display: flex;
    position: relative;

    &::after {
        content: "";
        display: inline-block;
        background-color: #D0D0D0;
        position: absolute;
        width: 3px;
        height: 48px;
        border-radius: 25px;
        transform: translate(-50%, -50%);
        top: 50%;
        right: 0;

        @media screen and (max-width: 880px) {
            display: none;
        }
    }
    
`

const Field = styled.input`
    position: relative;
    
    border: none;
    border-radius: 5px;
    background-color: transparent;
    
    color: ${theme.colors.lightFont};
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 20px;
    
    flex: 2;
    
    &::placeholder {
        color: ${theme.colors.lightFont};
    }
    
    &:focus-visible {
        outline: 1px solid rgba(243, 243, 243, 0.6);
        border-radius: 5px;
    }
`

const Images = styled.div`
    position: relative;
    display: flex;
`

const ImageIcon = styled.img`
    height: 36px;
    width: 36px;

    :not(:first-child){
        position: absolute;
    }

    :nth-child(2) {
        left: 24px;
    }

    :nth-child(3) {
        left: 48px;
    }

    :nth-child(4) {
        left: 72px;
    }

    :nth-child(5) {
        left: 96px;
    }

    :nth-child(6) {
        left: 120px;
    }

    :nth-child(7) {
        left: 144px;
    }
`

const MainText = styled.span`
    font-weight: 500;
    font-size: 12px;
    text-align: left;
    color: ${theme.colors.lightFont};
    padding: 10px;

`

const Reviews = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
    max-width: 534px;

    @media screen and (max-width: 880px) {
        display: none;
    }
`

export const S = {
    Main,
    MainContent,
    MainTitle,
    Form,
    Fields,
    FieldWrapper,
    Field,
    Images,
    ImageIcon,
    MainText,
    Reviews
}






