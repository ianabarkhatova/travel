import styled from "styled-components";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {SectionDescription} from "../../../components/common/SectionDescription";
import backgroundImage from "../../../assets/images/reviews/reviews-1.webp"


const Reviews = styled.section`
    background-image: url(${backgroundImage});
    width: 100%;
    
    ${SectionTitle} {
        max-width: 640px;
        padding: 20px 0 35px;
    }
    
    ${SectionDescription} {
        padding-top: 50px;    }
`

export const S = {
    Reviews
}