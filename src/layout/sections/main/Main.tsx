import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/common/Button";
import face1 from "../../../assets/images/search/face-1.png";
import face2 from "../../../assets/images/search/face-2.png";
import face3 from "../../../assets/images/search/face-3.png";
import face4 from "../../../assets/images/search/face-4.png";
import face5 from "../../../assets/images/search/face-5.png";
import face6 from "../../../assets/images/search/face-6.png";
import background from "../../../assets/images/header/background-1.webp"
import {DropdownSelect} from "../../../components/dropdownSelect/DropdownSelect";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {Container} from "../../../components/common/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


const dropdownTravelItems = ["Travel Type", "Family", "Single", "Friends"]

const dropdownDurationItems = ["Duration", "3 days", "5 days", "7 days"]

const dropdownImagesData = [
    {
        image : face1,
        alt: "young man's portrait"
    },
    {
        image: face2,
        alt: "young woman's portrait"
    },
    {
        image: face3,
        alt: "man's portrait"
    },
    {
        image: face4,
        alt: "man's side photo"
    },
    {
        image: face5,
        alt: "young man's photo"
    },
    {
        image: face6,
        alt: "young man's photo"
    }
]


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainContent>
                    <FlexWrapper direction={"column"} justify={"space-around"}>
                        <StyledMainTitle>
                            No matter where you’re going to, we’ll take you there
                        </StyledMainTitle>

                        <StyledForm>
                            <StyledFields>
                                <StyledFieldWrapper>
                                    <StyledField placeholder={"Where to?"}/>
                                </StyledFieldWrapper>

                                <DropdownSelect dropdownItems={dropdownTravelItems}/>
                                <DropdownSelect dropdownItems={dropdownDurationItems}/>
                            </StyledFields>

                            <Button big type={"submit"}>Submit</Button>
                        </StyledForm>

                        <StyledReviews>
                            <StyledImages>
                                {dropdownImagesData.map((d,index) => {
                                    return(
                                        <StyledImageIcon key={index}
                                                         src={d.image}
                                                         alt={d.alt}/>
                                    )
                                })}

                            </StyledImages>

                            <StyledMainText>
                                2,500 people booked Tommorowland Event in last 24 hours
                            </StyledMainText>

                        </StyledReviews>
                    </FlexWrapper>
                </MainContent>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    background-image: url(${background});
    background-size: cover;
`

const MainContent = styled.div`
    min-height: 442px;
    margin-top: 300px;
`

const StyledMainTitle = styled.h2`
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

const StyledForm = styled.form`
    width: 100%;
    max-width: 844px;
    border-radius: 5px;

    backdrop-filter: blur(14px);
    background-color: rgba(243, 243, 243, 0.6);
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: calc(50px + 2vw);
    margin: 35px 0 28px 0;
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

const StyledFields = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 880px) {
        flex-direction: column;
        gap: 10px;
    }
`

const StyledFieldWrapper = styled.div`
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

        @media screen and (max-width: 880px) {
            display: none;
        }
    }
    
`

const StyledField = styled.input`
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

const StyledImages = styled.div`
    position: relative;
    display: flex;
`

const StyledImageIcon = styled.img`
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

const StyledMainText = styled.span`
    font-weight: 500;
    font-size: 12px;
    text-align: left;
    color: ${theme.colors.lightFont};
    padding: 10px;

`

const StyledReviews = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 14px;
    max-width: 534px;

    @media screen and (max-width: 880px) {
        display: none;
    }
`






