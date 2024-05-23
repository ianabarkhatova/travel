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
                <Image imageSource={partner1} imageWidth="143px" imageHeight={"50px"} imageAlt="fly emirates logo"/>
                <Image imageSource={partner2} imageWidth="165px" imageHeight={"50px"} imageAlt="trivago logo"/>
                <Image imageSource={partner3} imageWidth="160px" imageHeight={"50px"} imageAlt="airbnb logo"/>
                <Image imageSource={partner4} imageWidth="172px" imageHeight={"50px"} imageAlt="turkish airlines logo"/>
                <Image imageSource={partner5} imageWidth="221px" imageHeight={"50px"} imageAlt="swiss logo"/>
            </FlexWrapper>
        </StyledPartners>
    );
};

const StyledPartners = styled.section`
    background-color: bisque;
    min-height: 200px;
`



