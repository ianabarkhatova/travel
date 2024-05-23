import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import partner1 from "../../../assets/images/partners/partner-1.png"
import partner2 from "../../../assets/images/partners/partner-2.png"
import partner3 from "../../../assets/images/partners/partner-3.png"
import partner4 from "../../../assets/images/partners/partner-4.png"
import partner5 from "../../../assets/images/partners/partner-5.png"
import {Image} from "../../../components/image/Image";


export const Partners = () => {
    return (
        <StyledPartners>
            <FlexWrapper justify={"space-around"}>
                <Image src={partner1} imgAlt="fly emirates logo" imgWidth="143px" imgHeight={"50px"}/>
                <Image src={partner2} imgAlt="trivago logo" imgWidth="165px" imgHeight={"50px"}/>
                <Image src={partner3} imgAlt="airbnb logo" imgWidth="160px" imgHeight={"50px"}/>
                <Image src={partner4} imgAlt="turkish airlines logo" imgWidth="172px" imgHeight={"50px"}/>
                <Image src={partner5} imgAlt="swiss logo" imgWidth="221px" imgHeight={"50px"}/>
            </FlexWrapper>
        </StyledPartners>
    );
};

const StyledPartners = styled.section`
    background-color: bisque;
    min-height: 200px;
`



