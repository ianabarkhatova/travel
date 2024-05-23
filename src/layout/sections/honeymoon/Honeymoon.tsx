import React from 'react';
import romantic1 from "../../../assets/images/romantic/romantic-1.webp"
import romantic2 from "../../../assets/images/romantic/romantic-2.webp"
import romantic3 from "../../../assets/images/romantic/romantic-3.webp"
import romantic4 from "../../../assets/images/romantic/romantic-4.png"
import styled from "styled-components";
import {Image} from "../../../components/image/Image";
import {Package} from "../../../components/package/Package";
import {FlexWrapper} from "../../../components/common/FlexWrapper";




export const Honeymoon = () => {
    return (
        <StyledHoneymoon>
            <FlexWrapper justify={"space-around"}>
                <StyledIllustration>
                    <StyledImage src={romantic1} alt={"couple hugging"} width={"141"} height={"141"}></StyledImage>
                    <StyledImage src={romantic2} alt={"couple at sunset"} width={"230"} height={"230"}></StyledImage>
                    <StyledImage src={romantic3} alt={"ellipse"} width={"74"} height={"74"}></StyledImage>
                    <StyledImage src={romantic4} alt={"couple hugging in front of the sea"} width={"476"} height={"690"}></StyledImage>
                </StyledIllustration>

                <Package></Package>
            </FlexWrapper>

        </StyledHoneymoon>


    );
};

const StyledHoneymoon = styled.section`
    background-color: rgba(98,202,255,0.79);
    max-height: 100vh;
`

const StyledIllustration = styled.div`
    width: 655px;
    height: 745px;
    position: relative;
    z-index: 0;
    
    > * {
        position: absolute;
    }
`

const StyledImage = styled.img`
    :first-child {
        top: 248px;
        z-index: 1;
    }

    :nth-child(2) {
        top: 0;
        left: 67px;
        z-index: 1;
    }

    :nth-child(3) {
        top: 16px;
        left: 310px;
        z-index: 1;
    }

    :nth-child(4) {
        left: 150px;
        bottom: 0;
    }
`




