import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/common/Button";
import face1 from "../../../assets/images/search/face-1.png"
import face2 from "../../../assets/images/search/face-2.png"
import face3 from "../../../assets/images/search/face-3.png"
import face4 from "../../../assets/images/search/face-4.png"
import face5 from "../../../assets/images/search/face-5.png"
import face6 from "../../../assets/images/search/face-6.png"
import ellipse from "../../../assets/images/search/ellipse.png"
import {DropdownSelect} from "../../../components/dropdownSelect/DropdownSelect";
import {FlexWrapper} from "../../../components/common/FlexWrapper";


const dropdownTravelItems = ["Travel Type", "Family", "Single", "Friends"]


const dropdownDurationItems = ["Duration", "3 days", "5 days", "7 days"]


export const Main = () => {
    return (
        <StyledMain>
                <FlexWrapper direction={"column"}>
                    <StyledMainTitle>
                        No matter where you’re going to, we’ll take you there
                    </StyledMainTitle>

                    <StyledForm>
                        <StyledField placeholder={"Where to?"}></StyledField>

                        <DropdownSelect dropdownItems={dropdownTravelItems}/>
                        <DropdownSelect dropdownItems={dropdownDurationItems}/>

                        <Button type={"submit"}>Submit</Button>
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
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 500px;
    background-color: lightsalmon;
`

const StyledMainTitle = styled.h2`
`

const StyledForm = styled.form`
    max-width: 844px;
    max-height: 102px;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    box-sizing: border-box;
`

const StyledField = styled.input`

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






