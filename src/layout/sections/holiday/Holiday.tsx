import React from 'react';
import image from "../../../assets/images/favourite/favourite-4.webp";
import styled from "styled-components";
import image1 from "../../../assets/images/favourite/heading.png"
import image2 from "../../../assets/images/favourite/line.png"



export const Holiday = () => {
    return (
        <StyledHoliday>
            <StyledImages>
                <StyledImageOne src={image}/>
                <StyledImageTwo src={image1}/>
            </StyledImages>
        </StyledHoliday>
    );
};

const StyledHoliday = styled.section`
`

const StyledImageOne = styled.img`
    width: 100%;
`

const StyledImageTwo = styled.img`
    width: 560px;
    height: 130px;
    position: absolute;
    top: 52%;
    left: 10%;
`

const StyledImages = styled.div`
    display: flex;
    position: relative;
    min-width: 600px;

    &::after {
        content: "";
        display: inline-block;
        width: 312px;
        height: 40px;
        background-image: url(${image2});
        position: absolute;
        left: 32%;
        bottom: 10%;
    }
`

