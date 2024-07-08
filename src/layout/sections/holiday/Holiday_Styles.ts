import styled from "styled-components";
import image from "../../../assets/images/favourite/favourite-4.webp";
import {theme} from "../../../styles/Theme";
import image2 from "../../../assets/images/favourite/line.png";

const Holiday = styled.section`
    position: relative;
    padding-top: 0;
    background-image: url(${image});
    min-height: 600px;
`

const ImageWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 10%;
    
    max-width: 560px;
    width: 100%;
    max-height: 130px;
    height: 100%;
    transform: translateY(-20%);

    @media ${theme.media.medium} {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    
    &::after {
        content: "";
        display: inline-block;
        width: 312px;
        height: 40px;
        background-image: url(${image2});
        background-size: cover;
        background-position: center;
        position: absolute;
        left: 50%;
        bottom: calc(-22% + 1vw);
    }
`

const Image = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 15px;
`

export const S = {
    Holiday,
    ImageWrapper,
    Image
}

