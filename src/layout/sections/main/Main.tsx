import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/common/Button";
import face1 from "../../../assets/images/search/face-1.png";
import face2 from "../../../assets/images/search/face-2.png";
import face3 from "../../../assets/images/search/face-3.png";
import face4 from "../../../assets/images/search/face-4.png";
import face5 from "../../../assets/images/search/face-5.png";
import face6 from "../../../assets/images/search/face-6.png";
import ellipse from "../../../assets/images/search/ellipse.png";
import background from "../../../assets/images/header/background-1.webp"
import {DropdownSelect} from "../../../components/dropdownSelect/DropdownSelect";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {Container} from "../../../components/common/Container";
import {theme} from "../../../styles/Theme";


const dropdownTravelItems = ["Travel Type", "Family", "Single", "Friends"]


const dropdownDurationItems = ["Duration", "3 days", "5 days", "7 days"]


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
                                <StyledField placeholder={"Where to?"}></StyledField>

                                <DropdownSelect dropdownItems={dropdownTravelItems}/>
                                <DropdownSelect dropdownItems={dropdownDurationItems}/>
                            </StyledFields>

                            <Button big type={"submit"}>Submit</Button>
                        </StyledForm>

                        <StyledReviews>
                            <StyledImages>
                                <StyledImageIcon src={face1} alt={""}/>
                                <StyledImageIcon src={face2} alt={""}/>
                                <StyledImageIcon src={face3} alt={""}/>
                                <StyledImageIcon src={face4} alt={""}/>
                                <StyledImageIcon src={face5} alt={""}/>
                                <StyledImageIcon src={face6} alt={""}/>
                                <StyledImageIcon src={ellipse} alt={""}/>
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
    height: 100vh;
    background-color: lightsalmon;
    display: flex;
    background-image: url(${background});
    background-size: cover;
`

const MainContent = styled.div`
    min-height: 442px;
    margin-top: 300px;
`

const StyledMainTitle = styled.h2`
    font-size: 58px;
    font-weight: 700;
    text-align: left;
    color: ${theme.colors.lightFont};
    max-width: 630px;
`

const StyledForm = styled.form`
    width: 100%;
    max-width: 844px;
    border-radius: 5px;

    backdrop-filter: blur(14px);
    background: rgba(243, 243, 243, 0.6);
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 35px 0 28px 0;
    padding: 39px 28px 35px;
`

const StyledFields = styled.div`
    display: flex;
    width: 100%;
`

const StyledField = styled.input`
    border: 1px solid rgba(243, 243, 243, 0.6);
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
`

const StyledReviews = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 620px;
`






