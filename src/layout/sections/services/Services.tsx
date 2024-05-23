import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/common/FlexWrapper";
import {SectionDescription} from "../../../components/common/SectionDescription";
import {SectionTitle} from "../../../components/common/SectionTitle";
import {Service} from "./service/Service";
import service1 from "../../../assets/images/services/service-1.png";
import service2 from "../../../assets/images/services/service-2.png";
import service3 from "../../../assets/images/services/service-3.png";
import service4 from "../../../assets/images/services/service-4.png";

const servicesData = [
    {
        imgSource: service1,
        imgAlt: "logo of a person with a flag",
        title: "Guided Tours",
        text: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
    },
    {
        imgSource: service2,
        imgAlt: "logo of a plane",
        title: "Best Flights Options",
        text: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
    },
    {
        imgSource: service3,
        imgAlt: "logo of hands in prayer",
        title: "Religious Tours",
        text: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
    },
    {
        imgSource: service4,
        imgAlt: "logo of a medical team",
        title: "Medical insurance",
        text: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
    }
]


export const Services = () => {
    return (
        <StyledServices>
            <SectionDescription>CATEGORY</SectionDescription>
            <SectionTitle>We Offer Best Services</SectionTitle>
            <FlexWrapper>

                {servicesData.map((s, index) => {
                    return <Service imgSource={s.imgSource} key={index}
                                    imgAlt={s.imgAlt}
                                    imgWidth="72px"
                                    imgHeight="65px"
                                    title={s.title}
                                    text={s.text}
                    />
                })}
            </FlexWrapper>
        </StyledServices>
    );
};

const StyledServices = styled.section`
    background-color: coral;
    min-height: 500px;
`

